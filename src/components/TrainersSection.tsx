
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const TrainersSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  const trainers = [
    {
      name: "CEO Mr Prathamesh Gund",
      title: "Senior Trading Strategist",
      experience: "12+ Years",
      specialization: "Forex & Crypto Trading",
      bio: "An experienced Indian and Forex trader specializing in high-frequency strategies and institutional market behavior. Has trained over 5000 students through live sessions and structured programs.",
      image: "/lovable-uploads/trainer 1.png"
    },
    {
      name: "Pavan Warkhade",
      title: "Options Trading Expert", 
      experience: "5+ Years",
      specialization: "Options & Derivatives",
      bio: "Focused on options trading with a deep understanding of market volatility and hedging techniques. Regularly conducts practical workshops for traders across all experience levels.",
      image: "/lovable-uploads/trainer 2.png"
    },
    {
      name: "Shubham Zaware Patil",
      title: "Technical Analysis Guru",
      experience: "4+ Years", 
      specialization: "Chart Analysis & Psychology",
      bio: "A technical analyst known for a clear, action-oriented teaching style. Combines chart pattern expertise with strong psychological discipline to help traders build confidence and consistency.",
      image: "/lovable-uploads/trainer 3.png"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="trainers" 
      className="snap-section section-trainers px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto section-content">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space-grotesk font-bold mb-6">
            Meet Our <span className="gradient-text">Expert Trainers</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-poppins">
            Learn from industry veterans who have traded millions and mentored thousands of successful traders
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className={`glass-card p-8 hover:scale-105 transition-all duration-300 group cursor-pointer text-center transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{ 
                transitionDuration: '1000ms',
                transitionDelay: `${0.2 + (index * 0.1)}s` 
              }}
            >
              {/* Trainer Image */}
              <div className="relative mb-6">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gradient-to-r from-indigo-500 to-purple-600"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full border-2 border-background"></div>
              </div>

              {/* Trainer Info */}
              <h3 className="text-xl font-space-grotesk font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                {trainer.name}
              </h3>
              
              <div className="text-gray-400 text-sm mb-4 font-poppins">{trainer.title}</div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="glass-card p-3">
                  <div className="text-lg font-bold gold-gradient font-space-grotesk">{trainer.experience}</div>
                  <div className="text-xs text-gray-400 font-poppins">Experience</div>
                </div>
                <div className="glass-card p-3">
                  <div className="text-lg font-bold text-teal-400 font-space-grotesk">5.0</div>
                  <div className="text-xs text-gray-400 font-poppins">Rating</div>
                </div>
              </div>

              {/* Specialization */}
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 font-space-grotesk">
                {trainer.specialization}
              </div>

              {/* Bio */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-poppins">
                {trainer.bio}
              </p>

              {/* CTA */}
          <a
  href="https://www.instagram.com/empire_capitals_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  target="_blank"
  rel="noopener noreferrer"
  className="w-full"
>
  <button className="btn-secondary w-full font-space-grotesk">
    View Profile
  </button>
</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
