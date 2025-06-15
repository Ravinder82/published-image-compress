
import { useState, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import CompressionControls from "@/components/CompressionControls";
import ImageUploadArea from "@/components/ImageUploadArea";
import ImageProcessingCard from "@/components/ImageProcessingCard";
import CompressionStats from "@/components/CompressionStats";
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
            <ImageUploadArea
              dragActive={dragActive}
              onDrag={handleDrag}
              onDrop={handleDrop}
              onFileInput={handleFileInput}
            />

            {/* Stats Summary */}
            <CompressionStats
              images={images}
              onDownloadAll={downloadAll}
              onRecompressAll={recompressAll}
            />

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
                    <ImageProcessingCard
                      key={image.id}
                      image={image}
                      onRemove={removeImage}
                      onDownload={downloadCompressed}
                    />
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
