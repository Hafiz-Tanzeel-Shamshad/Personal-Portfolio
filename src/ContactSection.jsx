import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaDownload,
  FaPhone,
} from "react-icons/fa";

const ContactSection = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  // Env vars
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT;
  const TEMPLATE_AUTOREPLY = import.meta.env.VITE_EMAILJS_TEMPLATE_AUTOREPLY;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // 1. Send to YOU
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_CONTACT, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      // 2. Send auto-reply to USER
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_AUTOREPLY, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      setStatus({ ok: true, msg: "✅ Thanks! Your message has been sent." });
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({ ok: false, msg: "❌ Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-10 bg-gray-900 text-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Let's Work Together</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          I'm always open to discussing new opportunities and interesting projects.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* Left Column */}
     
        <div className="space-y-6">
        <div className="mb-6 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-2 text-green-400">Let's Connect</h1>
          <p className="text-gray-300 text-base leading-relaxed">
            I'm always interested in discussing new opportunities, collaborating on projects, or sharing knowledge about web development and technology.
          </p>
     </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-purple-400">
                <FaEnvelope /> <span className="text-white">hafiztanzeel.pk@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-green-400">
                <FaPhone /> <span className="text-white">+92 346 052 9820</span>
              </li>
              <li className="flex items-center gap-3 text-pink-400">
                <FaMapMarkerAlt /> <span className="text-white">Islamabad, Pakistan</span>
              </li>
            </ul>
          </div>

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
              ].map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-slate-700 text-gray-200 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            <FaDownload className="text-2xl" /> Download My Resume
          </a>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-12 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Send Me a Message</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="from_name"
              placeholder="Your full name"
              required
              className="w-full px-4 py-3 rounded-md bg-slate-200 dark:bg-gray-700 text-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="from_email"
              placeholder="your@email.com"
              required
              className="w-full px-4 py-3 rounded-md bg-slate-200 dark:bg-gray-700 text-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="What's this about?"
              className="w-full px-4 py-3 rounded-md bg-slate-200 dark:bg-gray-700 text-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              rows="4"
              name="message"
              placeholder="Tell me about your project, idea, or just say hello..."
              required
              className="w-full px-4 py-3 rounded-md bg-slate-200 dark:bg-gray-700 text-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 bg-gray-900 dark:bg-gray-600 text-white py-3 rounded-md hover:bg-gray-800 transition disabled:opacity-70"
            >
              {loading ? "Sending..." : <>Send Message <FaPaperPlane /></>}
            </button>

            {status && (
              <p
                className={`text-sm mt-2 ${
                  status.ok ? "text-green-500" : "text-red-500"
                }`}
              >
                {status.msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
