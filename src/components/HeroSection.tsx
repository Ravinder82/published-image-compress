
import { Button } from "@/components/ui/button";
import { ArrowDown, Zap, Shield, Gauge, Users, TrendingUp, Clock } from "lucide-react";

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
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Enhanced gradient background with pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
            Compress Images
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Effortlessly</span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reduce file sizes by up to 90% without compromising quality. Support for JPG, PNG, and WebP formats 
            with lightning-fast processing and secure client-side compression. Perfect for websites, social media, and storage optimization.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full">
              <Users className="w-4 h-4 mr-1 text-blue-600" />
              <span>10,000+ users trust us</span>
            </div>
            <div className="flex items-center bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full">
              <TrendingUp className="w-4 h-4 mr-1 text-green-600" />
              <span>50M+ images compressed</span>
            </div>
            <div className="flex items-center bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full">
              <Clock className="w-4 h-4 mr-1 text-purple-600" />
              <span>Average 2 seconds per image</span>
            </div>
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToUpload}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg hover-lift shadow-lg"
            >
              Start Compressing Free
              <ArrowDown className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToFeatures}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg hover-lift bg-white/80 backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
          
          <div id="features-section" className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover-lift">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600 text-center">Process images in seconds with our optimized compression algorithm. No waiting, no delays.</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover-lift">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Secure</h3>
              <p className="text-gray-600 text-center">All processing happens locally in your browser. Your images never leave your device.</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover-lift">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Gauge className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Preserved</h3>
              <p className="text-gray-600 text-center">Smart compression maintains visual quality while dramatically reducing file size.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
