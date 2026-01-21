import SectionHeading from "../common/SectionHeading";
import AnimatedCard from "../common/AnimatedCard";

const milestones = [
  {
    year: "2025",
    title: "Company Founded",
    description: "TVM IT Solutions was established in January 2025 with a vision to provide innovative IT solutions to businesses of all sizes."
  },
  {
    year: "2025",
    title: "Service Portfolio Launch",
    description: "Launched comprehensive services including Android app development, website development, digital marketing, and influencer marketing."
  },
  {
    year: "2025",
    title: "Client Acquisition",
    description: "Successfully onboarded first clients and began delivering high-quality IT solutions across multiple industries."
  },
  {
    year: "2025",
    title: "Team Assembly",
    description: "Built a skilled team of developers, designers, and marketing specialists to provide end-to-end digital solutions."
  },
  {
    year: "2025",
    title: "Technology Stack",
    description: "Established robust technology infrastructure and development processes to ensure scalable and efficient project delivery."
  },
  {
    year: "2025+",
    title: "Future Growth",
    description: "Focused on expanding our client base, enhancing service offerings, and establishing TVM IT Solutions as a trusted technology partner."
  }
];

const CompanyHistory = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <SectionHeading
          title="Our Journey"
          subtitle="A brief history of TVM IT Solutions and our path to becoming a trusted IT partner."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-tvm-blue/20 transform md:translate-x-px"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <AnimatedCard delay={index * 100}>
                  <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-tvm-blue rounded-full transform -translate-x-1/2 z-10 shadow-lg"></div>
                    
                    {/* Content box - alternating left and right */}
                    <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} pl-8 md:pl-0`}>
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:bg-white/90 transition-all duration-300">
                        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold bg-tvm-blue/10 text-tvm-blue rounded-full">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-medium mb-2 text-slate-800">{milestone.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;