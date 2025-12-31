'use client';

import { Users, Target, Award, Heart } from 'lucide-react';

export default function Aboutus() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-[#08b48d]" />,
      title: "Innovation First",
      description: "We stay ahead of the curve with cutting-edge technologies and creative solutions that drive results."
    },
    {
      icon: <Users className="w-8 h-8 text-[#08b48d]" />,
      title: "Client-Centric",
      description: "Your success is our priority. We work closely with you to understand your vision and deliver exceptional results."
    },
    {
      icon: <Award className="w-8 h-8 text-[#08b48d]" />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in every project, ensuring pixel-perfect designs and robust development."
    },
    {
      icon: <Heart className="w-8 h-8 text-[#08b48d]" />,
      title: "Passionate Team",
      description: "Our dedicated team of experts brings passion and expertise to every project we undertake."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-black text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Background gradient effects */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-linear-to-bl from-[#08b48d]/20 via-purple-600/10 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-linear-to-tr from-[#08b48d]/15 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#08b48d]/15 rounded-full px-4 py-2 border border-[#08b48d]/50 mb-6 backdrop-blur-sm">
            <Users className="w-4 h-4 text-[#08b48d]" />
            <span className="text-sm font-medium text-[#08b48d]">About ZEXO Agency</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Crafting Digital
            <span className="block bg-linear-to-r from-[#08b48d] to-[#00d4aa] bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're a passionate team of digital innovators dedicated to transforming businesses through
            exceptional design, cutting-edge development, and strategic thinking. Since our founding,
            we've helped over 40 companies achieve their digital goals.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Our Story</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Founded in 2019, ZEXO Agency emerged from a simple belief: every business deserves
              a digital presence that truly represents its potential. What started as a small team
              of designers and developers has grown into a full-service digital agency.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              We combine creativity with technical expertise to deliver solutions that not only
              look beautiful but also drive real business results. Our approach is collaborative,
              transparent, and always focused on exceeding expectations.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-300 dark:border-[#08b48d]/30">
                <p className="text-2xl font-bold text-[#08b48d]">5+</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Years Experience</p>
              </div>
              <div className="bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-300 dark:border-[#08b48d]/30">
                <p className="text-2xl font-bold text-[#08b48d]">50+</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</p>
              </div>
              <div className="bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-300 dark:border-[#08b48d]/30">
                <p className="text-2xl font-bold text-[#08b48d]">40+</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-[#08b48d]/15 to-[#08b48d]/5 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#08b48d] rounded-full flex items-center justify-center">
                    <span className="text-gray-900 dark:text-black font-bold transition-colors duration-300">Z</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">Mission</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm transition-colors duration-300">To empower businesses with digital solutions that drive growth</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#08b48d] rounded-full flex items-center justify-center">
                    <span className="text-gray-900 dark:text-black font-bold transition-colors duration-300">V</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">Vision</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm transition-colors duration-300">To be the leading digital agency for innovative businesses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-300 dark:border-white/10 hover:border-[#08b48d]/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#08b48d]/20 group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-[#08b48d] transition-colors duration-300">
                {value.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
