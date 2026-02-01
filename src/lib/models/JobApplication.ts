import mongoose, { Document, Schema } from 'mongoose';

export interface IJobApplication extends Document {
    name: string;
    email: string;
    phone?: string;
    portfolio?: string;
    coverLetter?: string;
    resumeData?: string;
    resumeName?: string;
    resumeType?: string;
    jobTitle: string;
    createdAt: Date;
    updatedAt: Date;
}

const JobApplicationSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    portfolio: {
        type: String,
        trim: true,
    },
    coverLetter: {
        type: String,
        trim: true,
    },
    resumeData: {
        type: String,
    },
    resumeName: {
        type: String,
        trim: true,
    },
    resumeType: {
        type: String,
        trim: true,
    },
    jobTitle: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true,
});

// Prevent re-compilation of model in development
if (mongoose.models.JobApplication) {
    delete mongoose.models.JobApplication;
}

const JobApplication = mongoose.models.JobApplication || mongoose.model<IJobApplication>('JobApplication', JobApplicationSchema);

export default JobApplication;
