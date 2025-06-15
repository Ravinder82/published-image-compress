import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#bdc3c7] via-white to-[#2c3e50]">
      <Header />
      <main className="relative py-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22%3E%3Cg fill-opacity=%220.03%22%3E%3Cpolygon fill=%22%23000%22 points=%2250 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#2c3e50] to-[#34495e] bg-clip-text text-transparent mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: December 15, 2024
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-lg border border-white/20">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#2c3e50] to-[#34495e] bg-clip-text text-transparent mb-4">Acceptance of Terms</h2>
                  <p className="text-gray-600 leading-relaxed">
                    By accessing and using ImageCompress, you accept and agree to be bound by the terms 
                    and provision of this agreement.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#2c3e50] to-[#34495e] bg-clip-text text-transparent mb-4">Use License</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Permission is granted to temporarily use ImageCompress for personal and commercial purposes. 
                    This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#2c3e50] to-[#34495e] bg-clip-text text-transparent mb-4">Service Availability</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We strive to provide reliable service, but cannot guarantee 100% uptime. 
                    The service is provided "as is" without any warranties.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#2c3e50] to-[#34495e] bg-clip-text text-transparent mb-4">User Content</h2>
                  <p className="text-gray-600 leading-relaxed">
                    You retain all rights to images you process through our service. 
                    Since processing happens locally, we do not have access to your content.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#2c3e50] to-[#34495e] bg-clip-text text-transparent mb-4">Limitation of Liability</h2>
                  <p className="text-gray-600 leading-relaxed">
                    ImageCompress shall not be held liable for any damages arising from the use of this service.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#2c3e50] to-[#34495e] bg-clip-text text-transparent mb-4">Contact Information</h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at{" "}
                    <a href="mailto:legal@imagecompress.com" className="text-[#2c3e50] hover:text-[#34495e] underline transition-colors">
                      legal@imagecompress.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
