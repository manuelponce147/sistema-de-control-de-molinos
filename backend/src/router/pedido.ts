import { Router } from "express";
const router=Router();

import { createPedido, getPedidos, getPedido, updatePedido, deletePedido, getPedidoByClient, changeStatus, getPedidosPendientes } from "../controllers/pedido.controller";


router.route('/pedidos')
    .post(createPedido)
    .get(getPedidos);


router.route('/pedido/:id')
    .get(getPedido)
    .put(updatePedido)
    .delete(deletePedido);

router.route('/pedidos/:id')
    .get(getPedidoByClient)
    .put(changeStatus); 

router.route('/pedidospendientes')
    .get(getPedidosPendientes);

export default router;
