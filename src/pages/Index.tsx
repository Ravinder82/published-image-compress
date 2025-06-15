
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageUpload from "@/components/ImageUpload";
import Footer from "@/components/Footer";
import ProtectedRoute from "@/components/ProtectedRoute";

const Index = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <ImageUpload />
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default Index;
