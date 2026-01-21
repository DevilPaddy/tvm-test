import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, Globe, BarChart2, Users } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import AnimatedCard from "../common/AnimatedCard";

const services = [
  {
    id: "android",
    title: "Android App Development",
    description: "Custom Android applications tailored to your business requirements with intuitive user interfaces and seamless functionality.",
    icon: Smartphone,
    color: "bg-gradient-to-br from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-500",
    borderGradient: "from-blue-500/30 to-cyan-500/30"
  },
  {
    id: "website",
    title: "Website Development",
    description: "Responsive and modern websites designed to provide the best user experience across all devices and platforms.",
    icon: Globe,
    color: "bg-gradient-to-br from-purple-500/20 to-pink-500/10",
    iconColor: "text-purple-500",
    borderGradient: "from-purple-500/30 to-pink-500/30"
  },
  {
    id: "digital",
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns that drive traffic, increase conversions, and maximize your online presence.",
    icon: BarChart2,
    color: "bg-gradient-to-br from-indigo-500/20 to-blue-500/10",
    iconColor: "text-indigo-500",
    borderGradient: "from-indigo-500/30 to-blue-500/30"
  },
  {
    id: "influencer",
    title: "Influencer Marketing",
    description: "Connect with relevant influencers to promote your brand and reach new audiences through authentic partnerships.",
    icon: Users,
    color: "bg-gradient-to-br from-pink-500/20 to-rose-500/10",
    iconColor: "text-pink-500",
    borderGradient: "from-pink-500/30 to-rose-500/30"
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 relative">
      {/* Simplified background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"></div>
        
        {/* Minimal decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-3xl rotate-12"></div>
        </div>
        
        <div className="absolute bottom-32 left-16 w-24 h-24 opacity-30">
          <div className="w-full h-full bg-gradient-to-tr from-indigo-400/30 to-cyan-500/30 rounded-2xl -rotate-12"></div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Our Services"
          subtitle="We offer a comprehensive range of IT solutions to help businesses thrive in the digital landscape."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <AnimatedCard key={service.id} delay={index * 100} className="h-full">
              <Link
                to={`/services#${service.id}`}
                className="block h-full group"
              >
                <div className={`
                  relative h-full p-8 rounded-2xl border border-white/20 backdrop-blur-sm
                  bg-white/80 hover:bg-white/90 transition-all duration-300 ease-out
                  transform hover:scale-[1.02] hover:-translate-y-1
                  shadow-lg hover:shadow-xl
                  before:absolute before:inset-0 before:rounded-2xl 
                  before:bg-gradient-to-r before:${service.borderGradient}
                  before:p-[1px] before:opacity-0 hover:before:opacity-100
                  before:transition-opacity before:duration-300
                `}>
                  
                  {/* Simple hover background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`absolute inset-0 ${service.color} rounded-2xl`}></div>
                  </div>
                  
                  <div className="relative z-10">
                    {/* Icon container - simplified */}
                    <div className={`
                      relative p-4 rounded-xl inline-block mb-6 ${service.color}
                      transform group-hover:scale-105
                      transition-transform duration-200 ease-out
                      shadow-lg
                    `}>
                      <service.icon 
                        size={32} 
                        className={`relative z-10 ${service.iconColor} transition-transform duration-200`} 
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-4 text-slate-800 group-hover:text-slate-900 transition-colors duration-200">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed text-sm group-hover:text-slate-700 transition-colors duration-200">
                      {service.description}
                    </p>
                    
                    {/* Simple CTA */}
                    <div className="flex items-center justify-between">
                      <div className={`
                        flex items-center ${service.iconColor} font-medium text-sm
                        transform group-hover:translate-x-1 transition-transform duration-200
                        relative
                      `}>
                        <span className="relative z-10">Learn More</span>
                        <ArrowRight 
                          size={16} 
                          className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" 
                        />
                      </div>
                      
                      {/* Simple indicator */}
                      <div className={`
                        w-2 h-2 rounded-full ${service.color} 
                        opacity-0 group-hover:opacity-100 
                        transition-opacity duration-200
                      `}></div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>
        
        {/* Simple decorative dots */}
        <div className="mt-20 flex justify-center">
          <div className="flex space-x-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === 0 ? 'bg-blue-500' : 
                  i === 1 ? 'bg-purple-500' : 
                  i === 2 ? 'bg-indigo-500' : 'bg-pink-500'
                } opacity-60`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;