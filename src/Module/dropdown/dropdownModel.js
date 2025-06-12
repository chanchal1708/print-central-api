import mongoose from "mongoose";
const { Schema } = mongoose;

const dropdownSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    flag: {
      type: Number,
      required: true,
    },
    sequence: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const dropdown = mongoose.model("dropdown", dropdownSchema, "coll_dropdown");
export { dropdown };
