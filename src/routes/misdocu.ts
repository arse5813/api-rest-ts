import { Router } from "express";
import { getItems,
         getItem,
         postItem,
         updateItem,
         deleteItem } from "../controllers/misdocumentos";

const router = Router();

 router.get("/", getItems);

 router.get("/:id", getItem);

 router.post("/", postItem);

 router.put("/:id", updateItem);

 router.delete("/:id", deleteItem);

// router.get("/", (req: Request, res:Response)=>{
//     res.send({data: "AQUI_VAN_LOS_MODELOS"})
// });




export { router };