
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Zap, Shield, Gauge, Download, Globe, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Our advanced compression algorithms process images in seconds, not minutes.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Shield,
      title: "100% Secure & Private",
      description: "All processing happens locally in your browser. Your images never leave your device.",
      gradient: "from-green-400 to-blue-500"
    },
    {
      icon: Gauge,
      title: "Quality Preservation",
      description: "Smart compression maintains visual quality while significantly reducing file sizes.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: Download,
      title: "Instant Downloads",
      description: "Download your compressed images immediately with a single click.",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: Globe,
      title: "No Registration Required",
      description: "Start compressing images right away without creating an account.",
      gradient: "from-indigo-400 to-purple-500"
    },
    {
      icon: Smartphone,
      title: "Works Everywhere",
      description: "Compatible with all modern browsers on desktop, tablet, and mobile devices.",
      gradient: "from-pink-400 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main className="relative py-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
              Powerful Features
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to compress images efficiently and securely
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
