import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import userData from "@constants/data";
import MagneticButton from "./MagneticButton";

const EXPO_EASE = [0.16, 1, 0.3, 1];

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const { name, email, message } = clientInfo;

  const handleChange = (e) => {
    setClientInfo({
      ...clientInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(userData.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!name || !email || !emailRegex.test(email) || !message) {
      setStatusMessage("ERR // PLEASE COMPLETE ALL FIELDS WITH A VALID EMAIL.");
      return;
    }

    setStatusMessage("TRANSMITTING PAYLOAD...");

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clientInfo),
    })
      .then((res) => {
        if (res.status === 200) {
          setStatusMessage("200 OK // TRANSMISSION RECEIVED SUCCESSFULLY.");
          setClientInfo({
            name: "",
            email: "",
            message: "",
          });
        } else {
          setStatusMessage(
            "NOTICE // USE DIRECT MAIL LINK BELOW FOR IMMEDIATE DELIVERY."
          );
        }
      })
      .catch(() => {
        setStatusMessage(
          "NOTICE // USE DIRECT MAIL LINK BELOW FOR IMMEDIATE DELIVERY."
        );
      });
  };

  return (
    <section className="w-full hairline-b">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Top Metadata Strip */}
        <div className="grid grid-cols-2 md:grid-cols-12 hairline-b py-3 font-mono text-[11px] uppercase tracking-widest text-[#8E8D8A]">
          <div className="col-span-1 md:col-span-4 flex items-center space-x-2">
            <span className="text-[#FF4D1C] font-bold">[04 / CONTACT]</span>
            <span>COMMUNICATION TERMINAL</span>
          </div>
          <div className="hidden md:flex md:col-span-4 items-center">
            <span>DIRECT CHANNEL · CÓRDOBA, ARGENTINA</span>
          </div>
          <div className="col-span-1 md:col-span-4 text-right">
            <span>STATUS: AVAILABLE FOR INQUIRIES</span>
          </div>
        </div>

        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 py-12 md:py-24 gap-12">
          {/* Left Column: Direct Dispatch Details */}
          <div className="lg:col-span-6 lg:hairline-r lg:pr-12 flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-[#FF4D1C] mb-3">
                // INITIATE DIALOGUE
              </p>
              <h1 className="heading-section uppercase mb-6">
                GET IN TOUCH, LET&apos;S TALK.
              </h1>
              <p className="text-base sm:text-lg text-[#8E8D8A] leading-relaxed max-w-xl">
                Whether you have an engineering challenge, backend architecture inquiry, or product opportunity, reach out directly via email, phone, or LinkedIn.
              </p>
            </div>

            {/* Direct Telemetry Cards */}
            <div className="my-12 space-y-4 font-mono text-xs">
              <div className="p-5 hairline-border bg-[#111111]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8E8D8A] block mb-1">
                    ELECTRONIC MAIL
                  </span>
                  <a
                    href={`mailto:${userData.email}`}
                    className="text-sm sm:text-base font-bold hover:text-[#FF4D1C] transition-colors break-all"
                  >
                    {userData.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="hairline-border px-3 py-2 text-[10px] uppercase tracking-widest hover:border-[#FF4D1C] hover:text-[#FF4D1C] transition-colors self-start sm:self-center"
                >
                  {copiedEmail ? "COPIED [✓]" : "COPY ADDRESS"}
                </button>
              </div>

              <div className="p-5 hairline-border bg-[#111111]/40 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8E8D8A] block mb-1">
                    DIRECT PHONE / WHATSAPP
                  </span>
                  <a
                    href={`tel:${userData.phone.replace(/\s+/g, "")}`}
                    className="text-sm sm:text-base font-bold hover:text-[#FF4D1C] transition-colors"
                  >
                    {userData.phone}
                  </a>
                </div>
                <span className="text-[#FF4D1C]">VOICE / MSG</span>
              </div>

              <div className="p-5 hairline-border bg-[#111111]/40 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8E8D8A] block mb-1">
                    LOCATION COORDINATES
                  </span>
                  <span className="text-sm sm:text-base font-bold">
                    {userData.address}
                  </span>
                </div>
                <span className="text-[#8E8D8A]">UTC-3 (ART)</span>
              </div>
            </div>

            {/* Social & CV Bar */}
            <div className="flex flex-wrap gap-3 pt-6 hairline-t">
              <MagneticButton
                href={`mailto:${userData.email}`}
                strength={0.22}
                className="bg-[#FF4D1C] text-[#0A0A0A] font-mono text-xs font-bold uppercase tracking-widest px-6 py-4 hover:bg-[#F4F3EE] transition-colors"
              >
                LAUNCH MAIL CLIENT ↗
              </MagneticButton>
              <MagneticButton
                href={userData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                strength={0.22}
                className="hairline-border font-mono text-xs uppercase tracking-widest px-5 py-4 hover:border-[#FF4D1C] hover:text-[#FF4D1C] transition-colors"
              >
                LINKEDIN ↗
              </MagneticButton>
              <MagneticButton
                href={userData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                strength={0.22}
                className="hairline-border font-mono text-xs uppercase tracking-widest px-5 py-4 hover:border-[#FF4D1C] hover:text-[#FF4D1C] transition-colors"
              >
                GITHUB ↗
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: Architectural Dispatch Form */}
          <div className="lg:col-span-6">
            <motion.form
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EXPO_EASE }}
              onSubmit={handleSubmit}
              className="hairline-border p-6 sm:p-10 bg-[#111111]/30 space-y-6"
            >
              <div className="flex items-center justify-between font-mono text-xs text-[#8E8D8A] pb-4 hairline-b">
                <span>DISPATCH PAYLOAD // FORM.01</span>
                <span className="text-[#FF4D1C]">ENCRYPTED TLS</span>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-xs uppercase tracking-widest text-[#8E8D8A] mb-2"
                >
                  01 / YOUR NAME
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Gabriel Andres"
                  className="w-full bg-transparent hairline-border px-4 py-3.5 font-mono text-sm focus:outline-none focus:border-[#FF4D1C] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-xs uppercase tracking-widest text-[#8E8D8A] mb-2"
                >
                  02 / RETURN EMAIL ADDRESS
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full bg-transparent hairline-border px-4 py-3.5 font-mono text-sm focus:outline-none focus:border-[#FF4D1C] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-xs uppercase tracking-widest text-[#8E8D8A] mb-2"
                >
                  03 / TECHNICAL BRIEF OR INQUIRY
                </label>
                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  value={message}
                  onChange={handleChange}
                  placeholder="Project architecture, timeline, or collaboration details..."
                  className="w-full bg-transparent hairline-border px-4 py-3.5 font-mono text-sm focus:outline-none focus:border-[#FF4D1C] transition-colors"
                />
              </div>

              {statusMessage && (
                <div className="p-3 hairline-border font-mono text-xs text-[#FF4D1C]">
                  {statusMessage}
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  className="bg-[#FF4D1C] text-[#0A0A0A] font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#F4F3EE] transition-colors focus:outline-none"
                >
                  TRANSMIT MESSAGE →
                </button>
                <span className="font-mono text-[11px] text-[#8E8D8A]">
                  OR EMAIL DIRECTLY AT{" "}
                  <a
                    href={`mailto:${userData.email}`}
                    className="underline hover:text-[#FF4D1C]"
                  >
                    {userData.email}
                  </a>
                </span>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
