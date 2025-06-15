
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Zap, Shield, Gauge, Download, Globe, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Our advanced compression algorithms process images in seconds, not minutes."
    },
    {
      icon: Shield,
      title: "100% Secure & Private",
      description: "All processing happens locally in your browser. Your images never leave your device."
    },
    {
      icon: Gauge,
      title: "Quality Preservation",
      description: "Smart compression maintains visual quality while significantly reducing file sizes."
    },
    {
      icon: Download,
      title: "Instant Downloads",
      description: "Download your compressed images immediately with a single click."
    },
    {
      icon: Globe,
      title: "No Registration Required",
      description: "Start compressing images right away without creating an account."
    },
    {
      icon: Smartphone,
      title: "Works Everywhere",
      description: "Compatible with all modern browsers on desktop, tablet, and mobile devices."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to compress images efficiently and securely
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
