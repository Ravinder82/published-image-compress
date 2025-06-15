
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, FileText, Video, MessageCircle } from "lucide-react";

const HelpCenter = () => {
  const categories = [
    {
      icon: FileText,
      title: "Getting Started",
      description: "Learn the basics of using ImageCompress",
      articles: 12
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      articles: 8
    },
    {
      icon: MessageCircle,
      title: "FAQ",
      description: "Frequently asked questions",
      articles: 25
    }
  ];

  const popularArticles = [
    "How to compress images without losing quality",
    "Supported file formats and size limits",
    "Understanding compression settings",
    "Batch processing multiple images",
    "Troubleshooting upload issues"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Help Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers to your questions and learn how to make the most of ImageCompress
            </p>
            
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none text-lg"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl shadow-sm border hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <p className="text-sm text-gray-500">{category.articles} articles</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Popular Articles</h2>
            <div className="space-y-4">
              {popularArticles.map((article, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-sm transition-shadow cursor-pointer">
                  <FileText className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-900">{article}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;
