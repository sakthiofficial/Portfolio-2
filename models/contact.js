import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    feedback: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.ContactModel ||
  mongoose.model("ContactModel", ContactSchema);
