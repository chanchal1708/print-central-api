import mongoose from "mongoose";
const { Schema } = mongoose;

const productdetailsSchema = new Schema(
  {
    materialProduct: {
      type: String,
    },
    productName: {
      type: String,
    },
    materialThickness: {
      type: String,
    },
    materialGroup: {
      type: String,
    },
    materialGrade: {
      type: String,
    },
    materialDesignCode: {
      type: String,
    },

    materialFinishCode: {
      type: String,
    },
    materialPanelCode: {
      type: String,
    },
    LippingCode: {
      type: String,
    },
    materialCode: {
      type: String,
    },
    uOM: {
      type: String,
    },
    batchNumber: {
      type: String,
    },
    mrp: {
      type: Number,
    },
    websiteAddress: {
      type: String,
    },
    productionBatchNumber: {
      type: String,
    },
    date: {
      type: Date,
    },
    time: {
      type: Date,
    },
    automaticCounter: {
      type: Number,
    },
    grade: {
      type: String,
    },
    dINO: {
      type: String,
    },
    state: {
      type: String,
    },
    flyAsh: {
      type: String,
    },
    message: {
      type: String,
    },
    materialCategory: {
      type: String,
    },
    expiryDate: {
      type: Date,
    },
    manufacturingDate: {
      type: Date,
    },
    batchSize: {
      type: String,
    },
    status: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const productdetails = mongoose.model(
  "productiondetails",
  productdetailsSchema,
  "coll_productiondetails"
);
export { productdetails };
