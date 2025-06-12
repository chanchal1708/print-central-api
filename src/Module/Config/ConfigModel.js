import mongoose from "mongoose";
const { Schema } = mongoose;

const ConfigSchema = new Schema(
  {
    printer: {
      type: String,
      required: true,
    },
    printerHead: {
      type: Number,
      required: true,
    },
    printerSoftware: {
      type: String,
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

const config = mongoose.model("config", ConfigSchema, "coll_config");
export { config };
