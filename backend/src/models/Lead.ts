import mongoose, { Document, Schema } from 'mongoose';

export interface Lead extends Document {
  estateType: string;
  fullname: string;
  phone: string;
  email: string;
  region: string;
  district: string;
  createdAt: Date;
}

const LeadSchema = new Schema<Lead>({
  estateType: { type: String, required: true },
  fullname: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  region: { type: String, required: true },
  district: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<Lead>('Lead', LeadSchema);

