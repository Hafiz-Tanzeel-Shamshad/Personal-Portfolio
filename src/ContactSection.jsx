import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaDownload,
  FaPhone,

} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-10 bg-gray-900 text-white dark:bg-gray-950 dark:text-white"
    >
      {/* Top Heading & Intro */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Let's Work Together</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          I'm always open to discussing new opportunities and interesting projects.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* Left Column */}

        <div>

          <h2 className="text-4xl font-bold mb-2">Get In Touch</h2>
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            I'm always interested in new opportunities, innovative projects,
            and connecting with fellow developers. Whether you're looking for a
            collaborator, have a question about my work, or just want to say
            hello, I’d love to hear from you!
          </p>

          <div className="flex-1 flex flex-col gap-6">
            {/* Contact Info */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-purple-400 hover:scale-105 transition-transform duration-200">
                  <FaEnvelope />{" "}
                  <span className="text-white">hafiztanzeel.pk@gmail.com</span>
                </li>
                <li className="flex items-center gap-3 text-green-400 hover:scale-105 transition-transform duration-200">
                  <FaPhone />{" "}
                  <span className="text-white">+92 346 052 9820</span>
                </li>
                <li className="flex items-center gap-3 text-pink-400 hover:scale-105 transition-transform duration-200">
                  <FaMapMarkerAlt />{" "}
                  <span className="text-white">Islamabad, Pakistan</span>
                </li>
              </ul>
            </div>

             {/* Areas of Interest */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Areas of Interest</h3>
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
                    className="text-xs bg-slate-700 text-gray-200 px-3 py-1 rounded-full"
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
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md text-sm font-medium transition"
            >
              <FaDownload className="text-base" /> Download My Resume
            </a>

          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-12 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Send Me a Message</h3>
          <form className="space-y-4">
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
