import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Form submitted:", formData);
      await emailjs.send(
        "service_xxwm7xt",
        "template_6fzukij",
        {
          from_name: formData.name,
          to_name: "Vignesh",
          from_email: formData.email,
          to_email: "vigneshvive2@gmail.com",
          message: formData.message,
        },
        "x4gcAVmAZO62mQ9vD"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Something went wrong!");
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      description: "Drop me a line anytime",
      detail: "vigneshvive2@gmail.com",
    },
 
    {
      icon: "⚡",
      title: "Response Time",
      description: "Quick turnaround",
      detail: "Within 24-48 hours",
    },
  ];

  return (
    <section
      id="contact"
      className="relative c-space section-spacing overflow-hidden mb-10"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-heading mb-4">Let's Connect</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to
            discussing new opportunities and creative ideas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get In Touch
              </h3>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Whether you're looking to build a new website, improve your
                existing platform, or bring a unique project to life, I'm here
                to help make your vision a reality.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-start gap-4 p-4 rounded-xl border border-neutral-700/50 bg-neutral-900/30 hover:bg-neutral-800/50 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {info.title}
                    </h4>
                    <p className="text-neutral-500 text-sm mb-1">
                      {info.description}
                    </p>
                    <p className="text-neutral-300">{info.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-neutral-500 mb-4">Connect on social media</p>
              <div className="flex gap-4">
                {["LinkedIn"].map((platform, index) => (
                  <motion.a
                    key={platform}
                    href="https://www.linkedin.com/in/vignesh-venugopal-1b5a02276/"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/50 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 group"
                  >
                    <span className="text-neutral-400 group-hover:text-purple-400 text-sm font-semibold">
                      {platform.slice(0, 2)}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative p-8 border border-white/10 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-800/50 backdrop-blur-sm ">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-lavender/5 rounded-2xl" />

              <form className="relative z-10 space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="field-label mb-2 block">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-neutral-900/50 border border-neutral-700 text-white placeholder-neutral-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="John Doe"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="field-label mb-2 block">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-neutral-900/50 border border-neutral-700 text-white placeholder-neutral-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="john@example.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="field-label mb-2 block">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-neutral-900/50 border border-neutral-700 text-white placeholder-neutral-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full group relative px-6 py-4 bg-gradient-to-r from-purple-500 to-lavender text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {!isLoading ? (
                      <>
                        Send Message
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          →
                        </span>
                      </>
                    ) : (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-lavender to-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </form>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-lavender/10 to-transparent rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;