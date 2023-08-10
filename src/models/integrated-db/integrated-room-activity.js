import { mongoose } from "mongoose";
const conn = require("@src/config/database");
const Schema = mongoose.Schema;

var integrate_roomact = new Schema(
    {
        key_id: { type: String, default: "" },
        reserved_room: { type: Array, default: null }
        // time: { type: String, default: "" },
    },
    { collection: "Integrate_RoomActivity" }
);

const Integrate_roomact = conn.model("Integrate_RoomActivity", integrate_roomact);
module.exports = Integrate_roomact;
