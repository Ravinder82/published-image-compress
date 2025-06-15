
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const UseCasesSection = () => {
  const useCases = [
    {
      title: "Website Optimization",
      description: "Reduce page load times and improve SEO by compressing hero images, product photos, and gallery images.",
      benefits: ["Faster loading", "Better SEO", "Improved UX"],
      reduction: "Up to 85% smaller"
    },
    {
      title: "Social Media Content",
      description: "Optimize images for Instagram, Facebook, Twitter while maintaining visual quality for maximum engagement.",
      benefits: ["Quick uploads", "Better quality", "More engagement"],
      reduction: "Perfect sizing"
    },
    {
      title: "Email Campaigns",
      description: "Reduce email size and improve deliverability by compressing newsletter images and promotional content.",
      benefits: ["Better delivery", "Faster opens", "Lower costs"],
      reduction: "Smaller attachments"
    },
    {
      title: "Storage Management",
      description: "Free up valuable storage space on your device, cloud storage, or server without losing image quality.",
      benefits: ["Save space", "Reduce costs", "Organize better"],
      reduction: "Up to 90% savings"
    },
    {
      title: "E-commerce Products",
      description: "Optimize product images for faster catalog browsing while maintaining the detail customers need to make purchases.",
      benefits: ["Fast browsing", "Clear details", "Higher sales"],
      reduction: "Optimal balance"
    },
    {
      title: "Mobile Apps",
      description: "Reduce app size and improve performance by compressing images before including them in your mobile application.",
      benefits: ["Smaller apps", "Faster performance", "Better UX"],
      reduction: "Significant reduction"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perfect for Every Use Case
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're a developer, marketer, designer, or content creator, 
            our image compression tool adapts to your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {useCase.title}
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {useCase.reduction}
                  </Badge>
                </div>
                <CardDescription className="text-gray-600">
                  {useCase.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <Badge key={benefitIndex} variant="outline" className="text-xs">
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
