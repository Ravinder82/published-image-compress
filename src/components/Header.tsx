
import { Button } from "@/components/ui/button";
import { User, LogIn } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">IC</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">ImageCompress</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex items-center space-x-2">
              <LogIn className="w-4 h-4" />
              <span>Sign In</span>
            </Button>
            <Button size="sm" className="bg-black hover:bg-gray-800 text-white">
              <User className="w-4 h-4 mr-2" />
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
