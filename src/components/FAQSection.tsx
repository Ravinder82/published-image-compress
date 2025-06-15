
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
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our image compression tool.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-gray-700">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
