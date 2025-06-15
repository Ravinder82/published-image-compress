
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import QuickStartGuide from "@/components/help/QuickStartGuide";
import CategoryGrid from "@/components/help/CategoryGrid";
import PopularArticles from "@/components/help/PopularArticles";
import HelpFAQSection from "@/components/help/HelpFAQSection";
import ContactSupport from "@/components/help/ContactSupport";
import SearchBar from "@/components/help/SearchBar";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      <main className="relative py-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Help Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers to your questions and learn how to make the most of ImageCompress
            </p>
            
            <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          </div>
          
          <QuickStartGuide />
          <CategoryGrid />
          <PopularArticles searchQuery={searchQuery} />
          <HelpFAQSection />
          <ContactSupport />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;
