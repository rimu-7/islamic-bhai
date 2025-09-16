import mongoose from "mongoose";

const bkashTokenSchema = new mongoose.Schema(
  {
    auth_token: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.BkashToken ||
  mongoose.model("BkashToken", bkashTokenSchema);
