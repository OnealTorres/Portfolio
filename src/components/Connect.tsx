import { motion } from "motion/react";
import { slideUpVariant } from "../variants/slideUpVariant";
import { slideRightVariant } from "../variants/slideRIghtVariant";
import { useState } from "react";

function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="connect" className="flex h-dvh pt-20 w-full flex-col items-center justify-center ">
      <motion.div
        className="flex flex-col items-center w-full"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        variants={slideRightVariant}
      >
        <p className="text-md"> Got a brilliant idea?</p>
        <p className="text-4xl text-blue-500">Let's Make It Real!</p>
      </motion.div>
      <motion.div
        className="mt-10 w-full"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        variants={slideUpVariant}
      >
        <div className="flex flex-row justify-center">
          <div className="flex w-full max-w-[500px] bg-white rounded-xl shadow-lg p-10 mx-3 md:mx-0">
            <form onSubmit={handleSubmit} className="space-y-5 w-full">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="What would you like to discuss?"
                ></textarea>
              </div>

              <button
                disabled
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Connect;
