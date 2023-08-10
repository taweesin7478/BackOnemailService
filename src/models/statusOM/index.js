import { mongoose } from "mongoose";
const conn = require("@src/config/database");
const Schema = mongoose.Schema;

const OneMailSchema = new Schema(
  {
    status: { type: String },
    note: { type: String },
    alert: { type: String },
    detail: { type: String },
    created_at: { type: Date, default: "0001-01-01T00:00:00.000Z" },
  },
  { collection: "OMStatus" }
);

const OneMailModel = conn.model("OMStatus", OneMailSchema);
module.exports = OneMailModel;
