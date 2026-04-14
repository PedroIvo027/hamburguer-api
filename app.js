import express from 'express';
import categoriaRoutes from './routes/categoriaRoutes.js';
import avaliacaoRoutes from './routes/avaliacaoRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';
import entregaRoutes from './routes/entregaRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';

const app = express();

const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/categorias',categoriaRoutes);
app.use('/avaliacoes', avaliacaoRoutes);
app.use('/pedidos', pedidoRoutes);
app.use('/produtos', produtoRoutes);
app.use('/entregas', entregaRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
