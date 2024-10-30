import { Router } from "express";
import controllerDoctor from "./controllers/controller.doctor.js";
import controllerUser from "./controllers/controller.user.js";
import jwt from "./token.js";

const router = Router();

router.get("/doctors", jwt.ValidateToken, controllerDoctor.Listar);
router.post("/doctors", jwt.ValidateToken,controllerDoctor.Inserir);
router.put("/doctors/:id_doctor", jwt.ValidateToken, controllerDoctor.Editar);
router.delete("/doctors/:id_doctor", jwt.ValidateToken, controllerDoctor.Excluir);


router.post("/users/register", controllerUser.Inserir);
router.post("/users/login", controllerUser.Login);
export default router;