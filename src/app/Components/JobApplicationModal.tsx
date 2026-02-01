'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Send } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

export interface Job {
    title: string;
    type: string;
    location: string;
    description: string;
    longDescription?: string;
    responsibilities?: string[];
    requirements?: string[];
    status?: 'open' | 'closed' | 'hired';
}

interface JobApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    job: Job | null;
}

export default function JobApplicationModal({ isOpen, onClose, job }: JobApplicationModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        portfolio: '',
        coverLetter: '',
    });
    const [resume, setResume] = useState<{
        data: string;
        name: string;
        type: string;
    } | null>(null);

    const fileInputRef = React.useRef<HTMLInputElement>(null);

    if (!job) return null;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) { // 2MB limit
                alert('File is too large. Max size is 2MB.');
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setResume({
                    data: base64String,
                    name: file.name,
                    type: file.type
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/career', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    jobTitle: job.title,
                    resumeData: resume?.data,
                    resumeName: resume?.name,
                    resumeType: resume?.type,
                }),
            });

            if (response.ok) {
                alert('Application submitted successfully!');
                onClose();
                setFormData({ name: '', email: '', phone: '', portfolio: '', coverLetter: '' });
                setResume(null);
            } else {
                const error = await response.json();
                alert(error.error || 'Something went wrong');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Failed to submit application');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
                    onClick={handleBackdropClick}
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-200 dark:border-slate-700"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{job.title}</h2>
                                <div className="flex gap-3 text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    <span>{job.type}</span>
                                    <span>•</span>
                                    <span>{job.location}</span>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-gray-500 dark:text-gray-400"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Scrollable Body */}
                        <div className="overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar">

                            {/* Job Details Section */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-teal-500 mb-3 uppercase tracking-wider text-sm">Role Overview</h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {job.longDescription || job.description}
                                    </p>
                                </div>

                                {job.responsibilities && (
                                    <div>
                                        <h3 className="text-lg font-bold text-teal-500 mb-3 uppercase tracking-wider text-sm">Key Responsibilities</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                                            {job.responsibilities.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {job.requirements && (
                                    <div>
                                        <h3 className="text-lg font-bold text-teal-500 mb-3 uppercase tracking-wider text-sm">Requirements</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                                            {job.requirements.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="border-t border-gray-100 dark:border-slate-800 my-8" />

                            {/* Application Form Section */}
                            <div className="bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-6 md:p-8">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Apply for this position</h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                                            <input
                                                id="name"
                                                type="text"
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                                            <input
                                                id="email"
                                                type="email"
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                                            <input
                                                id="phone"
                                                type="tel"
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                                                placeholder="+1 (555) 000-0000"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="portfolio" className="text-sm font-medium text-gray-700 dark:text-gray-300">Portfolio / LinkedIn</label>
                                            <input
                                                id="portfolio"
                                                type="url"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                                                placeholder="https://..."
                                                value={formData.portfolio}
                                                onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="resume" className="text-sm font-medium text-gray-700 dark:text-gray-300">Resume/CV</label>
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            onChange={handleFileChange}
                                            accept=".pdf,.doc,.docx"
                                            className="hidden"
                                        />
                                        <div
                                            onClick={() => fileInputRef.current?.click()}
                                            className={`border-2 border-dashed ${resume ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20' : 'border-gray-200 dark:border-slate-700'} rounded-xl p-8 text-center hover:border-teal-500/50 transition-colors cursor-pointer bg-white dark:bg-slate-900`}
                                        >
                                            <Upload className={`w-8 h-8 ${resume ? 'text-teal-500' : 'text-gray-400'} mx-auto mb-3`} />
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {resume ? (
                                                    <span className="text-teal-600 dark:text-teal-400 font-semibold">{resume.name}</span>
                                                ) : (
                                                    <>
                                                        <span className="text-teal-500 font-medium">Click to upload</span> or drag and drop
                                                    </>
                                                )}
                                            </p>
                                            <p className="text-xs text-gray-400 mt-1">PDF, DOCX up to 2MB</p>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="coverLetter" className="text-sm font-medium text-gray-700 dark:text-gray-300">Cover Letter</label>
                                        <textarea
                                            id="coverLetter"
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none resize-none"
                                            placeholder="Tell us why you're a great fit..."
                                            value={formData.coverLetter}
                                            onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-teal-500 hover:bg-teal-600 disabled:bg-teal-500/50 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-teal-500/30 flex items-center justify-center gap-2"
                                    >
                                        <span>{isSubmitting ? 'Sending...' : 'Submit Application'}</span>
                                        {!isSubmitting && <Send className="w-5 h-5" />}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
