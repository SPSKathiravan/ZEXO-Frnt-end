'use client';

import '../admin.css';

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-2xl p-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Welcome back, ZEXO! 👋</h1>
          <p className="text-purple-100">Here's what's happening with your dashboard today.</p>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Total Contact Enquiries</p>
              <p className="text-3xl font-bold text-slate-800 dark:text-white">5</p>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1 font-medium">↑ 2 new today</p>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Newsletter Subscribers</p>
              <p className="text-3xl font-bold text-slate-800 dark:text-white">8</p>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1 font-medium">↑ 3 new this week</p>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Response Rate</p>
              <p className="text-3xl font-bold text-slate-800 dark:text-white">85%</p>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1 font-medium">↑ 5% from last month</p>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">Recent Activity</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-4 pb-4 border-b border-slate-100 dark:border-slate-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
              <div className="flex-1">
                <p className="text-sm text-slate-800 dark:text-slate-200 font-medium">New contact enquiry from John Doe</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 pb-4 border-b border-slate-100 dark:border-slate-700">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 animate-pulse"></div>
              <div className="flex-1">
                <p className="text-sm text-slate-800 dark:text-slate-200 font-medium">New newsletter subscriber: alice.smith@email.com</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 pb-4 border-b border-slate-100 dark:border-slate-700">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 animate-pulse"></div>
              <div className="flex-1">
                <p className="text-sm text-slate-800 dark:text-slate-200 font-medium">Replied to Sarah Johnson's enquiry</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">1 day ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm text-slate-800 dark:text-slate-200 font-medium">New newsletter subscriber: bob.johnson@company.com</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="/admin/dashboard/contact-enquiry"
            className="flex items-center space-x-3 p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-blue-500/30">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-800 dark:text-white">View Contact Enquiries</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Manage customer contacts</p>
            </div>
          </a>

          <a
            href="/admin/dashboard/newsletter-enquiry"
            className="flex items-center space-x-3 p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-purple-500/30">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-800 dark:text-white">Newsletter Subscribers</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Manage subscriptions</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
