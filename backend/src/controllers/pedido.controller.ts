import {Request, Response } from 'express';
import Pedido,{ IPedido } from "../models/pedido";

export async function getPedidos(req:Request,res:Response){
    const pedidos= await Pedido.find();
    if (!pedidos) return res.status(404).send({message:"Error al solicitar los pedidos"});

    return res.status(200).json(pedidos);
}
export async function getPedido(req:Request,res:Response){
    const {id}=req.params;
    const pedido=await Pedido.findById(id);

    if(!pedido) return res.status(404).send({message:"Error al obtener el pedido"});

    return res.status(200).json(pedido);
}
export async function deletePedido(req:Request,res:Response){
    const {id} = req.params;
    const pedido = await Pedido.findByIdAndDelete(id) as IPedido;

    if (!pedido) return res.status(404).send({message:"No se ha podido eliminar el pedido"});
    return res.status(200).json(pedido);
}
export async function updatePedido(req:Request,res:Response){
    const {id} = req.params;
    const {producto,cliente,cantidad,precio}= req.body;
    const update = await Pedido.findByIdAndUpdate(id,{producto,cliente,cantidad,precio});

    if(!update) return res.status(404).send({message:"No se ha podido actualizar la información"});

    return res.status(200).json(update);
}
export async function getPedidoByClient(req:Request,res:Response){
    const {id}=req.params;
    const pedidos = await Pedido.find({cliente:id});
    
    if(!pedidos) return res.status(404).send({message:"No se ha podido obtener la información"});
    return res.status(200).json(pedidos);
    
}
export async function createPedido(req:Request,res:Response){
    const {producto,cliente,cantidad,precio}=req.body;
    const newPedido= {producto,cliente,cantidad,precio};
    
    const pedido= new Pedido(newPedido);
    await pedido.save();

    return res.json({
        message:"pedido guardado exitosamente!!",
        pedido
    })
}
export async function changeStatus(req:Request,res:Response){
    const {id} =req.params;
    const pedido = await Pedido.findByIdAndUpdate(id,{status:true},{new:true});
    if(!pedido) return res.status(401).send({message:"no se ha podido actualizar el estado"});

    return res.status(200).json(pedido);
}   

export async function getPedidosPendientes(req:Request,res:Response){
    const pedidos= await Pedido.find({status:false});
    if (!pedidos) return res.status(400).send({message:"Error al solicitar los pedidos"});
    
    if(pedidos.length==0)return res.status(404).send({message:"No se ha encontrado ningun pedido"}); 

    
    return res.status(200).json(pedidos);
        
    
}