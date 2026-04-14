import { Router } from "express";
import ProdutoController from "../controllers/ProdutoController.js";

const router = Router();

router.post("/", ProdutoController.criar);

router.get("/", ProdutoController.listar);

router.get("/:id", ProdutoController.obterPorId);

router.put("/:id", ProdutoController.atualizar);

router.delete("/:id", ProdutoController.deletar);

export default router;