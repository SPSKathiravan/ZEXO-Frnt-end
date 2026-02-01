'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { SERVICES } from '@/lib/services';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black relative overflow-hidden transition-colors duration-300">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#08b48d]/10 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#08b48d]/10 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              ZEXO<span className="bg-gradient-to-r from-[#08b48d] to-[#00d4aa] bg-clip-text text-transparent"> Agency</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              We create innovative digital solutions that drive growth and transform businesses.
              From web development to AI integration, we bring your vision to life.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/zexoagency?igsh=bm4yb2ZjYmNrenB6" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>

              <a href="https://www.instagram.com/zexoagency?igsh=bm4yb2ZjYmNrenB6" className="text-gray-500 dark:text-gray-400 hover:text-pink-500 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/zexo-agency/" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-[#08b48d] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-[#08b48d] transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-[#08b48d] transition-colors duration-300">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-[#08b48d] transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Services</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link href={`/services`} className="text-gray-600 dark:text-gray-400 hover:text-[#08b48d] transition-colors duration-300">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-300 dark:border-gray-800 pt-8 mb-8 transition-colors duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-[#08b48d]" />
              <div>
                <p className="text-gray-900 dark:text-white font-medium transition-colors duration-300">Email</p>
                <a
                  href="mailto:info@zexoagency.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#08b48d] transition-colors duration-300"
                >
                  info@zexoagency.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-[#08b48d]" />
              <div>
                <p className="text-gray-900 dark:text-white font-medium transition-colors duration-300">Phone</p>
                <a
                  href="tel:+91 63857 00657"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#08b48d] transition-colors duration-300"
                >
                  +91 63857 00657
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-[#08b48d]" />
              <div>
                <p className="text-gray-900 dark:text-white font-medium transition-colors duration-300">Location</p>
                <a
                  href="https://share.google/hxkmQUoVFZ5jMiQfP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#08b48d] transition-colors duration-300"
                >
                  2nd Floor, GM Narayana Reddy Layout, Konappana Agrahara, Electronic City, Bangalore-560100
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 dark:border-gray-800 pt-8 transition-colors duration-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0 transition-colors duration-300">
              © 2025 ZEXOAgency. All rights reserved.
            </p>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;