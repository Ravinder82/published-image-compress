
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Share2, Mail, HardDrive, ShoppingCart, Smartphone } from "lucide-react";

const UseCasesSection = () => {
  const useCases = [
    {
      title: "Website Optimization",
      description: "Reduce page load times and improve SEO by compressing hero images, product photos, and gallery images.",
      benefits: ["Faster loading", "Better SEO", "Improved UX"],
      reduction: "Up to 85% smaller",
      icon: Globe,
      gradient: "from-[#bdc3c7] to-[#2c3e50]"
    },
    {
      title: "Social Media Content",
      description: "Optimize images for Instagram, Facebook, Twitter while maintaining visual quality for maximum engagement.",
      benefits: ["Quick uploads", "Better quality", "More engagement"],
      reduction: "Perfect sizing",
      icon: Share2,
      gradient: "from-[#95a5a6] to-[#34495e]"
    },
    {
      title: "Email Campaigns",
      description: "Reduce email size and improve deliverability by compressing newsletter images and promotional content.",
      benefits: ["Better delivery", "Faster opens", "Lower costs"],
      reduction: "Smaller attachments",
      icon: Mail,
      gradient: "from-[#bdc3c7] to-[#2c3e50]"
    },
    {
      title: "Storage Management",
      description: "Free up valuable storage space on your device, cloud storage, or server without losing image quality.",
      benefits: ["Save space", "Reduce costs", "Organize better"],
      reduction: "Up to 90% savings",
      icon: HardDrive,
      gradient: "from-[#95a5a6] to-[#34495e]"
    },
    {
      title: "E-commerce Products",
      description: "Optimize product images for faster catalog browsing while maintaining the detail customers need to make purchases.",
      benefits: ["Fast browsing", "Clear details", "Higher sales"],
      reduction: "Optimal balance",
      icon: ShoppingCart,
      gradient: "from-[#bdc3c7] to-[#2c3e50]"
    },
    {
      title: "Mobile Apps",
      description: "Reduce app size and improve performance by compressing images before including them in your mobile application.",
      benefits: ["Smaller apps", "Faster performance", "Better UX"],
      reduction: "Significant reduction",
      icon: Smartphone,
      gradient: "from-[#95a5a6] to-[#34495e]"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#ecf0f1] to-white"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cg%20fill-opacity%3D%220.03%22%3E%3Cpolygon%20fill%3D%22%23000%22%20points%3D%2250%200%2060%2040%20100%2050%2060%2060%2050%20100%2040%2060%200%2050%2040%2040%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#2c3e50] to-[#34495e] bg-clip-text text-transparent mb-4">
            Perfect for Every Use Case
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're a developer, marketer, designer, or content creator, 
            our image compression tool adapts to your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="relative">
                <div className="flex justify-between items-start mb-2">
                  <div className={`w-12 h-12 bg-gradient-to-r ${useCase.gradient} rounded-xl flex items-center justify-center mb-3`}>
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-0">
                    {useCase.reduction}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {useCase.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {useCase.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <Badge key={benefitIndex} variant="outline" className="text-xs border-gray-200 text-gray-600 hover:bg-gray-50">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
