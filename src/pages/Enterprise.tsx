
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Zap, Users, Globe, Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Enterprise = () => {
  const navigate = useNavigate();

  const handleContactUs = () => {
    navigate('/contact');
  };

  const valuePropositions = [
    {
      icon: Zap,
      title: "Proven Technology",
      description: "Advanced image compression algorithms that deliver up to 90% size reduction while maintaining quality.",
      gradient: "from-[#bdc3c7] to-[#2c3e50]"
    },
    {
      icon: Users,
      title: "Growing User Base",
      description: "Trusted by thousands of users worldwide with consistent growth and positive feedback.",
      gradient: "from-[#95a5a6] to-[#34495e]"
    },
    {
      icon: Globe,
      title: "Market Ready",
      description: "Complete web application with modern tech stack, responsive design, and scalable architecture.",
      gradient: "from-[#bdc3c7] to-[#2c3e50]"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with security best practices, user authentication, and reliable performance.",
      gradient: "from-[#95a5a6] to-[#34495e]"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#bdc3c7] via-white to-[#2c3e50]">
      <Header />
      <main className="relative py-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#2c3e50] to-[#34495e] bg-clip-text text-transparent mb-6">
              Purchase ImageCompress
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Acquire this powerful image compression platform with proven technology and growing user base
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-lg border border-white/20">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#2c3e50] to-[#34495e] bg-clip-text text-transparent mb-4">
                Why Choose ImageCompress?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                ImageCompress is a complete, market-ready image compression solution built with modern technologies. 
                This platform offers advanced compression algorithms, user authentication, responsive design, and a 
                growing user base. Perfect for entrepreneurs or businesses looking to enter the image optimization market.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {valuePropositions.map((prop, index) => (
              <div key={index} className="group p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-14 h-14 bg-gradient-to-r ${prop.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <prop.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">{prop.title}</h3>
                <p className="text-gray-600 leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#2c3e50] to-[#34495e] bg-clip-text text-transparent mb-6">
                What's Included
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] rounded-full mt-2"></div>
                  <span>Complete source code and documentation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] rounded-full mt-2"></div>
                  <span>User authentication and management system</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] rounded-full mt-2"></div>
                  <span>Advanced image compression algorithms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] rounded-full mt-2"></div>
                  <span>Responsive web design for all devices</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] rounded-full mt-2"></div>
                  <span>Database setup and configuration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] rounded-full mt-2"></div>
                  <span>Transfer of domain and hosting setup guidance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#2c3e50] to-[#34495e] bg-clip-text text-transparent mb-6">
                Technical Stack
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] rounded-full mt-2"></div>
                  <span>React 18 with TypeScript</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] rounded-full mt-2"></div>
                  <span>Tailwind CSS for styling</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] rounded-full mt-2"></div>
                  <span>Supabase for backend and authentication</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] rounded-full mt-2"></div>
                  <span>Vite for fast development and building</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] rounded-full mt-2"></div>
                  <span>Shadcn/ui component library</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] rounded-full mt-2"></div>
                  <span>React Query for state management</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 text-center shadow-lg border border-white/20">
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#2c3e50] to-[#34495e] bg-clip-text text-transparent mb-6">
              Ready to Purchase?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get in touch with us to discuss the purchase details, pricing, and transfer process. 
              We'll provide you with everything you need to successfully acquire and operate ImageCompress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                className="bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] hover:from-[#95a5a6] hover:to-[#34495e] text-white px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-lg font-medium"
                onClick={handleContactUs}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us to Purchase
              </Button>
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span className="text-sm">Quick response within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Enterprise;
