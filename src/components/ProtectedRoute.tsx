'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

interface AdminUser {
  username: string;
  name: string;
}

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      const token = Cookies.get('admin_token');
      
      if (!token) {
        router.push('/admin');
        return;
      }

      try {
        const response = await fetch('/api/admin/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          Cookies.remove('admin_token');
          router.push('/admin');
        }
      } catch (error) {
        console.error('Verification error:', error);
        router.push('/admin');
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-white text-xl">Verifying authentication...</div>
      </div>
    );
  }

  return isAuthenticated ? <>{children}</> : null;
}
