import handleResponse from '../utils/handleResponse';
import { decodeJS } from '../utils/hashcode';
import jwt from 'jsonwebtoken'

export let checkToken = function(req, res, next) {
    const authorization = req.headers['authorization'];
    if(authorization === undefined) {
        return res.status(401).json({
            "status": 401,
            "message": "Unauthorized"
        })   
    } else {
        const token = req.headers['authorization'].split(' ')[1]
        if(token===undefined){ 
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

export let verifyToken = function(req, res, next) {
    try {
        // const decode_token = decodeJS(token.token)
        const token = decodeJS(req.token)
        jwt.verify(token, process.env.SECRET_TOKEN, async (err, authData) => {
            if (err) {
                console.log(err)
                handleResponse(res, 401, 'tokenError', err, 'Fail');
            } else {
                req.data = authData
                next();
            }
        })
    } catch (error) {
        console.log(error)
        handleResponse(res, 403, 'Error', error)
    }
}