import models from "../models/index.js";
const {Avaliacao, Pedido} = models;

export default {
  create: async (req, res) => {
    try {
      const { nota, pedido_id } = req.body;

      if (nota < 1 || nota > 5) {
        return res.status(400).json({ erro: "Nota deve ser entre 1 e 5" });
      }

      const pedido = await Pedido.findByPk(pedido_id);
      if (!pedido) {
        return res.status(404).json({ erro: "Pedido não existe" });
      }

      const avaliacao = await Avaliacao.create({ nota, pedido_id });

      return res.status(201).json(avaliacao);

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  findAll: async (req, res) => {
    try {
      const avaliacoes = await Avaliacao.findAll();

      if (avaliacoes.length === 0) {
        throw new Error("Nenhuma avaliação encontrada");
      }

      return res.status(200).json(avaliacoes);

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};