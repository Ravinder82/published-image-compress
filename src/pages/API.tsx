
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code, Key, Zap, Globe } from "lucide-react";

const API = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrate image compression into your applications with our powerful API
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Getting Started</h2>
              <p className="text-gray-600 mb-6">
                Our API provides programmatic access to our image compression technology. 
                Perfect for developers who want to integrate compression into their applications.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Key className="w-5 h-5 text-gray-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Authentication</h3>
                    <p className="text-gray-600 text-sm">Secure API key authentication</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-gray-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Fast Processing</h3>
                    <p className="text-gray-600 text-sm">Sub-second response times</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-gray-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Global CDN</h3>
                    <p className="text-gray-600 text-sm">Worldwide edge locations</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Code className="w-5 h-5 text-gray-700" />
                <h3 className="font-semibold text-gray-900">Sample Request</h3>
              </div>
              <pre className="text-sm text-gray-800 overflow-x-auto">
{`curl -X POST https://api.imagecompress.com/v1/compress \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "image=@image.jpg" \\
  -F "quality=70"`}
              </pre>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gray-100 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                API Coming Soon
              </h2>
              <p className="text-gray-600 mb-6">
                We're currently developing our API. Join the waitlist to be notified when it's available.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
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
