import { Request, Response, Router } from "express";
import { registerCtrol, loginCtrol} from "../controllers/auth"

const router = Router();

router.post("/register", registerCtrol);
router.post("/login", loginCtrol);

export { router }