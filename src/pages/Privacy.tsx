
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: December 15, 2024
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  ImageCompress is designed with privacy in mind. We collect minimal information to provide our service:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Account information (email, username) when you create an account</li>
                  <li>Usage analytics to improve our service</li>
                  <li>Technical information like browser type and IP address</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Image Processing</h2>
                <p className="text-gray-600 mb-4">
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
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-600">
                  We implement appropriate security measures to protect your information. 
                  All data transmission is encrypted using SSL/TLS protocols.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
                <p className="text-gray-600">
                  We use trusted third-party services for analytics and infrastructure. 
                  These services are bound by their own privacy policies and security measures.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:privacy@imagecompress.com" className="text-black underline">
                    privacy@imagecompress.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
