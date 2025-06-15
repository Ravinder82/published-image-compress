
import { useState, useCallback, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Upload, Image as ImageIcon, X, Download, Settings, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import CompressionControls from "@/components/CompressionControls";
import { 
  compressImage, 
  CompressionOptions, 
  CompressionPreset, 
  COMPRESSION_PRESETS,
  getOptimalFormat 
} from "@/utils/imageCompression";

interface UploadedImage {
  id: string;
  file: File;
  preview: string;
  originalSize: number;
  compressedSize?: number;
  compressionRatio?: number;
  compressedBlob?: Blob;
  compressedPreview?: string;
  processingProgress: number;
  isProcessing: boolean;
  error?: string;
}

const ImageUpload = () => {
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [compressionOptions, setCompressionOptions] = useState<CompressionOptions>({
    quality: 0.8,
    format: 'webp',
    maxWidth: 1920,
    maxHeight: 1080,
    preserveMetadata: false
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

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

  const handleFiles = (files: File[]) => {
    const imageFiles = files.filter(file => 
      file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/webp'
    );

    if (imageFiles.length === 0) {
      toast({
        title: "Invalid files",
        description: "Please select valid image files (JPEG, PNG, WebP)",
        variant: "destructive",
      });
      return;
    }

    imageFiles.forEach(async (file) => {
      const id = Math.random().toString(36).substring(7);
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const newImage: UploadedImage = {
          id,
          file,
          preview: e.target?.result as string,
          originalSize: file.size,
          processingProgress: 0,
          isProcessing: true,
        };
        
        setImages(prev => [...prev, newImage]);
        
        // Suggest optimal format
        const suggestedFormat = getOptimalFormat(file);
        const options = { ...compressionOptions, format: suggestedFormat };
        
        // Perform compression with progress tracking
        compressImage(file, options, (progress) => {
          setImages(prev => 
            prev.map(img => 
              img.id === id 
                ? { ...img, processingProgress: progress }
                : img
            )
          );
        }).then((compressedBlob) => {
          const compressionRatio = ((file.size - compressedBlob.size) / file.size) * 100;
          const compressedPreview = URL.createObjectURL(compressedBlob);
          
          setImages(prev => 
            prev.map(img => 
              img.id === id 
                ? { 
                    ...img, 
                    compressedSize: compressedBlob.size, 
                    compressionRatio,
                    compressedBlob,
                    compressedPreview,
                    isProcessing: false,
                    processingProgress: 100
                  }
                : img
            )
          );
        }).catch((error) => {
          setImages(prev => 
            prev.map(img => 
              img.id === id 
                ? { ...img, error: error.message, isProcessing: false }
                : img
            )
          );
          
          toast({
            title: "Compression failed",
            description: `Failed to compress ${file.name}`,
            variant: "destructive",
          });
        });
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (id: string) => {
    setImages(prev => {
      const imageToRemove = prev.find(img => img.id === id);
      if (imageToRemove?.compressedPreview) {
        URL.revokeObjectURL(imageToRemove.compressedPreview);
      }
      return prev.filter(img => img.id !== id);
    });
  };

  const downloadCompressed = (image: UploadedImage) => {
    if (!image.compressedBlob) return;
    
    const url = URL.createObjectURL(image.compressedBlob);
    const a = document.createElement('a');
    a.href = url;
    const extension = compressionOptions.format === 'jpeg' ? 'jpg' : compressionOptions.format;
    a.download = `compressed_${image.file.name.replace(/\.[^/.]+$/, `.${extension}`)}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadAll = () => {
    const compressedImages = images.filter(img => img.compressedBlob);
    if (compressedImages.length === 0) return;

    compressedImages.forEach(image => downloadCompressed(image));
    
    toast({
      title: "Download started",
      description: `Downloading ${compressedImages.length} compressed images`,
    });
  };

  const recompressAll = async () => {
    const imagesToRecompress = images.filter(img => !img.isProcessing);
    
    for (const image of imagesToRecompress) {
      setImages(prev => 
        prev.map(img => 
          img.id === image.id 
            ? { ...img, isProcessing: true, processingProgress: 0 }
            : img
        )
      );

      try {
        const compressedBlob = await compressImage(image.file, compressionOptions, (progress) => {
          setImages(prev => 
            prev.map(img => 
              img.id === image.id 
                ? { ...img, processingProgress: progress }
                : img
            )
          );
        });

        const compressionRatio = ((image.file.size - compressedBlob.size) / image.file.size) * 100;
        const compressedPreview = URL.createObjectURL(compressedBlob);
        
        if (image.compressedPreview) {
          URL.revokeObjectURL(image.compressedPreview);
        }
        
        setImages(prev => 
          prev.map(img => 
            img.id === image.id 
              ? { 
                  ...img, 
                  compressedSize: compressedBlob.size, 
                  compressionRatio,
                  compressedBlob,
                  compressedPreview,
                  isProcessing: false,
                  processingProgress: 100
                }
              : img
          )
        );
      } catch (error) {
        setImages(prev => 
          prev.map(img => 
            img.id === image.id 
              ? { ...img, error: (error as Error).message, isProcessing: false }
              : img
          )
        );
      }
    }
  };

  const handlePresetSelect = (preset: CompressionPreset) => {
    setCompressionOptions(preset.options);
    toast({
      title: "Preset applied",
      description: `Using ${preset.name} settings`,
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const totalOriginalSize = images.reduce((sum, img) => sum + img.originalSize, 0);
  const totalCompressedSize = images.reduce((sum, img) => sum + (img.compressedSize || 0), 0);
  const overallSavings = totalOriginalSize > 0 ? ((totalOriginalSize - totalCompressedSize) / totalOriginalSize) * 100 : 0;

  return (
    <section id="upload-section" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Upload Your Images
          </h2>
          <p className="text-xl text-gray-600">
            Advanced compression with real-time preview and multiple format support
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Upload Area */}
          <div className="lg:col-span-2 space-y-6">
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
                  or click to browse files (JPEG, PNG, WebP)
                </p>
                
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/jpeg,image/png,image/webp"
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

            {/* Stats Summary */}
            {images.length > 0 && (
              <Card className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{images.length}</div>
                    <div className="text-sm text-gray-600">Images</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{formatFileSize(totalOriginalSize)}</div>
                    <div className="text-sm text-gray-600">Original Size</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{overallSavings.toFixed(1)}%</div>
                    <div className="text-sm text-gray-600">Overall Savings</div>
                  </div>
                </div>
                
                {images.some(img => img.compressedBlob) && (
                  <div className="flex justify-center gap-4 mt-6">
                    <Button onClick={downloadAll} className="bg-black hover:bg-gray-800 text-white">
                      <Download className="w-4 h-4 mr-2" />
                      Download All
                    </Button>
                    <Button onClick={recompressAll} variant="outline">
                      Recompress All
                    </Button>
                  </div>
                )}
              </Card>
            )}

            {/* Uploaded Images */}
            {images.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-gray-900">Processing Images</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowControls(!showControls)}
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    {showControls ? 'Hide' : 'Show'} Controls
                  </Button>
                </div>
                
                <div className="grid gap-6">
                  {images.map((image) => (
                    <Card key={image.id} className="p-6 hover-lift">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0 space-y-2">
                          <img
                            src={image.preview}
                            alt="Original"
                            className="w-20 h-20 object-cover rounded-lg border"
                          />
                          {image.compressedPreview && (
                            <img
                              src={image.compressedPreview}
                              alt="Compressed"
                              className="w-20 h-20 object-cover rounded-lg border border-green-500"
                            />
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-medium text-gray-900 truncate">
                              {image.file.name}
                            </h4>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeImage(image.id)}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                          
                          {image.isProcessing && (
                            <div className="mb-4">
                              <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                                <span>Processing...</span>
                                <span>{image.processingProgress}%</span>
                              </div>
                              <Progress value={image.processingProgress} className="h-2" />
                            </div>
                          )}
                          
                          {image.error && (
                            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                              <p className="text-sm text-red-600">{image.error}</p>
                            </div>
                          )}
                          
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

          {/* Compression Controls Sidebar */}
          <div className="lg:col-span-1">
            {(showControls || images.length === 0) && (
              <div className="sticky top-24">
                <CompressionControls
                  options={compressionOptions}
                  onOptionsChange={setCompressionOptions}
                  onPresetSelect={handlePresetSelect}
                  disabled={images.some(img => img.isProcessing)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageUpload;
