
import { Button } from "@/components/ui/button";
import { User, LogIn, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      navigate('/auth');
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Logo clicked, navigating to homepage');
    console.log('Current location:', window.location.pathname);
    navigate('/', { replace: true });
  };

  return (
    <header className="w-full border-b border-white/20 bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-[#bdc3c7]/50 via-[#ecf0f1]/30 to-[#2c3e50]/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-all duration-300 bg-transparent border-none p-0 group" 
            onClick={handleLogoClick}
            type="button"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-lg">IC</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-[#2c3e50] to-[#34495e] bg-clip-text text-transparent">ImageCompress</span>
              <span className="text-xs text-gray-500 -mt-1">Smart compression tool</span>
            </div>
          </button>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <div className="hidden sm:flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {user.email?.split('@')[0]}
                  </span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleAuthAction}
                  className="flex items-center space-x-2 hover:bg-red-50 hover:text-red-600 transition-all duration-300 border border-transparent hover:border-red-200"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleAuthAction}
                  className="hidden sm:flex items-center space-x-2 hover:bg-[#ecf0f1] hover:text-[#2c3e50] transition-all duration-300"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Sign In</span>
                </Button>
                <Button 
                  size="sm" 
                  onClick={handleAuthAction}
                  className="bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] hover:from-[#95a5a6] hover:to-[#34495e] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <User className="w-4 h-4 mr-2" />
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
