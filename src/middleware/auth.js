import jwt from "jsonwebtoken";
import { promisify } from "util";
import { decodeJS } from "@src/utils/hashcode";
import handleResponse from "@src/utils/handleResponse";
import AdminModel from "@src/models/admin";

export const verifyToken = async (req, res, next) => {
  const authorization = req.headers["authorization"];

  if (!authorization)
    return res.status(401).json({ status: 401, message: "Unauthorized" });

  const token = authorization.split(" ")[1];
  if (!token)
    return res.status(401).json({ status: 401, message: "Unauthorized" });

  const decodeToken = decodeJS(token);

  try {
    req.authData = jwt.verify(decodeToken, process.env.SECRET_TOKEN);
    next();
  } catch (error) {
    return res.status(401).json({ status: 401, message: "Invalid Token" });
  }
};

export const verifyAdminToken = async (req, res, next) => {
  const token = req.get("authorization")?.split("Bearer ")[1];

  if (!token) return handleResponse(res, 401, "failed", "Unauthorized");

  const verify = promisify(jwt.verify);
  try {
    const decodedToken = decodeJS(token);
    const data = await verify(decodedToken, process.env.SECRET_TOKEN);
    const user = await getAdminUser(data);
    if (!user) throw new Error("Invalid token");
    next();
  } catch (error) {
    return handleResponse(res, 401, "failed", error.message || "Expired token");
  }
};

async function getAdminUser(data) {
  return await AdminModel.findOne({ _id: data.userId });
}

export const verifyBearerToken = async (req, res, next) => {
  const token = req.get("authorization")?.split("Bearer ")[1];

  if (!token) return handleResponse(res, 401, "failed", "Unauthorized");

  try {
    req.token = token;
    next();
  } catch (error) {
    return handleResponse(res, 401, "failed", error.message || "Expired token");
  }
};

export const verifyTokenRTC = async (req, res, next) => {
  const token = req.get("authorization")?.split("Bearer ")[1];
  if (!token) return handleResponse(res, 401, "failed", "Unauthorized");

  if (token !== process.env.RTC_ANONYMOUSE_TOKEN_SECRET)
    return handleResponse(res, 401, "failed", "Wrong credentails.");

  next();
};
