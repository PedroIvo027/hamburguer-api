import Avaliacao from "../models/Avaliacao.js";
import Pedido from "../models/Pedido.js"

export default{
    async create(req, res){
        const{ nota, pedidoId} = req.body;

        if(nota < 1 || nota > 5) {
            return res.status(400).json({ erro: 'Nota deve ser entre 1 e 5'});
        }

        const pedido = await Pedido.findByPk(pedidoId);
        if (!pedido) {
            return res.status(404).json({ erro: 'Pedido não existe'});
        }

        const avaliacao = await Avaliacao.create({ nota, pedidoId});

        return res.json(avaliacao);
    }
};

