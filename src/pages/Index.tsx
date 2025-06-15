
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import UseCasesSection from "@/components/UseCasesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ImageUpload from "@/components/ImageUpload";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <UseCasesSection />
        <HowItWorksSection />
        {user ? (
          <ImageUpload />
        ) : (
          <ProtectedRoute>
            <ImageUpload />
          </ProtectedRoute>
        )}
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
