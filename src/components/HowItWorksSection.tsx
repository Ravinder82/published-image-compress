
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Settings, Download, CheckCircle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Images",
      description: "Drag and drop or click to select JPG, PNG, or WebP images. Multiple files supported.",
      details: "Support for batch uploads up to 50 images at once",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Settings,
      title: "Choose Settings",
      description: "Select compression quality, output format, and resize options. Or use our smart presets.",
      details: "Web, social media, and storage optimization presets available",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: CheckCircle,
      title: "Instant Processing",
      description: "Our advanced algorithm compresses your images locally in your browser within seconds.",
      details: "No uploads to servers - everything happens on your device",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Download,
      title: "Download Results",
      description: "Get your optimized images with detailed compression statistics and quality comparison.",
      details: "Original vs compressed preview with file size reduction stats",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Dark background with geometric pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M11%2018c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm48%2025c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm-43-7c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm63%2031c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm25%208c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22/%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get professional image compression results in just four simple steps. 
            No technical knowledge required.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group hover-lift">
              <CardContent className="p-6 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`w-8 h-8 bg-gradient-to-r ${step.gradient} text-white rounded-full flex items-center justify-center font-semibold text-sm shadow-lg`}>
                    {index + 1}
                  </div>
                </div>
                
                <div className="mt-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 mb-3">
                    {step.description}
                  </p>
                  <p className="text-sm text-gray-400">
                    {step.details}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
            <span className="text-green-100 font-medium">
              Average processing time: 2-5 seconds per image
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
