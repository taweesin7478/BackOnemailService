import { Router } from "express";
import { GenAndCreate, testcheckToken, createVmr } from "@src/modules/integrated-api/integrated-api.controller";
import { checkToken, verifyToken } from "@src/modules/integrated-api/integrated-api.service";

const router = Router();

router.post("/create", GenAndCreate);
router.get("/checktoken", checkToken, verifyToken, testcheckToken);
router.post("/createVMR", createVmr);

export default router;