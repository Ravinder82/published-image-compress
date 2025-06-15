
const ContactSupport = () => {
  return (
    <div className="bg-gradient-to-br from-[#2c3e50] via-[#34495e] to-[#2c3e50] text-white rounded-2xl p-8 text-center shadow-xl border border-white/20">
      <h2 className="text-2xl font-semibold mb-4">Still Need Help?</h2>
      <p className="text-gray-300 mb-6">
        Can't find what you're looking for? Our support team is here to help.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="mailto:1294poonia@gmail.com"
          className="bg-white text-[#2c3e50] px-6 py-3 rounded-lg hover:bg-[#ecf0f1] transition-colors font-medium shadow-lg hover:shadow-xl hover:scale-105 transform duration-300"
        >
          Email Support
        </a>
        <a 
          href="/contact"
          className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#2c3e50] transition-colors font-medium shadow-lg hover:shadow-xl hover:scale-105 transform duration-300"
        >
          Contact Form
        </a>
      </div>
    </div>
  );
};

export default ContactSupport;
