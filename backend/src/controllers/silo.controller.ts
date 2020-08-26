import {Request,Response} from 'express'

import Silo,{ISilo} from '../models/silo';

export async function getSilos(req:Request,res:Response){
    const silos= await Silo.find();
    return res.json(silos);

}
export async function createSilo(req: Request, res: Response): Promise<Response> {
    const {nombre,capacidadTotal,stock,tipoProducto,estado } = req.body;
    const newSilo = {nombre,capacidadTotal,stock,tipoProducto,estado };
    const silo = new Silo(newSilo);
    await silo.save();
    return res.json({
        message: 'silo Saved Successfully',
        silo
    });
};
export async function deleteSilo(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const silo = await Silo.findByIdAndRemove(id) as ISilo;
   
    return res.json({ message: 'Silo Deleted' });
};

export async function getSilo(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const silo = await Silo.findById(id);
    return res.json(silo);
}



export async function updateSilo(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const {nombre,capacidadTotal,stock,tipoProducto,estado   } = req.body;
    const updatedSilo = await Silo.findByIdAndUpdate(id, {nombre,capacidadTotal,stock,tipoProducto,estado   });
    return res.json({
        message: 'Successfully updated',
        updatedSilo
    });
}    
