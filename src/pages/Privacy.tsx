
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header />
      <main className="relative py-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: December 15, 2024
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-lg border border-white/20">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">Information We Collect</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    ImageCompress is designed with privacy in mind. We collect minimal information to provide our service:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Account information (email, username) when you create an account</li>
                    <li>Usage analytics to improve our service</li>
                    <li>Technical information like browser type and IP address</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Image Processing</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Your privacy is our priority. Here's how we handle your images:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>All image compression happens locally in your browser</li>
                    <li>Images are never uploaded to our servers</li>
                    <li>We cannot access or view your images</li>
                    <li>Compressed images remain on your device only</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">Data Security</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We implement appropriate security measures to protect your information. 
                    All data transmission is encrypted using SSL/TLS protocols.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-4">Third-Party Services</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We use trusted third-party services for analytics and infrastructure. 
                    These services are bound by their own privacy policies and security measures.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">Contact Us</h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at{" "}
                    <a href="mailto:privacy@imagecompress.com" className="text-blue-600 hover:text-purple-600 underline transition-colors">
                      privacy@imagecompress.com
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

export default Privacy;
