
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageUpload from "@/components/ImageUpload";
import Footer from "@/components/Footer";
import ProtectedRoute from "@/components/ProtectedRoute";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProtectedRoute>
          <ImageUpload />
        </ProtectedRoute>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
