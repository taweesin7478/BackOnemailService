import { mongoose } from "mongoose";
const conn = require("@src/config/database");
const Schema = mongoose.Schema;

var integrate_room = new Schema(
    {
        key_id: { type: String, default: "" },
        owner: { type: String, default: "" },
        detail: { type: Object, default: null },
        room: { type: Array, default: null }
        // time: { type: String, default: "" },
    },
    { collection: "Integrate_Room" }
);

const Integrate_room = conn.model("Integrate_Room", integrate_room);
module.exports = Integrate_room;
