import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, User, Quote, Award, Heart, TrendingUp } from "lucide-react";

const TestimonialsSection = () => {
  // Mock data for demonstration
  const mockTestimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Client at Tech Corp",
      testimonial: "TVM IT Solutions transformed our digital presence completely. Their team's expertise and dedication are unmatched.",
      rating: 5,
      date: "2024-01-15",
      location: "Mumbai, India"
    },
    {
      id: 2,
      name: "Raj Patel",
      role: "Client at StartupCo",
      testimonial: "Outstanding service and results. They delivered exactly what we needed on time and within budget.",
      rating: 5,
      date: "2024-02-10",
      location: "Pune, India"
    },
    {
      id: 3,
      name: "Lisa Chen",
      role: "Client at Global Ltd",
      testimonial: "Professional, reliable, and innovative. TVM IT Solutions exceeded our expectations in every way.",
      rating: 5,
      date: "2024-03-05",
      location: "Delhi, India"
    }
  ];

  const [testimonials] = useState(mockTestimonials);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && testimonials.length > 1) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden" aria-label="Client Testimonials">
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"></div>
      
      {/* Background elements with blue theme */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/15 to-blue-500/15 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-32 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-full shadow-lg mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            Client Success Stories
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            What Our{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-white bg-clip-text text-transparent">
                Clients Say
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued clients have to say about their experience with TVM IT Solutions.
          </p>
        </div>

        {/* Stats section with blue theme */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-blue-400/30 hover:border-blue-400/50 transition-colors duration-300 shadow-lg">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Award className="text-white" size={28} />
                  </div>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent mb-2">{averageRating.toFixed(1)}</div>
                <div className="text-sm text-blue-200 mb-3">Average Rating</div>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.round(averageRating) ? "fill-blue-400 text-blue-400" : "text-gray-400"}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-blue-400/30 hover:border-blue-400/50 transition-colors duration-300 shadow-lg">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Heart className="text-white" size={28} />
                  </div>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent mb-2">{testimonials.length}+</div>
                <div className="text-sm text-blue-200">Happy Clients</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-blue-400/30 hover:border-blue-400/50 transition-colors duration-300 shadow-lg">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <TrendingUp className="text-white" size={28} />
                  </div>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-sm text-blue-200">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden pb-12" role="region" aria-label="Client testimonials carousel">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 p-4" 
                  role="group" 
                  aria-label={`Testimonial from ${testimonial.name}`} 
                  aria-hidden={index !== activeIndex}
                >
                  <div className="relative">
                    {/* Blue themed testimonial card */}
                    <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-10 shadow-2xl border-2 border-blue-200/50 hover:border-blue-300/70 transition-colors duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-blue-100/60 rounded-3xl"></div>
                      
                      {/* Quote icon with blue theme */}
                      <div className="absolute -top-6 -left-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 shadow-xl">
                        <Quote size={28} className="text-white" />
                      </div>
                      
                      <div className="relative z-10 pt-6">
                        {/* Rating display */}
                        <div className="flex items-center justify-center space-x-1 mb-8" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={24}
                              className={`${
                                i < testimonial.rating 
                                  ? "fill-blue-500 text-blue-500" 
                                  : "text-gray-300"
                              }`}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        
                        {/* Testimonial text */}
                        <div className="relative mb-10">
                          <p className="text-xl md:text-2xl leading-relaxed text-gray-800 italic text-center font-light">
                            "{testimonial.testimonial}"
                          </p>
                          
                          {/* Decorative elements with blue theme */}
                          <div className="absolute -top-3 -left-3 w-10 h-10 border-l-2 border-t-2 border-blue-400/50 rounded-tl-lg"></div>
                          <div className="absolute -bottom-3 -right-3 w-10 h-10 border-r-2 border-b-2 border-blue-400/50 rounded-br-lg"></div>
                        </div>
                        
                        {/* Author section */}
                        <div className="flex items-center justify-center space-x-6">
                          <div className="relative">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 backdrop-blur-sm border-3 border-blue-300/60 flex items-center justify-center shadow-xl">
                              <User size={32} className="text-blue-600" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full border-2 border-white shadow-lg"></div>
                          </div>
                          
                          <div className="text-center">
                            <h4 className="font-bold text-gray-800 text-xl mb-1">{testimonial.name}</h4>
                            <p className="text-blue-600 text-sm font-medium mb-2">{testimonial.role}</p>
                            <p className="text-gray-600 text-xs flex items-center justify-center">
                              <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                              {testimonial.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation controls with blue theme */}
          <div className="flex justify-center items-center space-x-8 mt-12" role="group" aria-label="Testimonial navigation">
            <button
              onClick={prevTestimonial}
              className="bg-white/90 hover:bg-white border-2 border-blue-200 hover:border-blue-400 text-blue-600 hover:text-blue-700 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center transition-colors duration-300 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} aria-hidden="true" />
            </button>
            
            {/* Dot indicators with blue theme */}
            <div className="flex space-x-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg scale-125" 
                      : "bg-blue-200 hover:bg-blue-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : "false"}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="bg-white/90 hover:bg-white border-2 border-blue-200 hover:border-blue-400 text-blue-600 hover:text-blue-700 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center transition-colors duration-300 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Auto-play indicator with blue theme */}
          {isAutoPlaying && (
            <div className="flex justify-center mt-6">
              <div className="flex items-center space-x-2 text-blue-300 text-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>Auto-playing</span>
              </div>
            </div>
          )}
        </div>

        {/* CTA section with blue theme */}
        <div className="mt-24 text-center">
          <div className="max-w-2xl mx-auto mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to{' '}
              <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-white bg-clip-text text-transparent">
                Join Them?
              </span>
            </h3>
            <p className="text-lg text-blue-100">See what makes our clients choose us again and again for their digital transformation journey.</p>
          </div>
          
          <button 
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 px-10 py-4 rounded-lg text-lg font-semibold"
            onClick={() => console.log('Navigate to reviews')}
            aria-label="Read all client reviews"
          >
            View All Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;