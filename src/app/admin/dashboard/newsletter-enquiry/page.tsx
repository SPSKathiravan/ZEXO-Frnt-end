'use client';

import { useState } from 'react';

interface NewsletterSubscriber {
  id: number;
  email: string;
  name?: string;
  subscribedDate: string;
  status: 'active' | 'unsubscribed' | 'bounced';
  source: string;
}

// Demo data
const demoSubscribers: NewsletterSubscriber[] = [
  {
    id: 1,
    email: 'alice.smith@email.com',
    name: 'Alice Smith',
    subscribedDate: '2025-12-28T08:15:00',
    status: 'active',
    source: 'Website Footer',
  },
  {
    id: 2,
    email: 'bob.johnson@company.com',
    name: 'Bob Johnson',
    subscribedDate: '2025-12-27T12:30:00',
    status: 'active',
    source: 'Landing Page',
  },
  {
    id: 3,
    email: 'carol.williams@startup.io',
    subscribedDate: '2025-12-26T16:45:00',
    status: 'active',
    source: 'Blog Post',
  },
  {
    id: 4,
    email: 'david.brown@tech.com',
    name: 'David Brown',
    subscribedDate: '2025-12-25T10:20:00',
    status: 'unsubscribed',
    source: 'Website Footer',
  },
  {
    id: 5,
    email: 'emma.davis@email.com',
    name: 'Emma Davis',
    subscribedDate: '2025-12-24T14:00:00',
    status: 'active',
    source: 'Landing Page',
  },
  {
    id: 6,
    email: 'frank.miller@example.com',
    subscribedDate: '2025-12-23T09:30:00',
    status: 'bounced',
    source: 'Contact Form',
  },
  {
    id: 7,
    email: 'grace.wilson@business.com',
    name: 'Grace Wilson',
    subscribedDate: '2025-12-22T11:15:00',
    status: 'active',
    source: 'Website Footer',
  },
  {
    id: 8,
    email: 'henry.moore@agency.com',
    name: 'Henry Moore',
    subscribedDate: '2025-12-21T15:45:00',
    status: 'active',
    source: 'Landing Page',
  },
];

export default function NewsletterEnquiryPage() {
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>(demoSubscribers);
  const [selectedSubscriber, setSelectedSubscriber] = useState<NewsletterSubscriber | null>(null);
  const [filter, setFilter] = useState<'all' | 'active' | 'unsubscribed' | 'bounced'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSubscribers = subscribers.filter((subscriber) => {
    const matchesFilter = filter === 'all' || subscriber.status === filter;
    const matchesSearch =
      subscriber.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subscriber.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      false;
    return matchesFilter && matchesSearch;
  });

  const stats = {
    total: subscribers.length,
    active: subscribers.filter((s) => s.status === 'active').length,
    unsubscribed: subscribers.filter((s) => s.status === 'unsubscribed').length,
    bounced: subscribers.filter((s) => s.status === 'bounced').length,
  };

  const updateStatus = (id: number, status: 'active' | 'unsubscribed' | 'bounced') => {
    setSubscribers(
      subscribers.map((s) => (s.id === id ? { ...s, status } : s))
    );
    if (selectedSubscriber?.id === id) {
      setSelectedSubscriber({ ...selectedSubscriber, status });
    }
  };

  const deleteSubscriber = (id: number) => {
    if (confirm('Are you sure you want to delete this subscriber?')) {
      setSubscribers(subscribers.filter((s) => s.id !== id));
      if (selectedSubscriber?.id === id) {
        setSelectedSubscriber(null);
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'unsubscribed':
        return 'bg-red-100 text-red-800';
      case 'bounced':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Email', 'Name', 'Subscribed Date', 'Status', 'Source'];
    const rows = filteredSubscribers.map((s) => [
      s.id,
      s.email,
      s.name || 'N/A',
      new Date(s.subscribedDate).toLocaleString(),
      s.status,
      s.source,
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `newsletter-subscribers-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Newsletter Subscribers</h1>
          <p className="text-slate-600 mt-1">Manage newsletter subscriptions</p>
        </div>
        <button
          onClick={exportToCSV}
          className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Export CSV</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Total Subscribers</p>
              <p className="text-2xl font-bold text-slate-800 mt-1">{stats.total}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Active</p>
              <p className="text-2xl font-bold text-green-600 mt-1">{stats.active}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Unsubscribed</p>
              <p className="text-2xl font-bold text-red-600 mt-1">{stats.unsubscribed}</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Bounced</p>
              <p className="text-2xl font-bold text-orange-600 mt-1">{stats.bounced}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow border border-slate-200 p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex space-x-2">
            {(['all', 'active', 'unsubscribed', 'bounced'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filter === status
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search subscribers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <svg
              className="w-5 h-5 text-slate-400 absolute left-3 top-2.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Subscribers Table */}
      <div className="bg-white rounded-lg shadow border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Source</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Subscribed</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredSubscribers.map((subscriber) => (
                <tr key={subscriber.id} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 text-sm font-medium text-slate-800">{subscriber.email}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{subscriber.name || 'N/A'}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{subscriber.source}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {new Date(subscriber.subscribedDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(subscriber.status)}`}>
                      {subscriber.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedSubscriber(subscriber)}
                        className="text-purple-600 hover:text-purple-800 font-medium text-sm"
                      >
                        View
                      </button>
                      <button
                        onClick={() => deleteSubscriber(subscriber.id)}
                        className="text-red-600 hover:text-red-800 font-medium text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Details Modal */}
      {selectedSubscriber && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full">
            <div className="border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-800">Subscriber Details</h2>
              <button
                onClick={() => setSelectedSubscriber(null)}
                className="text-slate-400 hover:text-slate-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm font-semibold text-slate-600">Email</label>
                <p className="text-slate-800 mt-1">{selectedSubscriber.email}</p>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-600">Name</label>
                <p className="text-slate-800 mt-1">{selectedSubscriber.name || 'Not provided'}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-slate-600">Source</label>
                  <p className="text-slate-800 mt-1">{selectedSubscriber.source}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-600">Subscribed Date</label>
                  <p className="text-slate-800 mt-1">
                    {new Date(selectedSubscriber.subscribedDate).toLocaleString()}
                  </p>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-600 block mb-2">Status</label>
                <div className="flex space-x-2">
                  {(['active', 'unsubscribed', 'bounced'] as const).map((status) => (
                    <button
                      key={status}
                      onClick={() => updateStatus(selectedSubscriber.id, status)}
                      className={`px-4 py-2 rounded-lg font-medium transition ${
                        selectedSubscriber.status === status
                          ? 'bg-purple-600 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={() => deleteSubscriber(selectedSubscriber.id)}
                  className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Delete Subscriber
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
