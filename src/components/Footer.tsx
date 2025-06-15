
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#2c3e50] via-[#34495e] to-[#2c3e50] text-white py-12 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-[#bdc3c7] to-[#95a5a6] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">IC</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-[#bdc3c7] bg-clip-text text-transparent">ImageCompress</span>
                <span className="text-xs text-gray-400 -mt-1">Smart compression tool</span>
              </div>
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed">
              The simplest way to compress your images without losing quality. 
              Fast, secure, and completely free to use. Trusted by thousands of users worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6 text-lg bg-gradient-to-r from-[#bdc3c7] to-[#95a5a6] bg-clip-text text-transparent">Product</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/features" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Features</Link></li>
              <li><Link to="/api" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">API</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Pricing</Link></li>
              <li><Link to="/enterprise" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Enterprise</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6 text-lg bg-gradient-to-r from-[#bdc3c7] to-[#95a5a6] bg-clip-text text-transparent">Support</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/help" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Terms of Service</Link></li>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 ImageCompress. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-4 sm:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for the web
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
