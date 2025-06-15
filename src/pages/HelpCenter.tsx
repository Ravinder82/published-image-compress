
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, FileText, Video, MessageCircle, Zap, Shield, Settings, Download } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
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

  const faqItems = [
    {
      question: "What image formats does ImageCompress support?",
      answer: "ImageCompress supports all major image formats including JPEG, PNG, WebP, AVIF, GIF, and BMP. You can also convert between different formats during compression."
    },
    {
      question: "What's the maximum file size I can upload?",
      answer: "Free users can upload files up to 10MB each. Pro users can upload files up to 50MB, and Enterprise users have no file size limits."
    },
    {
      question: "How much can I compress my images?",
      answer: "Compression results vary by image type and content. Typically, you can achieve 60-80% size reduction while maintaining excellent visual quality. Photos with many details compress less than graphics with solid colors."
    },
    {
      question: "Is my data secure and private?",
      answer: "Yes! All uploads are encrypted in transit and at rest. We automatically delete your images from our servers after 24 hours. Enterprise users can opt for immediate deletion after processing."
    },
    {
      question: "Can I process multiple images at once?",
      answer: "Absolutely! Our batch processing feature allows you to upload and compress multiple images simultaneously. Free users can process up to 10 images at once, while paid users have higher limits."
    },
    {
      question: "Do you offer an API for developers?",
      answer: "Yes! We provide a robust REST API with comprehensive documentation. API access is available on our Pro and Enterprise plans with different rate limits and features."
    },
    {
      question: "What's the difference between lossy and lossless compression?",
      answer: "Lossy compression reduces file size by removing some image data, resulting in smaller files but slight quality loss. Lossless compression reduces size without quality loss but achieves smaller reductions."
    },
    {
      question: "Can I undo compression or get my original back?",
      answer: "We don't store original files after processing for privacy reasons. We recommend keeping your own backup of original images before compression."
    },
    {
      question: "Why should I choose WebP or AVIF over JPEG?",
      answer: "WebP typically offers 25-30% better compression than JPEG with similar quality. AVIF can achieve even better results (up to 50% smaller) but has limited browser support compared to WebP."
    },
    {
      question: "Do you have mobile apps?",
      answer: "Our web app works great on mobile browsers! We're currently developing native iOS and Android apps. Sign up for our newsletter to get notified when they're available."
    }
  ];

  const quickStartSteps = [
    {
      step: 1,
      title: "Upload Your Images",
      description: "Drag and drop your images or click to browse. Support for single files or batch uploads."
    },
    {
      step: 2,
      title: "Choose Settings",
      description: "Select compression quality, output format, and resize options if needed."
    },
    {
      step: 3,
      title: "Compress & Download",
      description: "Click compress and download your optimized images individually or as a ZIP file."
    }
  ];

  const filteredArticles = popularArticles.filter(article =>
    article.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-lg bg-white/80 backdrop-blur-sm"
              />
            </div>
          </div>
          
          {/* Quick Start Guide */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-8 text-center">Quick Start Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {quickStartSteps.map((step, index) => (
                <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <div key={index} className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <p className="text-sm text-purple-500 font-medium">{category.articles} articles</p>
              </div>
            ))}
          </div>
          
          {/* Popular Articles */}
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

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white/80 backdrop-blur-sm rounded-lg border border-white/20 px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <AccordionTrigger className="text-left font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-pink-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl p-8 text-center shadow-xl border border-white/20">
            <h2 className="text-2xl font-semibold mb-4">Still Need Help?</h2>
            <p className="text-blue-100 mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:1294poonia@gmail.com"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium shadow-lg hover:shadow-xl hover:scale-105 transform duration-300"
              >
                Email Support
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-medium shadow-lg hover:shadow-xl hover:scale-105 transform duration-300"
              >
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;
