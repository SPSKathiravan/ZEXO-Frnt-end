import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import JobApplication from '@/lib/models/JobApplication';

export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();
        const { name, email, phone, portfolio, coverLetter, jobTitle, resumeData, resumeName, resumeType } = body;

        console.log('Received application for:', name);
        console.log('Resume Data Length:', resumeData?.length || 0);

        // Basic validation
        if (!name || !email || !phone || !jobTitle) {
            return NextResponse.json(
                { error: 'Name, email, phone, and job title are required' },
                { status: 400 }
            );
        }

        const application = await JobApplication.create({
            name,
            email,
            phone,
            portfolio,
            coverLetter,
            jobTitle,
            resumeData,
            resumeName,
            resumeType,
        });

        return NextResponse.json(
            { message: 'Application submitted successfully', application },
            { status: 201 }
        );
    } catch (error) {
        console.error('Job Application Error:', error);
        return NextResponse.json(
            { error: 'Failed to submit application' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await connectDB();
        const applications = await JobApplication.find().sort({ createdAt: -1 });
        return NextResponse.json(applications);
    } catch (error) {
        console.error('Fetch Applications Error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch applications' },
            { status: 500 }
        );
    }
}
