import mongoose from "mongoose";

const confessionSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Confession = mongoose.model("Confession", confessionSchema);

export default Confession;
