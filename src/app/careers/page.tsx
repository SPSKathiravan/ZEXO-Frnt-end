'use client';

import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import JobApplicationModal, { Job } from '../Components/JobApplicationModal';

const jobs: Job[] = [
    {
        title: 'Videographer',
        type: 'Full-time',
        location: 'Bangalore, India | Dammam, Saudi Arabia',
        status: 'hired',
        description: 'Plan, shoot, and produce high-quality videos for digital marketing campaigns.',
        longDescription: 'We are looking for a skilled Videographer to capture and produce engaging video content. You will collaborate with our creative team to bring our brand stories to life through visual storytelling.',
        responsibilities: [
            'Plan, shoot, and produce high-quality videos for digital marketing campaigns',
            'Capture video content for social media, websites, advertisements, and brand promotions',
            'Set up and operate cameras, lighting, and audio equipment',
            'Collaborate with marketing, content, and design teams to execute creative concepts',
            'Ensure proper framing, composition, and visual consistency with brand guidelines',
            'Manage raw footage, organize files, and coordinate with video editors',
            'Stay updated with current video trends, formats, and platform requirements'
        ],
        requirements: [
            'Proven experience as a Videographer or in a similar role',
            'Strong knowledge of camera operations, lenses, lighting, and audio recording',
            'Ability to shoot videos optimized for social media platforms (Reels, Shorts, Ads)',
            'Basic understanding of video editing workflows and formats',
            'Creative eye for storytelling, angles, and visual aesthetics',
            'Ability to work on multiple projects and meet deadlines',
            'Willingness to travel for shoots when required'
        ]
    },
    {
        title: 'Video Editor',
        type: 'Full-time',
        location: 'Bangalore, India | Dammam, Saudi Arabia',
        description: 'Edit engaging short & long-form videos for social media, websites, and ads.',
        longDescription: 'We are looking for a creative Video Editor to produce compelling visual content that resonates with our audience. You will play a key role in our marketing and content teams.',
        responsibilities: [
            'Edit short & long-form videos for social media, websites, and ads',
            'Add motion graphics, transitions, subtitles, and sound effects',
            'Optimize videos for Instagram, YouTube, Reels & Ads',
            'Collaborate with marketing and content teams'
        ],
        requirements: [
            'Proficiency in Premiere Pro / After Effects / Final Cut Pro',
            'Strong sense of storytelling and pacing',
            'Experience with social-media-friendly formats'
        ]
    },
    {
        title: 'Content Writer',
        type: 'Full-time',
        location: 'Bangalore, India | Dammam, Saudi Arabia',
        description: 'Create SEO-friendly content for websites, blogs, ad copies, and social media.',
        longDescription: 'We are seeking a talented Content Writer to craft clear and persuasive copy. You will be responsible for maintaining brand voice and driving engagement through words.',
        responsibilities: [
            'Write website content, blogs, ad copies, and social media captions',
            'Create SEO-friendly content for better search visibility',
            'Maintain brand tone and messaging consistency',
            'Research industry trends and topics'
        ],
        requirements: [
            'Excellent English writing skills',
            'Basic knowledge of SEO & keywords',
            'Creative and marketing-oriented mindset'
        ]
    },
    {
        title: 'Software Engineer',
        type: 'Full-time',
        location: 'Bangalore, India | Dammam, Saudi Arabia',
        description: 'Design, develop, and maintain web applications and software solutions.',
        longDescription: 'Join our engineering team to build robust and scalable software solutions. You will work across the full stack to deliver high-quality products.',
        responsibilities: [
            'Design, develop, test, and maintain web applications and software solutions',
            'Work on both frontend and backend development as required',
            'Collaborate with designers, content, and marketing teams to deliver quality products',
            'Integrate APIs, databases, and third-party services',
            'Identify, troubleshoot, and resolve software and system issues',
            'Optimize applications for performance, security, and scalability',
            'Maintain code quality, documentation, and version control',
            'Provide technical support and improvements for existing systems'
        ],
        requirements: [
            'Strong knowledge of HTML, CSS, JavaScript, and modern frameworks (React, Vue, or similar)',
            'Experience with backend technologies (Node.js, PHP, Python, or Java)',
            'Familiarity with databases such as MySQL, PostgreSQL, or MongoDB',
            'Understanding of REST APIs and basic system architecture',
            'Knowledge of Git and version control workflows',
            'Basic understanding of hosting, servers, and deployment processes',
            'Strong problem-solving and analytical skills',
            'Ability to work independently and as part of a team'
        ]
    }
];

const benefits = [
    {
        title: 'Remote First',
        description: 'Work from anywhere in the world. We believe in freedom and responsibility.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: 'Continuous Learning',
        description: 'Annual budget for courses, conferences, and books to keep you growing.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
    },
    {
        title: 'Health & Wellness',
        description: 'Comprehensive health coverage and wellness stipends for your peace of mind.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
    },
];

export default function Careers() {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleApplyClick = (job: Job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
            <Navbar />

            <main className="pt-24 pb-16">
                {/* Hero Section */}
                <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-teal-500/10 rounded-full blur-3xl opacity-30 animate-pulse" />
                        <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl opacity-30" />
                    </div>

                    <div className="relative max-w-7xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
                                Join the <span className="text-teal-500">Revolution</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                We're building the future of digital experiences. Join a team of passionate creators,
                                innovators, and dreamers making an impact.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 dark:bg-black">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid md:grid-cols-3 gap-8"
                        >
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="bg-white dark:bg-white/5 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-white/10"
                                >
                                    <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-500 mb-6">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Jobs Section */}
                <section className="px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-4xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
                        >
                            Open Positions
                        </motion.h2>

                        <div className="space-y-6">
                            {jobs.map((job, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative bg-white dark:bg-white/5 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-white/10 hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-teal-500/10"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-teal-500 transition-colors">
                                                    {job.title}
                                                </h3>
                                                {job.status === 'hired' && (
                                                    <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-teal-500/10 text-teal-500 border border-teal-500/20 rounded-md">
                                                        Selected
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                                <span className="flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                    {job.type}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    {job.location}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                {job.description}
                                            </p>
                                        </div>

                                        <div className="flex-shrink-0">
                                            {job.status === 'hired' ? (
                                                <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400 font-semibold border border-gray-200 dark:border-white/10 cursor-not-allowed">
                                                    Candidate Selected
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() => handleApplyClick(job)}
                                                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-semibold transition-all duration-300 shadow-lg shadow-teal-500/30 group-hover:scale-105"
                                                >
                                                    Apply Now
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-gray-500 dark:text-gray-400">
                                Don't see a perfect fit? {' '}
                                <Link href="/contact" className="text-teal-500 font-medium hover:underline">
                                    Send us your resume
                                </Link>
                                {' '} - we're always looking for talent.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <JobApplicationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                job={selectedJob}
            />

            <Footer />
        </div>
    );
}
