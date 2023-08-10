import handleResponse from "@src/utils/handleResponse";
import {
  UpdateStatus,
  OMStatus
} from "./statusOM.service";

export const OnemailStatus = async (req, res) => {
  try {
    const data = await UpdateStatus(req.body);
    handleResponse(res, 201, "Success", "Successfully Update Status.", data);
  } catch (error) {
    handleResponse(res, error.code || 500, "failed", error.message);
  }
}

export const GetOMStatus = async (req, res) => {
  try {
    const data = await OMStatus();
    handleResponse(res, 201, "Success", "Successfully get Status.", data);
  } catch (error) {
    handleResponse(res, error.code || 500, "failed", error.message);
  }
}