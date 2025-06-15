
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";

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

interface CompressionStatsProps {
  images: UploadedImage[];
  onDownloadAll: () => void;
  onRecompressAll: () => void;
}

const CompressionStats = ({ images, onDownloadAll, onRecompressAll }: CompressionStatsProps) => {
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

  if (images.length === 0) return null;

  return (
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
          <Button onClick={onDownloadAll} className="bg-black hover:bg-gray-800 text-white">
            <Download className="w-4 h-4 mr-2" />
            Download All
          </Button>
          <Button onClick={onRecompressAll} variant="outline">
            Recompress All
          </Button>
        </div>
      )}
    </Card>
  );
};

export default CompressionStats;
