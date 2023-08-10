import crypto from "crypto";
import CryptoJS from "crypto-js";
import jwt_decode from "jwt-decode";
import jwt from "jsonwebtoken";

export function encode(data) {
  try {
    let logic = crypto.createCipher("aes-128-cbc", process.env.SECRET_TOKEN);
    let encode = logic.update(data, "utf8", "hex");
    encode += logic.final("hex");
    return encode;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export function decode(data) {
  try {
    let logic = crypto.createDecipher("aes-128-cbc", process.env.SECRET_TOKEN);
    let decode = logic.update(data, "hex", "utf8");
    decode += logic.final("utf8");
    return decode;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export function decodeToken(token, secretkey) {
  try {
    let logic = crypto.createDecipher("aes-128-cbc", secretkey);
    let decode = logic.update(token, "hex", "utf8");
    decode += logic.final("utf8");
    return decode;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export function decodeJWT(token) {
  try {
    var decoded = jwt_decode(token);
    return decoded;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export function encodeJS(data) {
  try {
    var ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      process.env.SECRET_TOKEN
    ).toString();
    return ciphertext;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export function decodeJS(data) {
  try {
    var bytes = CryptoJS.AES.decrypt(data, process.env.SECRET_TOKEN);
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export function encodeAccessToken(data) {
  try {
    var ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      process.env.ACCESS_TOKEN_KEY
    ).toString();
    return ciphertext;
  } catch (error) {
    return error;
  }
}

export function decodeAccessToken(data) {
  try {
    var bytes = CryptoJS.AES.decrypt(data, process.env.ACCESS_TOKEN_KEY);
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export function DecodeExpTime(token) {
  const decode = jwt.verify(
    token,
    process.env.SECRET_TOKEN,
    (err, authData) => {
      if (err) {
        console.log(err);
        return err;
      } else {
        return authData.exp;
      }
    }
  );
  return decode;
}
