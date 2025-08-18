import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaDownload,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 text-white dark:bg-gray-950 dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div>
          <h2 className="text-4xl font-bold mb-2">Get In Touch</h2>
          <p className="text-gray-300 mb-8">
            Let's discuss your next project, potential collaboration
            opportunities, or just have a chat about technology!
          </p>

          <h3 className="text-xl font-semibold mb-3">Let's Connect</h3>
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            I'm always interested in new opportunities, innovative projects,
            and connecting with fellow developers. Whether you're looking for a
            collaborator, have a question about my work, or just want to say
            hello, I’d love to hear from you!
          </p>

          {/* Contact Info */}
          <div className="space-y-5 mb-8">
            <div className="flex items-center gap-4 text-purple-400 text-lg">
              <FaEnvelope />
              <span className="text-white text-sm">
                hafiztanzeel@example.com
              </span>
            </div>
            <div className="flex items-center gap-4 text-purple-400 text-lg">
              <FaLinkedin />
              <span className="text-white text-sm">
                linkedin.com/in/hafiz-tanzeel
              </span>
            </div>
            <div className="flex items-center gap-4 text-purple-400 text-lg">
              <FaGithub />
              <span className="text-white text-sm">
                github.com/hafiz-tanzeel
              </span>
            </div>
            <div className="flex items-center gap-4 text-purple-400 text-lg">
              <FaMapMarkerAlt />
              <span className="text-white text-sm">Islamabad, Pakistan</span>
            </div>
          </div>

          {/* Areas of Interest */}
          <div className="mb-6">
            <p className="mb-2 text-sm font-semibold text-gray-300">
              Areas of Interest
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Web Development",
                "AI & Machine Learning",
                "Open Source",
                "Mentorship",
                "Tech Communities",
                "Startup Projects",
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-slate-800 text-gray-200 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Resume Button */}
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md text-sm font-medium transition"
          >
            <FaDownload className="text-base" /> Download My Resume
          </a>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-8 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Send Me a Message</h3>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-slate-200 dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-slate-200 dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="What's this about?"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-slate-200 dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              rows="4"
              placeholder="Tell me about your project, idea, or just say hello..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-slate-200 dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 bg-gray-900 dark:bg-gray-600 text-white py-3 rounded-md hover:bg-gray-800 transition"
            >
              Send Message <FaPaperPlane className="text-base" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
