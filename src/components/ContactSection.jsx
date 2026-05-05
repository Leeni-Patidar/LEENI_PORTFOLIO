"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Linkedin, Github, CheckCircle } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
        toast.success("Message sent successfully! I'll get back to you soon.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setLoading(false);
      },
      () => {
        toast.error("Failed to send message. Please try again later.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setLoading(false);
      }
    );
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-16 text-white lg:py-20">
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-[#5dffff]/10 blur-3xl" />
      <div className="absolute right-0 bottom-24 h-72 w-72 rounded-full bg-[#ae0ca7]/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <div className="section-label mx-auto">Let’s work together</div>
          <div className="section-heading mx-auto mt-4 max-w-3xl text-white">
            <h2>Get In Touch</h2>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.85fr_1fr]">
          <div className="glass-card rounded-[28px] border border-white/10 bg-[#0b0615]/90 p-6 shadow-2xl backdrop-blur-xl">
            
            <h3 className="mt-3 text-2xl font-semibold text-white">Ready to work on your next project?</h3>
            <p className="mt-3 text-base leading-7 text-[#cfcfe8]">
              I’m available for freelance and full-time work. Send a message and I’ll get back to you shortly.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-[#090512]/90 p-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5dffff] to-[#ae0ca7] text-black">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#9e9ef6]">Email</p>
                  <p className="text-base font-medium text-white">leenip04@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-[#090512]/90 p-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5dffff] to-[#ae0ca7] text-black">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#9e9ef6]">LinkedIn</p>
                  <p className="text-base font-medium text-white">linkedin.com/in/shinekyawkyawaung</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-[#090512]/90 p-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5dffff] to-[#ae0ca7] text-black">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#9e9ef6]">GitHub</p>
                  <p className="text-base font-medium text-white">github.com/shinekyw</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-[#090512]/90 p-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5dffff] to-[#ae0ca7] text-black">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#9e9ef6]">Current Status</p>
                  <p className="text-base font-medium text-white">Available for freelance work and full-time opportunities</p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-[28px] border border-white/10 bg-[#0b0615]/90 p-6 shadow-2xl backdrop-blur-xl sm:p-7"
          >
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-3xl border border-white/10 bg-[#100518]/90 px-5 py-3 text-white placeholder:text-[#8f8fb3] focus:border-[#5dffff] focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-3xl border border-white/10 bg-[#100518]/90 px-5 py-3 text-white placeholder:text-[#8f8fb3] focus:border-[#5dffff] focus:outline-none"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-3xl border border-white/10 bg-[#100518]/90 px-5 py-3 text-white placeholder:text-[#8f8fb3] focus:border-[#5dffff] focus:outline-none"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-3xl border border-white/10 bg-[#100518]/90 px-5 py-3 text-white placeholder:text-[#8f8fb3] focus:border-[#5dffff] focus:outline-none resize-none"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-gradient-to-r from-[#5dffff] to-[#ae0ca7] px-6 py-3 text-base font-semibold text-black transition hover:opacity-95"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {success && <p className="text-center text-[#5dffff]">{success}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
