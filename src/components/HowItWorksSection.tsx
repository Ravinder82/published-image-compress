
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Settings, Download, CheckCircle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Images",
      description: "Drag and drop or click to select JPG, PNG, or WebP images. Multiple files supported.",
      details: "Support for batch uploads up to 50 images at once"
    },
    {
      icon: Settings,
      title: "Choose Settings",
      description: "Select compression quality, output format, and resize options. Or use our smart presets.",
      details: "Web, social media, and storage optimization presets available"
    },
    {
      icon: CheckCircle,
      title: "Instant Processing",
      description: "Our advanced algorithm compresses your images locally in your browser within seconds.",
      details: "No uploads to servers - everything happens on your device"
    },
    {
      icon: Download,
      title: "Download Results",
      description: "Get your optimized images with detailed compression statistics and quality comparison.",
      details: "Original vs compressed preview with file size reduction stats"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get professional image compression results in just four simple steps. 
            No technical knowledge required.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative bg-white border-2 hover:border-gray-300 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>
                </div>
                
                <div className="mt-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {step.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    {step.details}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-800 font-medium">
              Average processing time: 2-5 seconds per image
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
