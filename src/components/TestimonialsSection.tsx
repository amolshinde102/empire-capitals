
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [sectionRef, isVisible] = useScrollAnimation();

  const testimonials = [
    {
      name: "Sanket Bhair",
      role: "Full-Time Trader",
      company: "Alandi, Pune",
      content: "Empire Capitals transformed my trading completely. In just months, I went from losing money to making consistent profits. The mentorship and live trading sessions were game-changers.",
      // profit: "+$45,000",
      image: "/lovable-uploads/testimonials/testimonial 1.png"
    },
    {
      name: "Soham Kshirsagar",
      role: "Options Trader",
      company: "Bhingar, Ahilyanagar",
      content: "The Professional Trader Program exceeded all my expectations. I now trade for a prop firm and earn more than my previous banking job. The support system is incredible.",
      // profit: "+$78,000",
      image: "/lovable-uploads/testimonials/testimonial 2.png"
    },
    {
      name: "Rahul Salunke",
      role: "Crypto Trader",
      company: "Shirur",
      content: "Started as a complete beginner and now I'm managing my own portfolio successfully. The advanced technical analysis course was worth every penny. Highly recommended!",
      // profit: "+$32,000",
      image: "/lovable-uploads/testimonials/testimonial 3.png"
    },
    {
      name: "Kedar",
      role: "Forex Trader",
      company: "Maharashtra",
      content: "Empire Capitals didn't just teach me to trade - they taught me to think like a professional trader. The psychology and risk management lessons were invaluable. 11 Lacks Profit in 30 Days with $100",
      // profit: "+$56,000",
      image: "/lovable-uploads/testimonials/testimonial 4.png"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="snap-section section-testimonials px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto section-content">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space-grotesk font-bold mb-6">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-poppins">
            Hear from our students who have transformed their lives through trading education
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className={`relative max-w-4xl mx-auto transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`} style={{ transitionDelay: '0.2s' }}>
          <div className="glass-card p-8 sm:p-12">
            {/* Quote Icon */}
            <div className="text-6xl text-gradient-to-r from-indigo-500 to-purple-600 mb-6 opacity-20">"</div>

            {/* Testimonial Content */}
            <div className="mb-8">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 font-poppins">
                {testimonials[currentTestimonial].content}
              </p>
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gradient-to-r from-indigo-500 to-purple-600"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white font-space-grotesk">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-400 text-sm font-poppins">
                    {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>

              {/* Profit Badge */}
              <div className="glass-card px-4 py-2 rounded-full">
                <span className="text-green-400 font-bold text-lg font-space-grotesk">
                  {testimonials[currentTestimonial].profit}
                </span>
                <span className="text-gray-400 text-sm ml-2 font-poppins">in profits</span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-card p-3 rounded-full hover:scale-110 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-card p-3 rounded-full hover:scale-110 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className={`flex justify-center space-x-2 mt-8 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`} style={{ transitionDelay: '0.3s' }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
