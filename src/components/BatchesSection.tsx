
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const BatchesSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  const batches = [
    {
      month: "August 2025",
      courses: [
        { name: "Beginner Trading Mastery", startDate: "Aug 15", seats: "filling soon", status: "Open" },
        { name: "Advanced Technical Analysis", startDate: "Aug 22", seats: "filling soon", status: "Open" },
        { name: "Professional Trader Program", startDate: "Aug 29", seats: "filling soon", status: "Filling Fast" }
      ]
    },
    {
      month: "September 2025",
      courses: [
        { name: "Beginner Trading Mastery", startDate: "Sep 12", seats: "filling soon", status: "Open" },
        { name: "Advanced Technical Analysis", startDate: "Sep 19", seats: "filling soon", status: "Open" },
        { name: "Professional Trader Program", startDate: "Sep 26", seats: "filling soon", status: "Open" }
      ]
    },
    {
      month: "October 2025",
      courses: [
        { name: "Beginner Trading Mastery", startDate: "Oct 11", seats: "filling soon", status: "Open" },
        { name: "Advanced Technical Analysis", startDate: "Oct 18", seats: "filling soon", status: "Open" },
        { name: "Professional Trader Program", startDate: "Oct 25", seats: "filling soon", status: "Open" }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Filling Fast":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "Full":
        return "bg-red-500/20 text-red-300 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="batches" 
      className="snap-section section-batches px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto section-content">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space-grotesk font-bold mb-6">
            Upcoming <span className="gradient-text">Batch Schedule</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-poppins">
            Join our next batch and start your trading journey. Limited seats available for each course
          </p>
        </div>

        {/* Batches Timeline */}
        <div className="space-y-12">
          {batches.map((batch, batchIndex) => (
            <div 
              key={batchIndex} 
              className={`glass-card p-8 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${0.2 + (batchIndex * 0.1)}s` }}
            >
              {/* Month Header */}
              <h3 className="text-2xl font-space-grotesk font-bold mb-8 gradient-text">
                {batch.month}
              </h3>

              {/* Courses Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {batch.courses.map((course, courseIndex) => (
                  <div
                    key={courseIndex}
                    className="glass-card p-6 hover:scale-105 transition-all duration-300"
                  >
                    {/* Course Name */}
                    <h4 className="text-lg font-semibold mb-4 text-white font-space-grotesk">
                      {course.name}
                    </h4>

                    {/* Course Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm font-poppins">Start Date:</span>
                        <span className="text-white font-semibold font-space-grotesk">{course.startDate}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm font-poppins">Available Seats:</span>
                        <span className="text-white font-semibold font-space-grotesk">{course.seats}</span>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="mb-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border font-space-grotesk ${getStatusColor(course.status)}`}>
                        {course.status}
                      </span>
                    </div>

                    {/* Apply Button */}
<a
  href="https://wa.me/917218526589?text=Hi!%20I%20want%20to%20book%20a%20seat%20for%20an%20upcoming%20trading%20batch%20(Aug%20to%20Oct%202025).%20Please%20share%20available%20courses%2C%20seats%2C%20and%20pricing%20details."
  target="_blank"
  rel="noopener noreferrer"
  className="w-full"
>
  <button className="w-full btn-primary text-sm font-space-grotesk">
    Apply Now
  </button>
</a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`} style={{ transitionDelay: '0.5s' }}>
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-space-grotesk font-bold mb-4">
              Can't find a suitable batch?
            </h3>
            <p className="text-gray-300 mb-6 font-poppins">
              Contact us to discuss custom batch timings or one-on-one mentoring options
            </p>
           <a
  href="https://wa.me/917218526589?text=Hi!%20I%20couldn’t%20find%20a%20suitable%20batch.%20I’d%20like%20to%20schedule%20a%20call%20to%20discuss%20custom%20batch%20timings%20or%20one-on-one%20mentoring%20options.%20Please%20let%20me%20know%20a%20convenient%20time."
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="btn-secondary font-space-grotesk">
    Schedule a Call
  </button>
</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatchesSection;
