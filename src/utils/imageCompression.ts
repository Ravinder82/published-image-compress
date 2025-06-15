
export interface CompressionOptions {
  quality: number;
  format: 'jpeg' | 'png' | 'webp' | 'avif';
  maxWidth?: number;
  maxHeight?: number;
  preserveMetadata: boolean;
}

export interface CompressionPreset {
  name: string;
  description: string;
  options: CompressionOptions;
}

export const COMPRESSION_PRESETS: CompressionPreset[] = [
  {
    name: 'Web Optimized',
    description: 'Best for websites and social media',
    options: {
      quality: 0.8,
      format: 'webp',
      maxWidth: 1920,
      maxHeight: 1080,
      preserveMetadata: false
    }
  },
  {
    name: 'High Quality',
    description: 'Minimal compression for professional use',
    options: {
      quality: 0.9,
      format: 'jpeg',
      maxWidth: 2560,
      maxHeight: 1440,
      preserveMetadata: true
    }
  },
  {
    name: 'Mobile Friendly',
    description: 'Optimized for mobile devices',
    options: {
      quality: 0.7,
      format: 'webp',
      maxWidth: 1080,
      maxHeight: 1080,
      preserveMetadata: false
    }
  },
  {
    name: 'Ultra Compact',
    description: 'Maximum compression for storage',
    options: {
      quality: 0.6,
      format: 'webp',
      maxWidth: 1280,
      maxHeight: 720,
      preserveMetadata: false
    }
  }
];

export const compressImage = async (
  file: File, 
  options: CompressionOptions,
  onProgress?: (progress: number) => void
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      try {
        onProgress?.(25);
        
        // Calculate new dimensions
        let { width, height } = img;
        const maxWidth = options.maxWidth || 1920;
        const maxHeight = options.maxHeight || 1080;
        
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width *= ratio;
          height *= ratio;
        }
        
        canvas.width = width;
        canvas.height = height;
        
        onProgress?.(50);
        
        // Draw image with potential optimizations
        if (ctx) {
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, 0, 0, width, height);
        }
        
        onProgress?.(75);
        
        // Determine output format and MIME type
        const mimeType = getMimeType(options.format);
        
        canvas.toBlob(
          (blob) => {
            if (blob) {
              onProgress?.(100);
              resolve(blob);
            } else {
              reject(new Error('Failed to compress image'));
            }
          },
          mimeType,
          options.quality
        );
      } catch (error) {
        reject(error);
      }
    };
    
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = URL.createObjectURL(file);
  });
};

const getMimeType = (format: string): string => {
  switch (format) {
    case 'webp':
      return 'image/webp';
    case 'avif':
      return 'image/avif';
    case 'png':
      return 'image/png';
    case 'jpeg':
    default:
      return 'image/jpeg';
  }
};

export const getOptimalFormat = (file: File): 'webp' | 'jpeg' | 'png' => {
  // Simple logic to suggest optimal format
  if (file.type === 'image/png' && file.size > 500000) {
    return 'webp'; // PNG to WebP for large files
  }
  if (file.type === 'image/jpeg') {
    return 'webp'; // JPEG to WebP for better compression
  }
  return 'webp'; // Default to WebP for best compression
};
