import { Check, ArrowRight, Users, Award, Clock, Target, Zap, Shield } from "lucide-react";
import React from "react";

// SectionHeading component (simplified inline)
const SectionHeading = ({ title, subtitle, alignment = "center" }) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  return (
    <div className={`space-y-4 ${alignmentClasses[alignment]}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

// Button component (simplified inline)
type ButtonProps = {
  children: React.ReactElement<any> | React.ReactNode;
  asChild?: boolean;
  size?: "default" | "lg";
  variant?: "default" | "outline";
  className?: string;
  [key: string]: any;
};

const Button: React.FC<ButtonProps> = ({ children, asChild, size = "default", variant = "default", className = "", ...props }) => {
  const sizeClasses = {
    default: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };
  
  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50"
  };
  
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...(typeof children.props === "object" ? children.props : {}),
      ...props,
      className: `${(children.props as any).className || ''} inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`,
    });
  }
  
  return (
    <button 
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const features = [
  {
    text: "Experienced team of developers and marketers",
    icon: Users,
    color: "text-blue-500"
  },
  {
    text: "Custom solutions tailored to your business",
    icon: Target,
    color: "text-purple-500"
  },
  {
    text: "Client-focused approach and support",
    icon: Shield,
    color: "text-green-500"
  },
  {
    text: "Proven track record of successful projects",
    icon: Award,
    color: "text-orange-500"
  },
  {
    text: "Cutting-edge technologies and methodologies",
    icon: Zap,
    color: "text-cyan-500"
  },
  {
    text: "Timely delivery and transparent communication",
    icon: Clock,
    color: "text-pink-500"
  },
];

const AboutPreview = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
        
        {/* Static geometric shapes - no animation */}
        <div className="absolute top-20 right-1/4 w-20 h-20 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full shadow-lg transform rotate-45"></div>
        </div>
        
        <div className="absolute bottom-40 left-1/4 w-16 h-16 opacity-20">
          <div className="w-full h-full bg-gradient-to-tr from-indigo-400/40 to-cyan-500/40 rounded-lg shadow-md transform -rotate-12"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Simplified Image Column */}
          <div className="w-full lg:w-1/2 relative group">
            {/* Main image container with minimal hover effect */}
            <div className="relative z-20 hover:scale-[1.01] transition-transform duration-500">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
                    alt="TVM IT Solutions Team"
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Simple gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-purple-900/10"></div>
                </div>
                
                {/* Simple border */}
                <div className="absolute inset-0 rounded-2xl border border-white/20"></div>
              </div>
              
              {/* Static stats cards */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-xs text-slate-600">Projects</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">5+</div>
                  <div className="text-xs text-slate-600">Years</div>
                </div>
              </div>
            </div>
            
            {/* Static decorative elements */}
            <div className="absolute top-8 -left-8 w-full h-full">
              <div className="w-full h-full border-2 border-blue-200/30 rounded-2xl -z-10"></div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-full h-full">
              <div className="w-full h-full bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-2xl -z-20"></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 space-y-8">
            <SectionHeading
              title="About TVM IT Solutions"
              alignment="left"
              subtitle="We are a team of passionate IT professionals dedicated to delivering exceptional digital solutions that transform businesses and drive growth."
            />

            {/* Simplified features grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group relative p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Simple background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex items-start space-x-3">
                    {/* Simple icon */}
                    <div className={`p-2 rounded-lg bg-gradient-to-br from-white to-slate-50 shadow-sm ${feature.color}`}>
                      <feature.icon size={18} />
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300 text-sm leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                  
                  {/* Simple hover indicator */}
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* CTA section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/about'}
              >
                Learn More About Us
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              {/* Simple status indicator */}
              <div className="flex items-center space-x-4 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Available for consultation</span>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-8 pt-6 border-t border-slate-200/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">100%</div>
                <div className="text-xs text-slate-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">24/7</div>
                <div className="text-xs text-slate-600">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">48h</div>
                <div className="text-xs text-slate-600">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;