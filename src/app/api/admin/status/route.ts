import { NextResponse } from 'next/server';

export async function GET() {
  // Simulate server and database connection check
  const serverStatus = {
    server: 'connected',
    database: Math.random() > 0.1 ? 'connected' : 'disconnected', // Simulate occasional disconnection
    lastChecked: new Date().toISOString(),
  };

  return NextResponse.json(serverStatus);
}
