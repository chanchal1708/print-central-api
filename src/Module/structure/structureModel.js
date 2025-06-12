import mongoose from "mongoose";
const { Schema } = mongoose;

const structureSchema = new Schema(
  {
    industry: {
      type: String,
      required: true,
    },
    feilds: {
      type: Array,
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

const structure = mongoose.model(
  "structure",
  structureSchema,
  "coll_structure"
);
export { structure };
