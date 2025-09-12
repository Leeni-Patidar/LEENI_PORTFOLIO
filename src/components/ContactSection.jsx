"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = "service_mkn6ntk";
    const TEMPLATE_ID = "template_dmjk7hr";
    const PUBLIC_KEY = "GMJvkBy0pO9nXJeh4";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY).then(
      () => {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      },
      () => {
        setSuccess("Failed to send message. Try again later.");
        setLoading(false);
      }
    );
  };

  return (
    <section id="contact" className="relative py-20 px-6 bg-[#100425] overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute w-[600px] h-[600px] -top-40 -left-20 rounded-full blur-[180px] bg-[linear-gradient(215deg,#DC00D3_0%,#12B4B4_100%)] opacity-20"></div>
      <div className="absolute w-[500px] h-[500px] bottom-0 right-0 rounded-full blur-[150px] bg-[linear-gradient(215deg,#12B4B4_0%,#DC00D3_100%)] opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold heading mb-4 font-['Josefin_Sans']">
            Contact
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#5dffff] mb-4">
                Drop me a message
              </h3>
              <p className="text-[#d9d9d9] leading-relaxed">
                Feel free to reach out to me for any project inquiries,
                collaborations, or just to say hi!
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-5">
  {/* Phone */}
  <div className="flex items-center space-x-4">
    <a href="tel:+916266061888" className="flex items-center space-x-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] shadow-md">
        <Phone size={20} className="text-white" />
      </div>
      <span className="text-[#fafafa] text-lg">+91 6266061888</span>
    </a>
  </div>

  {/* Email */}
  <div className="flex items-center space-x-4">
    <a href="mailto:leenip04@gmail.com" className="flex items-center space-x-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] shadow-md">
        <Mail size={20} className="text-white" />
      </div>
      <span className="text-[#fafafa] text-lg">leenip04@gmail.com</span>
    </a>
  </div>

  {/* Location */}
  <div className="flex items-center space-x-4">
    <a
      href="https://www.google.com/maps/search/?api=1&query=Indore,Madhya+Pradesh,India"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-4"
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] shadow-md">
        <MapPin size={20} className="text-white" />
      </div>
      <span className="text-[#fafafa] text-lg">Indore, Madhya Pradesh, India</span>
    </a>
  </div>
</div>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="relative bg-[#2C1250]/90 border border-white/10 shadow-lg rounded-2xl p-8 backdrop-blur-lg"
          >
            <div className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#251c31]/80 border border-[#2b215a] text-white placeholder:text-[#979797] px-4 py-3 rounded-lg focus:outline-none focus:border-[#5dffff]"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#251c31]/80 border border-[#2b215a] text-white placeholder:text-[#979797] px-4 py-3 rounded-lg focus:outline-none focus:border-[#5dffff]"
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-[#251c31]/80 border border-[#2b215a] text-white placeholder:text-[#979797] px-4 py-3 rounded-lg focus:outline-none focus:border-[#5dffff] resize-none"
                required
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] text-white font-semibold shadow-lg hover:opacity-90 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-[#5dffff] mt-2 text-center">{success}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
