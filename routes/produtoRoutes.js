import { Router } from "express";
import ProdutoController from "../controllers/ProdutoController.js";

const router = Router();

router.get("/", ProdutoController.findAll);

export default router;