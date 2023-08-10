import crypto from 'crypto';
import CryptoJS from "crypto-js";

export function genuid(name) {
    // check uid room duplicate
    let uid
    if (name != null) {
        uid = `${name.substr(0, 3)}-${crypto
        .randomBytes(2)
        .toString('hex')}-${crypto.randomBytes(4).toString('hex')}`
    } else {
        uid = `${crypto.randomBytes(2).toString('hex')}-${crypto
        .randomBytes(2)
        .toString('hex')}-${crypto.randomBytes(4).toString('hex')}`
    }
    return uid
}