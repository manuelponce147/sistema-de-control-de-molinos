import { Request, Response } from 'express'

// Models
import Pesaje, { IPesaje } from '../models/pesaje';

export async function getPesajes(req: Request, res: Response): Promise<Response> {
    const pesajes = await Pesaje.find();
    return res.json(pesajes);
};

export async function createPesaje(req: Request, res: Response): Promise<Response> {
    const { nombre,rut,razonSocial,pesoEntrada,pesoSalida,tipoTransaccion,tipoVehiculo,patente,tipoProducto} = req.body;
    const newPesaje = { nombre,rut,razonSocial,pesoEntrada,pesoSalida,tipoTransaccion,tipoVehiculo,patente,tipoProducto};
    const pesaje = new Pesaje(newPesaje);
    await pesaje.save();
    return res.json({
        message: 'Pesaje Saved Successfully',
        pesaje
    });
};
export async function deletePesaje(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const pesaje = await Pesaje.findByIdAndRemove(id) as IPesaje;
   
    return res.json({ message: 'Pesaje Deleted' });
};

export async function getPesaje(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const pesaje = await Pesaje.findById(id);
    return res.json(pesaje);
}



export async function updatePesaje(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { nombre,rut,razonSocial,pesoEntrada,pesoSalida,tipoTransaccion,tipoVehiculo,patente,tipoProducto} = req.body;
    const updatedPesaje = await Pesaje.findByIdAndUpdate(id, { nombre,rut,razonSocial,pesoEntrada,pesoSalida,tipoTransaccion,tipoVehiculo,patente,tipoProducto});
    return res.json({
        message: 'Successfully updated',
        updatedPesaje
    });

}