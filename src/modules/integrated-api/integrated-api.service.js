import Integrated_keys from "@src/models/integrated-db/integrated-key";
import Integrated_Rooms from "@src/models/integrated-db/integrated-room";
import Integrated_Act from "@src/models/integrated-db/integrated-room-activity";
import CustomError from "@src/utils/CustomError";
// import axios from "axios";

export const createData = async (data) => {
    const reqdata = new Integrated_keys(data);
    const newmeet = await reqdata.save();

    return newmeet;
};

export const createRoomData = async (data) => {
    const reqdata = new Integrated_Rooms(data);
    const newmeet = await reqdata.save();

    return newmeet;
};

export const updateKeyData = async (query, data) => {
    let reqdata = await Integrated_keys.updateOne(query, [{ $set: data }]);
    return reqdata;
};

export const updateRoomData = async (query, data) => {
    let reqdata = await Integrated_Rooms.updateOne(query, [{ $set: data }]);
    return reqdata;
};

export const findData = async (query) => {
    let data = await Integrated_keys.findOne(query)
    if (data) {
        return data
    } else {
        return "error"
    }
}

export const findRoomData = async (query) => {
    let data = await Integrated_Rooms.findOne(query)
    if (data) {
        return data
    } else {
        return "error"
    }
}

export let checkToken = function(req, res, next) {
    const authorization = req.headers['authorization'];
    if(authorization === undefined) {
        return res.status(401).json({
            "status": 401,
            "message": "Unauthorized"
        })   
    } else {
        const token = req.headers['authorization'].split(' ')[1]
        if(token === undefined){ 
                return res.status(401).json({
                "status": 401,
                "message": "Unauthorized"
            })
        }else{
            req.token = token
            next();
            // res.status(200).json({token})
        }   
    }
}

export let verifyToken = async function(req, res, next) {
    try {
        let query = await findData({ key: req.token })
        if (query) {
            req.data = query
            next()
        } else {
            handleResponse(res, 401, 'tokenError', 'Fail');
        }
    } catch (error) {
        console.log(error)
        handleResponse(res, 403, 'Error', error)
    }
}

export async function requestCreateVMR(payload) {
    const config = {
    headers: { Authorization: `Basic ${process.env.TOKEN_PEXIP}=` },
    };

    try {
        // let response = await axios.post(process.env.PEXIP_CREATE_ROOM, payload, config);
        let response = { status: 201 } // for test error condition
        console.log(response.status);
        if (response.status == 201) {
            return { status: "Created" }
        } else {
            return { status: "Error" }
        }
    } catch (error) {
        console.log(error);
        throw new CustomError(401, "Failed to create VMR");
    }
}

export function createVMRConfigPayload(data, length) {
    const time = Date.now();
    const guestpin = random();
    const hostpin = random();

    let payload = {
        name: `Integrated-service-${data.owner}${length + 1}`,
        service_type: "conference",
        aliases: [{ alias: time + "alias1" }, { alias: time + "alias2" }],
        participant_limit: data.limit,
        description: `Owner integrated service: ${data.owner}`,
        pin: hostpin,
        guest_pin: guestpin,
        allow_guests: true,
        mute_all_guests: true,
    };
    return payload;
}

function random() {
    const len = Math.pow(10, 9);
    return Math.floor(Math.random() * len) + "#";
}