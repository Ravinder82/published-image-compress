
import { FileText } from "lucide-react";

interface PopularArticlesProps {
  searchQuery: string;
}

const PopularArticles = ({ searchQuery }: PopularArticlesProps) => {
  const popularArticles = [
    "How to compress images without losing quality",
    "Understanding compression ratios and file sizes",
    "Supported file formats (JPEG, PNG, WebP, AVIF)",
    "Batch processing multiple images at once",
    "Troubleshooting upload and download issues",
    "Choosing the right compression settings",
    "Converting between image formats",
    "Mobile app usage guide"
  ];

  const filteredArticles = popularArticles.filter(article =>
    article.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-16 shadow-lg border border-white/20">
      <h2 className="text-2xl font-semibold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-6">
        {searchQuery ? `Search Results (${filteredArticles.length})` : 'Popular Articles'}
      </h2>
      <div className="space-y-4">
        {filteredArticles.map((article, index) => (
          <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-all duration-300 cursor-pointer border border-white/30 hover:shadow-md">
            <FileText className="w-5 h-5 text-purple-500" />
            <span className="text-gray-700 font-medium">{article}</span>
          </div>
        ))}
        {searchQuery && filteredArticles.length === 0 && (
          <p className="text-gray-500 text-center py-8">No articles found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default PopularArticles;
