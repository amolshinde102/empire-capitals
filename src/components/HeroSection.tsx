
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const HeroSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="snap-section section-hero px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/6b78e6d1-8418-4eb6-95cc-f1f880fc1535.png')`,
            backgroundPosition: '25% center', // Focus on founder on the left side
            backgroundSize: 'cover'
          }}
        ></div>
        {/* Left to right gradient - clear on left (founder side), darker on right (content side) */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-900/30 to-slate-900/95"></div>
      </div>

      <div className="max-w-7xl mx-auto section-content relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Left side - Reserved for background image */}
          <div className="hidden lg:block"></div>

          {/* Right Content */}
          <div className="space-y-8 lg:ml-8">
            {/* Badge */}
            <div className={`inline-flex items-center px-4 py-2 glass-card rounded-full ${
              isVisible ? 'content-visible' : 'content-hidden'
            }`} style={{ transitionDelay: '0.1s' }}>
              <span className="text-sm font-medium text-teal-400 font-space-grotesk">
                🏆 #1 Trading Education Platform
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-6">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-space-grotesk font-bold leading-tight text-white ${
                isVisible ? 'content-visible' : 'content-hidden'
              }`} style={{ transitionDelay: '0.2s' }}>
                Learn to trade in the{" "}
                <span className="gradient-text">most simplified way</span>
              </h1>
              <p className={`text-lg sm:text-xl text-gray-200 max-w-2xl font-poppins ${
                isVisible ? 'content-visible' : 'content-hidden'
              }`} style={{ transitionDelay: '0.3s' }}>
                Empire Capitals Academy is the best stock market institute 
                that provides the most simplified and to-the-point stock 
                market course from the scratch for beginners.
              </p>
            </div>

            {/* CTA Button */}
            {/* CTA Button */}
<div
  className={`flex flex-col sm:flex-row gap-4 ${
    isVisible ? 'content-visible' : 'content-hidden'
  }`}
  style={{ transitionDelay: '0.4s' }}
>
  <a
    href="https://wa.me/917218526589?text=Hi!%20I%20would%20like%20to%20enroll%20in%20one%20of%20your%20trading%20programs.%20Please%20guide%20me%20through%20the%20next%20steps."
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg font-space-grotesk">
      📚 Enroll Now
    </button>
  </a>

  <button className="btn-secondary font-space-grotesk">
    Watch Demo
  </button>
</div>

            {/* Success Stats */}
            <div className={`grid grid-cols-3 gap-8 pt-8 ${
              isVisible ? 'content-visible' : 'content-hidden'
            }`} style={{ transitionDelay: '0.5s' }}>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gold-gradient font-space-grotesk">5K+</div>
                <div className="text-sm text-gray-300 font-poppins">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gold-gradient font-space-grotesk">95%</div>
                <div className="text-sm text-gray-300 font-poppins">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gold-gradient font-space-grotesk">24/7</div>
                <div className="text-sm text-gray-300 font-poppins">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-8 w-16 h-16 border-2 border-orange-400 rounded-full opacity-30 hidden lg:block"></div>
      <div className="absolute bottom-1/3 right-16 w-3 h-3 bg-orange-400 rounded-full opacity-60 hidden lg:block"></div>
    </section>
  );
};

export default HeroSection;
