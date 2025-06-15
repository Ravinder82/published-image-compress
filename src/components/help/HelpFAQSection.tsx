
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const HelpFAQSection = () => {
  const faqItems: FAQItem[] = [
    {
      question: "What image formats does ImageCompress support?",
      answer: "ImageCompress supports all major image formats including JPEG, PNG, WebP, AVIF, GIF, and BMP. You can also convert between different formats during compression."
    },
    {
      question: "What's the maximum file size I can upload?",
      answer: "Free users can upload files up to 10MB each. Pro users can upload files up to 50MB, and Enterprise users have no file size limits."
    },
    {
      question: "How much can I compress my images?",
      answer: "Compression results vary by image type and content. Typically, you can achieve 60-80% size reduction while maintaining excellent visual quality. Photos with many details compress less than graphics with solid colors."
    },
    {
      question: "Is my data secure and private?",
      answer: "Yes! All uploads are encrypted in transit and at rest. We automatically delete your images from our servers after 24 hours. Enterprise users can opt for immediate deletion after processing."
    },
    {
      question: "Can I process multiple images at once?",
      answer: "Absolutely! Our batch processing feature allows you to upload and compress multiple images simultaneously. Free users can process up to 10 images at once, while paid users have higher limits."
    },
    {
      question: "Do you offer an API for developers?",
      answer: "Yes! We provide a robust REST API with comprehensive documentation. API access is available on our Pro and Enterprise plans with different rate limits and features."
    },
    {
      question: "What's the difference between lossy and lossless compression?",
      answer: "Lossy compression reduces file size by removing some image data, resulting in smaller files but slight quality loss. Lossless compression reduces size without quality loss but achieves smaller reductions."
    },
    {
      question: "Can I undo compression or get my original back?",
      answer: "We don't store original files after processing for privacy reasons. We recommend keeping your own backup of original images before compression."
    },
    {
      question: "Why should I choose WebP or AVIF over JPEG?",
      answer: "WebP typically offers 25-30% better compression than JPEG with similar quality. AVIF can achieve even better results (up to 50% smaller) but has limited browser support compared to WebP."
    },
    {
      question: "Do you have mobile apps?",
      answer: "Our web app works great on mobile browsers! We're currently developing native iOS and Android apps. Sign up for our newsletter to get notified when they're available."
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white/80 backdrop-blur-sm rounded-lg border border-white/20 px-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <AccordionTrigger className="text-left font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-pink-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default HelpFAQSection;
