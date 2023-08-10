import { mongoose } from "mongoose";
const conn = require("@src/config/database");
const Schema = mongoose.Schema;

var integrate_key = new Schema(
    {
        key: { type: String, default: "" },
        owner: { type: String, default: "" },
        time: { type: String, default: "" },
    },
    { collection: "Integrate_keys" }
);

const Integrate_key = conn.model("Integrate_keys", integrate_key);
module.exports = Integrate_key;
