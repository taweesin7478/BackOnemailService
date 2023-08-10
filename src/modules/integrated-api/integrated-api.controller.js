import handleResponse from "@src/utils/handleResponse";
import { createData, 
        createRoomData,
        findData,
        findRoomData,
        updateRoomData, 
        createVMRConfigPayload, 
        requestCreateVMR } from "@src/modules/integrated-api/integrated-api.service";
import generateApiKey from 'generate-api-key';

// For Manage
export const GenAndCreate = async (req, res) => {
    const { owner } = req.body
    try {
        let create = await createData({
            key: generateApiKey({ method: 'bytes', prefix: owner }),
            owner: owner,
            time: new Date()
        })
        console.log(create);
        handleResponse(res, 201, "Create", `Create data success Owner: ${owner}`)
    } catch (error) {
        console.log(error);
        handleResponse(res, 403, "Error", error);
    }
}

export const testcheckToken = async (req, res) => {
    const token_data = req.data;
    try {
        console.log(token_data);
        handleResponse(res, 200, "Success", token_data)
    } catch (error) {
        console.log(error);
        handleResponse(res, 403, "Error", error);
    }
}

export const createVmr = async (req, res) => {
    try {
        let data = req.body
        let query_key = await findData({ owner: req.body.owner, key: req.body.key });
        if (query_key != "error") {
            let query_room = await findRoomData({ key_id: query_key.key, owner: query_key.owner })
            if (query_room != "error") {
                var rooms = query_room.room
                const payload = createVMRConfigPayload(data, rooms.length);
                const created_vmr = await requestCreateVMR(payload)
                if (created_vmr.status == "Created") {
                    rooms.push(payload)
                    await updateRoomData({ key_id: query_key.key }, { room: rooms })
                    handleResponse(res, 201, "Success", payload)
                } else {
                    handleResponse(res, 200, "Fail", "Fail to create vmr from pexip.")
                }
            } else {
                const payload = createVMRConfigPayload(data, 0);
                const created_vmr = await requestCreateVMR(payload)
                if (created_vmr.status == "Created") {
                    await createRoomData({
                        key_id: query_key.key,
                        owner: query_key.owner,
                        detail: "test",
                        room: [payload]
                    });
                    handleResponse(res, 201, "Success", payload)
                } else {
                    handleResponse(res, 200, "Fail", "Fail to create vmr from pexip.")
                }
            }
        } else {
            handleResponse(res, 200, "Fail", "Can not find API key in Database.")
        }
    } catch (error) {
        console.log(error);
        handleResponse(res, 403, "Error", error);
    }
}

// For customer
export const reserveRoom = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        handleResponse(res, 403, "Error", error);
    }
}

// export const 