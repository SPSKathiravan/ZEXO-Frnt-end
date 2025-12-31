"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
}

interface OverlayCopyProps {
  subheading: string;
  heading: string;
}

interface StickyImageProps {
  imgUrl: string;
}

const TextParallaxContentExample = () => {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-300">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Zexo Agency"
        heading="Website Development"
      >
        <WebDevelopmentContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Zexo Agency"
        heading="SEO Optimization"
      >
        <SEOOptimizationContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1611532736579-6b16e2b50449?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Zexo Agency"
        heading="Social Media Management"
      >
        <SocialMediaContent />
      </TextParallaxContent>
    </div>
  );
};

export default TextParallaxContentExample;

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }: TextParallaxContentProps) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: StickyImageProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70 dark:bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }: OverlayCopyProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl text-white">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl text-white">{heading}</p>
    </motion.div>
  );
};

const WebDevelopmentContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 bg-gray-50 dark:bg-black transition-colors duration-300">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-gray-900 dark:text-white">
      Professional Web Solutions
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-gray-600 dark:text-gray-300 md:text-2xl">
        We create stunning, responsive websites that are built to convert. Our development team uses the latest technologies and best practices to deliver fast-loading, secure, and user-friendly websites that represent your brand perfectly.
      </p>
      <p className="mb-8 text-xl text-gray-600 dark:text-gray-300 md:text-2xl transition-colors duration-300">
        From custom website design to full-scale web applications, we ensure every project is optimized for performance and user experience across all devices.
      </p>
    </div>
  </div>
);

const SEOOptimizationContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 bg-gray-50 dark:bg-black transition-colors duration-300">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-gray-900 dark:text-white">
      SEO Excellence
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-gray-600 dark:text-gray-300 md:text-2xl">
        Boost your online visibility with our comprehensive SEO strategies. We conduct in-depth keyword research, optimize your website structure, and implement proven tactics to help you rank higher on search engines and drive organic traffic to your business.
      </p>
      <p className="mb-8 text-xl text-gray-600 dark:text-gray-300 md:text-2xl transition-colors duration-300">
        Our data-driven approach ensures sustainable results, increasing your website's authority and bringing qualified leads directly to your doorstep.
      </p>
    </div>
  </div>
);

const SocialMediaContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 bg-gray-50 dark:bg-black transition-colors duration-300">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-gray-900 dark:text-white">
      Social Media Mastery
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-gray-600 dark:text-gray-300 md:text-2xl">
        Engage your audience and grow your brand presence across all social media platforms. We create compelling content, manage your community, and develop strategic campaigns that turn followers into loyal customers.
      </p>
      <p className="mb-8 text-xl text-gray-600 dark:text-gray-300 md:text-2xl transition-colors duration-300">
        From content creation to community management and analytics tracking, we handle every aspect of your social media presence to maximize engagement and ROI.
      </p>
    </div>
  </div>
);