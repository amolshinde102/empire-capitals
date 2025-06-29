
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const CoursesSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  const courses = [
    {
      title: "Beginner Trading Mastery",
      description: "Perfect for newcomers to trading. Learn fundamentals, risk management, and basic strategies.",
      price: "Contact for Pricing",
      duration: "4 weeks",
      level: "Beginner",
      features: ["Live Trading Sessions", "1-on-1 Mentoring", "Trading Tools Access", "Certificate"]
    },
    {
      title: "Advanced Technical Analysis",
      description: "Deep dive into chart patterns, indicators, and advanced trading psychology.",
      price: "Contact for Pricing",
      duration: "8 weeks",
      level: "Advanced",
      features: ["Advanced Strategies", "Market Analysis", "Risk Management", "Portfolio Building"]
    },
    {
      title: "Professional Trader Program",
      description: "Comprehensive program for serious traders. Includes prop firm preparation.",
      price: "Contact for Pricing",
      duration: "12 weeks",
      level: "Professional",
      features: ["Prop Firm Training", "Live Account Management", "1-on-1 Coaching", "Job Placement"]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="courses" 
      className="snap-section section-courses px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto section-content">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'content-visible' : 'content-hidden'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space-grotesk font-bold mb-6">
            Our <span className="gradient-text">Premium Courses</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-poppins">
            Choose from our carefully crafted courses designed to take you from beginner to professional trader
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`glass-card p-8 hover:scale-105 transition-all duration-300 group cursor-pointer ${
                isVisible ? 'content-visible' : 'content-hidden'
              }`}
              style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Course Level Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-6 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/30 font-space-grotesk">
                {course.level}
              </div>

              {/* Course Title */}
              <h3 className="text-xl font-space-grotesk font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed font-poppins">
                {course.description}
              </p>

              {/* Course Details */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-poppins">Duration:</span>
                  <span className="text-white font-semibold font-space-grotesk">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-poppins">Price:</span>
                  <span className="text-2xl font-bold gold-gradient font-space-grotesk">{course.price}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {course.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
                    <span className="text-gray-300 text-sm font-poppins">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
<a
  href="https://wa.me/917218526589?text=Hi!%20I%20want%20to%20enroll%20in%20the%20Beginner%20Trading%20Mastery%20program.%20Please%20share%20pricing%2C%20start%20dates%2C%20and%20next%20steps."
  target="_blank"
  rel="noopener noreferrer"
  className="w-full"
>
  <button className="w-full btn-primary text-center font-space-grotesk">
    Enroll Now
  </button>
</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
