
interface QuickStartStep {
  step: number;
  title: string;
  description: string;
}

const QuickStartGuide = () => {
  const quickStartSteps: QuickStartStep[] = [
    {
      step: 1,
      title: "Upload Your Images",
      description: "Drag and drop your images or click to browse. Support for single files or batch uploads."
    },
    {
      step: 2,
      title: "Choose Settings", 
      description: "Select compression quality, output format, and resize options if needed."
    },
    {
      step: 3,
      title: "Compress & Download",
      description: "Click compress and download your optimized images individually or as a ZIP file."
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#2c3e50] to-[#34495e] bg-clip-text text-transparent mb-8 text-center">
        Quick Start Guide
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {quickStartSteps.map((step, index) => (
          <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
              {step.step}
            </div>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-[#2c3e50] to-[#34495e] bg-clip-text text-transparent mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickStartGuide;
