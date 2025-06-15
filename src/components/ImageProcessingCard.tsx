
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { X, Download } from "lucide-react";

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

interface ImageProcessingCardProps {
  image: UploadedImage;
  onRemove: (id: string) => void;
  onDownload: (image: UploadedImage) => void;
}

const ImageProcessingCard = ({ image, onRemove, onDownload }: ImageProcessingCardProps) => {
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <Card className="p-6 hover-lift">
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
              onClick={() => onRemove(image.id)}
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
              onClick={() => onDownload(image)}
              className="bg-black hover:bg-gray-800 text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ImageProcessingCard;
