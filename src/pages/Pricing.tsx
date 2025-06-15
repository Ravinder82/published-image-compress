
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = (planName: string) => {
    if (!user) {
      navigate('/auth');
      return;
    }
    
    // For authenticated users, you can add specific plan logic here
    console.log(`User ${user.email} selected ${planName} plan`);
    // Navigate to main app or show success message
    navigate('/');
  };

  const handleContactSales = () => {
    navigate('/contact');
  };

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "Up to 50 images per month",
        "Basic compression",
        "JPG & PNG support",
        "Desktop & mobile access"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$9",
      period: "month",
      features: [
        "Unlimited images",
        "Advanced compression",
        "All formats supported",
        "Batch processing",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      features: [
        "Everything in Pro",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "White-label solution",
        "Volume discounts"
      ],
      popular: false
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
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that works best for your needs. Upgrade or downgrade at any time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative p-8 rounded-2xl border-2 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular 
                    ? 'border-purple-500 bg-gradient-to-br from-blue-600 to-purple-600 text-white' 
                    : 'border-white/20 bg-white/80 hover:border-purple-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-semibold mb-2 ${plan.popular ? 'text-white' : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'}`}>
                      {plan.price}
                    </span>
                    <span className={`ml-1 ${plan.popular ? 'text-gray-200' : 'text-gray-600'}`}>
                      /{plan.period}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className={`w-5 h-5 mt-0.5 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                      <span className={plan.popular ? 'text-gray-100' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'bg-white text-purple-600 hover:bg-gray-100 shadow-lg' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg'
                  }`}
                  onClick={() => plan.name === 'Enterprise' ? handleContactSales() : handleGetStarted(plan.name)}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 
                   user ? `Get ${plan.name}` : 'Get Started'}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
