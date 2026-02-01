'use client';

import { useEffect, useState } from 'react';
import { IJobApplication } from '@/lib/models/JobApplication';

export default function CareerEnquiries() {
    const [applications, setApplications] = useState<IJobApplication[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            const response = await fetch('/api/career');
            if (response.ok) {
                const data = await response.json();
                setApplications(data);
            }
        } catch (error) {
            console.error('Error fetching applications:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Career Enquiries</h2>
                <span className="bg-teal-100 text-teal-800 text-sm font-medium px-4 py-1.5 rounded-full">
                    {applications.length} Applications
                </span>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 dark:bg-slate-900/50">
                            <tr>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Candidate</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Position</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Contact</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Resume</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Links</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-slate-700">
                            {applications.map((app) => (
                                <tr key={app._id as unknown as string} className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900 dark:text-white">{app.name}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                            {app.jobTitle}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-600 dark:text-gray-300">{app.email}</div>
                                        <div className="text-xs text-gray-500">{app.phone}</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                        {new Date(app.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4">
                                        {app.resumeData ? (
                                            <div className="flex space-x-2">
                                                <a
                                                    href={app.resumeData}
                                                    download={app.resumeName || 'resume'}
                                                    className="text-white bg-teal-500 hover:bg-teal-600 px-3 py-1 rounded text-xs font-medium transition-colors"
                                                >
                                                    Download
                                                </a>
                                                <button
                                                    onClick={() => {
                                                        const win = window.open();
                                                        if (win) {
                                                            win.document.write(
                                                                `<iframe src="${app.resumeData}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`
                                                            );
                                                        }
                                                    }}
                                                    className="text-teal-600 bg-teal-100 hover:bg-teal-200 dark:bg-teal-900/30 dark:text-teal-300 dark:hover:bg-teal-900/50 px-3 py-1 rounded text-xs font-medium transition-colors"
                                                >
                                                    View
                                                </button>
                                            </div>
                                        ) : (
                                            <span className="text-gray-400 text-xs">No Resume</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        {app.portfolio && (
                                            <a
                                                href={app.portfolio}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-teal-500 hover:text-teal-600 font-medium text-sm"
                                            >
                                                Portfolio
                                            </a>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            {applications.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                                        No applications received yet.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
