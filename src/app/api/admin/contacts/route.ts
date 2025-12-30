import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Contact from '@/lib/models/Contact';
import { verifyToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    const user = verifyToken(token);

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    await dbConnect();

    const contacts = await Contact.find({})
      .sort({ createdAt: -1 })
      .lean();

    // Transform the data to match the expected format
    const formattedContacts = contacts.map((contact, index) => ({
      id: contact._id.toString(),
      name: contact.name,
      email: contact.email,
      phone: contact.phone || '',
      subject: contact.subject,
      message: contact.message,
      date: contact.createdAt.toISOString(),
      status: 'new' as const, // For now, all are new
    }));

    return NextResponse.json(formattedContacts);
  } catch (error) {
    console.error('Fetch contacts error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}