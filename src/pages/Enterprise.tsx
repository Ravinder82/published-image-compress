
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
    // For now, navigate to contact page with a demo request context
    // In a real app, this could open a calendar booking widget
    console.log('User requested demo scheduling');
    navigate('/contact');
  };

  const benefits = [
    {
      icon: Building,
      title: "Custom Infrastructure",
      description: "Dedicated servers and custom deployment options to meet your organization's needs."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Advanced security features, compliance certifications, and data governance controls."
    },
    {
      icon: Users,
      title: "Team Management",
      description: "User management, role-based access control, and team collaboration features."
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Priority support with dedicated account management and SLA guarantees."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful image compression solutions designed for large organizations and high-volume usage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-8 bg-white rounded-2xl shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our enterprise team to discuss your requirements and get a custom solution tailored to your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors text-lg"
                onClick={handleContactSales}
              >
                Contact Sales
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-black text-black px-8 py-4 rounded-lg hover:bg-black hover:text-white transition-colors text-lg"
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
