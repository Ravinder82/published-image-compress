
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building, Shield, Users, Headphones } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Enterprise = () => {
  const navigate = useNavigate();

  const handleContactSales = () => {
    navigate('/contact');
  };

  const handleScheduleDemo = () => {
    console.log('User requested demo scheduling');
    navigate('/contact');
  };

  const benefits = [
    {
      icon: Building,
      title: "Custom Infrastructure",
      description: "Dedicated servers and custom deployment options to meet your organization's needs.",
      gradient: "from-[#bdc3c7] to-[#2c3e50]"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Advanced security features, compliance certifications, and data governance controls.",
      gradient: "from-[#95a5a6] to-[#34495e]"
    },
    {
      icon: Users,
      title: "Team Management",
      description: "User management, role-based access control, and team collaboration features.",
      gradient: "from-[#bdc3c7] to-[#2c3e50]"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Priority support with dedicated account management and SLA guarantees.",
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
              Enterprise Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful image compression solutions designed for large organizations and high-volume usage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="group p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-14 h-14 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 text-center shadow-lg border border-white/20">
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#2c3e50] to-[#34495e] bg-clip-text text-transparent mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Contact our enterprise team to discuss your requirements and get a custom solution tailored to your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] hover:from-[#95a5a6] hover:to-[#34495e] text-white px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-lg font-medium"
                onClick={handleContactSales}
              >
                Contact Sales
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-[#2c3e50] text-[#2c3e50] px-8 py-4 rounded-lg hover:bg-[#2c3e50] hover:text-white transition-all duration-300 hover:scale-105 text-lg font-medium bg-white/60 backdrop-blur-sm"
                onClick={handleScheduleDemo}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Enterprise;
