
import { useState, useCallback, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Image as ImageIcon, X, Download } from "lucide-react";

interface UploadedImage {
  file: File;
  preview: string;
  originalSize: number;
  compressedSize?: number;
  compressionRatio?: number;
  compressedBlob?: Blob;
}

const ImageUpload = () => {
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleFiles(files);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const compressImage = (file: File): Promise<Blob> => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        // Calculate new dimensions (compress by reducing quality and potentially size)
        const maxWidth = 1920;
        const maxHeight = 1080;
        let { width, height } = img;
        
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width *= ratio;
          height *= ratio;
        }
        
        canvas.width = width;
        canvas.height = height;
        
        ctx?.drawImage(img, 0, 0, width, height);
        
        canvas.toBlob(
          (blob) => {
            resolve(blob!);
          },
          file.type,
          0.7 // 70% quality
        );
      };
      
      img.src = URL.createObjectURL(file);
    });
  };

  const handleFiles = (files: File[]) => {
    const imageFiles = files.filter(file => 
      file.type === 'image/jpeg' || file.type === 'image/png'
    );

    imageFiles.forEach(async (file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage: UploadedImage = {
          file,
          preview: e.target?.result as string,
          originalSize: file.size,
        };
        
        setImages(prev => [...prev, newImage]);
        
        // Perform actual compression
        compressImage(file).then((compressedBlob) => {
          const compressionRatio = ((file.size - compressedBlob.size) / file.size) * 100;
          
          setImages(prev => 
            prev.map(img => 
              img.file === file 
                ? { 
                    ...img, 
                    compressedSize: compressedBlob.size, 
                    compressionRatio,
                    compressedBlob 
                  }
                : img
            )
          );
        });
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const downloadCompressed = (image: UploadedImage) => {
    if (!image.compressedBlob) return;
    
    const url = URL.createObjectURL(image.compressedBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `compressed_${image.file.name}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <section id="upload-section" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Upload Your Images
          </h2>
          <p className="text-xl text-gray-600">
            Drag and drop or click to select JPG and PNG files
          </p>
        </div>

        {/* Upload Area */}
        <Card className={`p-12 border-2 border-dashed transition-all duration-200 hover-lift ${
          dragActive 
            ? 'border-gray-900 bg-gray-100' 
            : 'border-gray-300 hover:border-gray-400'
        }`}>
          <div
            className="text-center"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Upload className="w-8 h-8 text-gray-600" />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Drop your images here
            </h3>
            <p className="text-gray-600 mb-6">
              or click to browse files
            </p>
            
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/jpeg,image/png"
              onChange={handleFileInput}
              className="hidden"
            />
            <Button 
              onClick={handleButtonClick}
              className="bg-black hover:bg-gray-800 text-white cursor-pointer"
            >
              Select Files
            </Button>
          </div>
        </Card>

        {/* Uploaded Images */}
        {images.length > 0 && (
          <div className="mt-12 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Processing Images</h3>
            
            <div className="grid gap-6">
              {images.map((image, index) => (
                <Card key={index} className="p-6 hover-lift">
                  <div className="flex items-center space-x-6">
                    <div className="flex-shrink-0">
                      <img
                        src={image.preview}
                        alt="Preview"
                        className="w-20 h-20 object-cover rounded-lg border"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-medium text-gray-900 truncate">
                          {image.file.name}
                        </h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeImage(index)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Original:</span> {formatFileSize(image.originalSize)}
                        </div>
                        <div>
                          <span className="font-medium">Compressed:</span>{' '}
                          {image.compressedSize ? (
                            formatFileSize(image.compressedSize)
                          ) : (
                            <span className="animate-pulse-subtle">Processing...</span>
                          )}
                        </div>
                        <div>
                          <span className="font-medium">Savings:</span>{' '}
                          {image.compressionRatio ? (
                            <span className="text-green-600 font-semibold">
                              {image.compressionRatio.toFixed(1)}%
                            </span>
                          ) : (
                            <span className="animate-pulse-subtle">Calculating...</span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {image.compressedBlob && (
                      <div className="flex-shrink-0">
                        <Button 
                          onClick={() => downloadCompressed(image)}
                          className="bg-black hover:bg-gray-800 text-white"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageUpload;
