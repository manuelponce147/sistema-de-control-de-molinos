import { Request, Response } from 'express'
import fs from 'fs-extra';
import path from 'path'

// Models
import Photo, { IPhoto } from '../models/photo';

export async function getPhotos(req: Request, res: Response): Promise<Response> {
    const photos = await Photo.find();
    return res.json(photos);
};

export async function createPhoto(req: Request, res: Response): Promise<Response> {
    const { title, description,price,stock } = req.body;
    const newPhoto = { title, description, price,stock, imagePath: req.file.path };
    const photo = new Photo(newPhoto);
    await photo.save();    
    if(!photo) return res.status(400).json({message:'Error al actulizar los datos'});
    return res.json({
        message: 'Photo Saved Successfully',
        photo
    });
};

export async function getPhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const photo = await Photo.findById(id);
    if(!photo) return res.status(404).send({message:"No se ha podido obtener la informacion"});
    return res.status(200).json(photo);
}

export async function deletePhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const photo = await Photo.findByIdAndRemove(id) as IPhoto;
    if (photo) {
        await fs.unlink(path.resolve(photo.imagePath));
    }
    return res.json({ message: 'Photo Deleted' });
};

export async function updatePhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title, description,price,stock } = req.body;
    const updatedPhoto = await Photo.findByIdAndUpdate(id, {
        title,
        description,
        price,
        stock
    });
    return res.json({
        message: 'Successfully updated',
        updatedPhoto
    });

}
