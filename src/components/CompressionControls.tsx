
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { CompressionOptions, COMPRESSION_PRESETS, CompressionPreset } from '@/utils/imageCompression';

interface CompressionControlsProps {
  options: CompressionOptions;
  onOptionsChange: (options: CompressionOptions) => void;
  onPresetSelect: (preset: CompressionPreset) => void;
  disabled?: boolean;
}

const CompressionControls = ({ 
  options, 
  onOptionsChange, 
  onPresetSelect, 
  disabled = false 
}: CompressionControlsProps) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleQualityChange = (value: number[]) => {
    onOptionsChange({ ...options, quality: value[0] / 100 });
  };

  const handleFormatChange = (format: string) => {
    onOptionsChange({ ...options, format: format as CompressionOptions['format'] });
  };

  const handleMaxWidthChange = (value: number[]) => {
    onOptionsChange({ ...options, maxWidth: value[0] });
  };

  const handleMaxHeightChange = (value: number[]) => {
    onOptionsChange({ ...options, maxHeight: value[0] });
  };

  const handlePreserveMetadataChange = (checked: boolean) => {
    onOptionsChange({ ...options, preserveMetadata: checked });
  };

  return (
    <Card className="p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Compression Settings</h3>
        
        {/* Presets */}
        <div className="space-y-2 mb-6">
          <Label>Quick Presets</Label>
          <div className="grid grid-cols-2 gap-2">
            {COMPRESSION_PRESETS.map((preset) => (
              <Button
                key={preset.name}
                variant="outline"
                size="sm"
                onClick={() => onPresetSelect(preset)}
                disabled={disabled}
                className="text-left justify-start h-auto p-3"
              >
                <div>
                  <div className="font-medium">{preset.name}</div>
                  <div className="text-xs text-gray-500">{preset.description}</div>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Quality Slider */}
        <div className="space-y-2">
          <Label>Quality: {Math.round(options.quality * 100)}%</Label>
          <Slider
            value={[options.quality * 100]}
            onValueChange={handleQualityChange}
            max={100}
            min={10}
            step={5}
            disabled={disabled}
            className="w-full"
          />
        </div>

        {/* Format Selection */}
        <div className="space-y-2">
          <Label>Output Format</Label>
          <Select value={options.format} onValueChange={handleFormatChange} disabled={disabled}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="webp">WebP (Recommended)</SelectItem>
              <SelectItem value="jpeg">JPEG</SelectItem>
              <SelectItem value="png">PNG</SelectItem>
              <SelectItem value="avif">AVIF (Experimental)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Advanced Settings Toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowAdvanced(!showAdvanced)}
          disabled={disabled}
        >
          {showAdvanced ? 'Hide' : 'Show'} Advanced Settings
        </Button>

        {/* Advanced Settings */}
        {showAdvanced && (
          <div className="space-y-4 pt-4 border-t">
            <div className="space-y-2">
              <Label>Max Width: {options.maxWidth || 'Original'}px</Label>
              <Slider
                value={[options.maxWidth || 1920]}
                onValueChange={handleMaxWidthChange}
                max={4000}
                min={480}
                step={160}
                disabled={disabled}
              />
            </div>

            <div className="space-y-2">
              <Label>Max Height: {options.maxHeight || 'Original'}px</Label>
              <Slider
                value={[options.maxHeight || 1080]}
                onValueChange={handleMaxHeightChange}
                max={4000}
                min={320}
                step={160}
                disabled={disabled}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                checked={options.preserveMetadata}
                onCheckedChange={handlePreserveMetadataChange}
                disabled={disabled}
              />
              <Label>Preserve metadata (EXIF, etc.)</Label>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default CompressionControls;
