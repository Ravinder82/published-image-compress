
import { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload } from "lucide-react";

interface ImageUploadAreaProps {
  dragActive: boolean;
  onDrag: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onFileInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUploadArea = ({ dragActive, onDrag, onDrop, onFileInput }: ImageUploadAreaProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Card className={`p-12 border-2 border-dashed transition-all duration-200 hover-lift ${
      dragActive 
        ? 'border-gray-900 bg-gray-100' 
        : 'border-gray-300 hover:border-gray-400'
    }`}>
      <div
        className="text-center"
        onDragEnter={onDrag}
        onDragLeave={onDrag}
        onDragOver={onDrag}
        onDrop={onDrop}
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
          onChange={onFileInput}
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
  );
};

export default ImageUploadArea;
