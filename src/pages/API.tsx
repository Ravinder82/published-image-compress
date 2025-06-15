
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code, Key, Zap, Globe } from "lucide-react";

const API = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#bdc3c7] via-white to-[#2c3e50]">
      <Header />
      <main className="relative py-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22%3E%3Cg fill-opacity=%220.03%22%3E%3Cpolygon fill=%22%23000%22 points=%2250 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#2c3e50] to-[#34495e] bg-clip-text text-transparent mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrate image compression into your applications with our powerful API
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#2c3e50] to-[#34495e] bg-clip-text text-transparent mb-6">Getting Started</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our API provides programmatic access to our image compression technology. 
                Perfect for developers who want to integrate compression into their applications.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] rounded-lg flex items-center justify-center">
                    <Key className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Authentication</h3>
                    <p className="text-gray-600 text-sm">Secure API key authentication</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#95a5a6] to-[#34495e] rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Fast Processing</h3>
                    <p className="text-gray-600 text-sm">Sub-second response times</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Global CDN</h3>
                    <p className="text-gray-600 text-sm">Worldwide edge locations</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-[#95a5a6] to-[#7f8c8d] rounded-lg flex items-center justify-center">
                  <Code className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-semibold text-white">Sample Request</h3>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto bg-black/30 rounded-lg p-4 border border-gray-700">
{`curl -X POST https://api.imagecompress.com/v1/compress \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "image=@image.jpg" \\
  -F "quality=70"`}
              </pre>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-lg border border-white/20">
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#2c3e50] to-[#34495e] bg-clip-text text-transparent mb-6">
                API Coming Soon
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                We're currently developing our API. Join the waitlist to be notified when it's available.
              </p>
              <button className="bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] hover:from-[#95a5a6] hover:to-[#34495e] text-white px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-lg font-medium">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default API;
