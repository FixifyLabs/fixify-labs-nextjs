'use client'
import React, { useState } from "react";
import { AboutUsSection } from "./AboutUsSection/AboutUsSection";
import { AvailablePackagesSection } from "./AvailablePackagesSection/AvailablePackageSection";
import { FooterSection } from "./FooterSection/FooterSection";
import { HeaderSection } from "./HeaderSection/HeaderSection";
import { HeroSection } from "./HeroSection/HeroSection";
import { PackagesOverviewSection } from "./PackagesOverviewSection/PackagesOverviewSection";
import { PricingSection } from "./PricingSection/PricingSection";
import { ServicesExplainerSection } from "./ServicesExplainerSection/ServicesExplainerSection";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative self-stretch w-full h-[821px] bg-gradient-to-br from-[#fe319c] via-[#e4faff] to-[#f4336c] flex items-center justify-center">
      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 max-w-md w-full mx-4 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          Contact Us Today
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Have questions? Need a custom quote? Let&apos;s connect!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
              placeholder="Tell us about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export const Desktop = () => {
  return (
    <div className="flex flex-col items-start relative bg-[linear-gradient(156deg,rgba(254,49,156,1)_0%,rgba(238,172,216,1)_22%,rgba(228,250,255,1)_53%,rgba(244,51,108,1)_98%),linear-gradient(0deg,rgba(223,226,245,1)_0%,rgba(223,226,245,1)_100%)]">
      <HeaderSection />
      <HeroSection />
      <ServicesExplainerSection />
      <PricingSection />
      <ContactFormSection />
      <AvailablePackagesSection />
      <AboutUsSection />
      <PackagesOverviewSection />
      <FooterSection />
    </div>
  );
};
