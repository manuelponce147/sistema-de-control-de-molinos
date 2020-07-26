'use strict'

const DIR='./uploads';
var express = require('express');
var ProductController = require('./../controller/producto');
var fileName
var router = express.Router();
var Producto = require('./../models/producto');
var multer= require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
       fileName = Date.now()+file.originalname.toLowerCase().split(' ').join('-');
      cb(null, fileName)
    }
  });
  var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Solo se permiten los siguientes formatos .png, .jpg and .jpeg'));
      }
    }
  }); 

router.post('/subir-foto',upload.single('file'),(req,res)=>{
    return res.send({message:"imagen subida"});
});
router.put('subir-foto/:id',()=>{
    ProductController.updateImage
});
router.get('/image/:id', ProductController.getImage);
router.get('/images', ProductController.getImages);
router.get('/home', ProductController.home);
router.get('/', ProductController.getProductos);
router.get('/:id', ProductController.getProucto);
router.post('/create-product', ProductController.saveProducto);
router.put('/:id', ProductController.updateProducto);
router.delete('/:id', ProductController.deleteProducto);

router.post('/subir-foto/:id', upload.single('file'),  function(req,res){

    var productoId=req.params.id;
    if(productoId==null) return res.status(500).send({message:"No existe el producto"});

    Producto.findByIdAndUpdate(productoId,{image:fileName},{new:true},(err,updated)=>{
        if(err) return res.status(500).send({message:"Error al actulizar la imagen"});
        
        if(!updated) return res.status(404).send({message:"Noso se ha al actulizar la imagen"});

        return res.status(200).send({message:"se ha actualizado la imagen",image:updated})
    })
});
router.get('/obtener-foto/:id',ProductController.getImage);

module.exports = router;