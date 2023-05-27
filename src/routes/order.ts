import { Router } from "express";
import { getItem } from "../controllers/order";
import { checkJwt } from "../middleware/session";
/*
* Ets ruta solo pueden acceder las personas que tiene session activa
* que tenga un JWT valido
*/

const router = Router();

router.get("/", checkJwt, getItem);

export { router };