
import { LucideIcon, Zap, Shield, Settings, Download, Video, MessageCircle } from "lucide-react";

interface Category {
  icon: LucideIcon;
  title: string;
  description: string;
  articles: number;
}

const CategoryGrid = () => {
  const categories: Category[] = [
    {
      icon: Zap,
      title: "Getting Started",
      description: "Learn the basics of using ImageCompress",
      articles: 8
    },
    {
      icon: Settings,
      title: "Compression Settings",
      description: "Understanding quality and format options",
      articles: 6
    },
    {
      icon: Download,
      title: "File Management",
      description: "Upload, download, and batch processing",
      articles: 10
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "How we protect your images and data",
      articles: 5
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      articles: 12
    },
    {
      icon: MessageCircle,
      title: "FAQ",
      description: "Frequently asked questions",
      articles: 25
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {categories.map((category, index) => (
        <div key={index} className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
          <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <category.icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            {category.title}
          </h3>
          <p className="text-gray-600 mb-4">{category.description}</p>
          <p className="text-sm text-purple-500 font-medium">{category.articles} articles</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
