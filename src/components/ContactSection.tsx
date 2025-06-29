
const ContactSection = () => {
  return (
    <section id="contact" className="snap-section py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space-grotesk font-bold mb-6">
            Ready to Start <span className="gradient-text">Trading?</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Take the first step towards financial freedom. Get in touch with our team and start your trading journey today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-space-grotesk font-bold mb-8 gradient-text">
              Get Started Today
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 glass-card border border-white/20 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-transparent text-white placeholder-gray-400"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 glass-card border border-white/20 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-transparent text-white placeholder-gray-400"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 glass-card border border-white/20 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-transparent text-white placeholder-gray-400"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 glass-card border border-white/20 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-transparent text-white placeholder-gray-400"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-300 mb-2">
                  Interested Course
                </label>
                <select
                  id="course"
                  className="w-full px-4 py-3 glass-card border border-white/20 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-transparent text-white"
                >
                  <option value="" className="bg-gray-800">Select a course</option>
                  <option value="beginner" className="bg-gray-800">Beginner Trading Mastery</option>
                  <option value="advanced" className="bg-gray-800">Advanced Technical Analysis</option>
                  <option value="professional" className="bg-gray-800">Professional Trader Program</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 glass-card border border-white/20 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-transparent text-white placeholder-gray-400 resize-none"
                  placeholder="Tell us about your trading goals..."
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-space-grotesk font-bold mb-6 gradient-text">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-300">+91 721 852 6589</p>
                    <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">hello@empirecapitals.com</p>
                    <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                   <h4 className="text-lg font-semibold text-white mb-1">Office</h4>

<a
  href="https://www.google.com/maps/place/Mayur+Colony,+Kothrud,+Pune,+Maharashtra+411038"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
>
  <p>Mayur Colony<br />Kothrud</p>
  <p>Pune, Maharashtra 411038</p>
</a>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Card */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-space-grotesk font-bold mb-6 gradient-text">
                Quick FAQ
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">How long are the courses?</h4>
                  <p className="text-gray-300 text-sm">Our courses range from 8-16 weeks depending on the program level.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Do you offer payment plans?</h4>
                  <p className="text-gray-300 text-sm">Yes, we offer flexible payment options to make our courses accessible.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Is there ongoing support?</h4>
                  <p className="text-gray-300 text-sm">Absolutely! We provide 24/7 support and lifetime access to our community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-space-grotesk font-bold mb-4 gradient-text">
              Ready to Transform Your Financial Future?
            </h3>
            <p className="text-gray-300 mb-8">
              Join thousands of successful traders who started their journey with Empire Capitals. 
              Your financial freedom is just one step away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a
  href="https://wa.me/917218526589?text=Hi!%20I'm%20ready%20to%20start%20my%20trading%20journey%20with%20Empire%20Capitals.%20I'd%20like%20a%20free%20consultation%20to%20understand%20which%20program%20is%20best%20for%20me."
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="btn-primary">
    Start Free Consultation
  </button>
</a>
              <button className="btn-secondary">
                Download Course Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
