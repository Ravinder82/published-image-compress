
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is my data safe when using ImageCompress?",
      answer: "Absolutely! All image compression happens locally in your browser. Your images never leave your device or get uploaded to our servers. This ensures complete privacy and security of your files."
    },
    {
      question: "What image formats are supported?",
      answer: "We support the most common image formats: JPEG/JPG, PNG, and WebP. You can also convert between these formats during compression for optimal results."
    },
    {
      question: "How much can I compress my images?",
      answer: "Compression rates vary depending on the original image and settings, but typically you can achieve 60-90% file size reduction while maintaining excellent visual quality. Our smart algorithm finds the perfect balance."
    },
    {
      question: "Is there a limit on file size or number of images?",
      answer: "You can compress up to 50 images at once, with each image up to 50MB in size. For most use cases, this provides plenty of capacity for batch processing your images."
    },
    {
      question: "Do I need to create an account?",
      answer: "You can try our compression tool without an account, but creating a free account unlocks additional features like batch processing, custom presets, and compression history."
    },
    {
      question: "Can I undo compression or get my original back?",
      answer: "Since compression happens locally and we don't store your images, always keep a backup of your original files. The compression process creates new files, so your originals remain untouched on your device."
    },
    {
      question: "What's the difference between the compression presets?",
      answer: "We offer presets optimized for different use cases: 'Web' for websites (balanced size/quality), 'Social Media' for platforms with size limits, and 'Storage' for maximum compression when archiving images."
    },
    {
      question: "Does compression work on mobile devices?",
      answer: "Yes! Our tool works on any modern browser, including mobile devices. The interface is fully responsive and touch-friendly for easy use on smartphones and tablets."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Light background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M0%200h80v80H0V0zm20%2020v40h40V20H20zm20%2035a15%2015%200%201%201%200-30%2015%2015%200%200%201%200%2030z%22%20opacity%3D%220.5%22/%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our image compression tool.
          </p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-gray-100 rounded-xl px-6 bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
