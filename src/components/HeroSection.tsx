
import { Button } from "@/components/ui/button";
import { ArrowDown, Zap, Shield, Gauge } from "lucide-react";

const HeroSection = () => {
  const scrollToUpload = () => {
    const uploadSection = document.getElementById('upload-section');
    uploadSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 sm:py-32 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Compress Images
            <span className="block text-gray-600">Effortlessly</span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reduce file sizes without compromising quality. Support for JPG and PNG formats 
            with lightning-fast processing and secure client-side compression.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToUpload}
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg hover-lift"
            >
              Start Compressing
              <ArrowDown className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToFeatures}
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg hover-lift"
            >
              Learn More
            </Button>
          </div>
          
          <div id="features-section" className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover-lift">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600 text-center">Process images in seconds with our optimized compression algorithm</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover-lift">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Secure</h3>
              <p className="text-gray-600 text-center">All processing happens locally in your browser. No uploads to servers</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover-lift">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                <Gauge className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Preserved</h3>
              <p className="text-gray-600 text-center">Smart compression maintains visual quality while reducing file size</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
