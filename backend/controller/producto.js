'use strict'
var express = require('express');
var Producto = require('./../models/producto');

var fs = require('fs');
var path = require('path');
const { REPL_MODE_STRICT } = require('repl');

var controller = {
    home: function (req, res) {
        return res.status(200).send({ message: "soy el producto" });
    },
    saveProducto: function (req, res) {
        var producto = new Producto();
        var params = req.body;

        producto.nombre = params.nombre;
        producto.tipoProducto = params.tipoProducto;
        producto.precio = params.precio;
        producto.image = null;

        producto.save((error, productStored) => {
            if (error) return res.status(500).send({ message: "Error al registrar la información" });

            if (!productStored) return res.status(404).send({ message: "No se ha podido registrar la informacion" });

            return res.status(200).send({
                producto: productStored
            });
        });
    },
    getProucto: function (req, res) {
        var productoId = req.params.id;
        if (productoId == null) return res.status(404).send({ message: "el producto no existe" });

        Producto.findById(productoId, (error, product) => {

            if (error) return res.status(500).send({ message: "Error al obtener los datos" });

            if (!product) return res.status(404).send({ message: "No se han podido obtener los datos" });

            return res.status(200).send({
                product: product
            })
        })
    },
    getProductos: function (req, res) {

        Producto.find({}).exec((error, productos) => {
            if (error) return res.status(500).send({ message: "Error al obtener los datos" });

            if (!productos) return res.status(404).send({ message: "No se han podido obtener los productos" });

            return res.status(200).send({
                productos: productos
            });
        });




    },
    updateProducto: function (req, res) {
        var productoId = req.params.id;
        var update = req.body;

        Producto.findByIdAndUpdate(productoId, update, { new: true }, (error, productUpdated) => {
            if (error) return res.status(500).send({ message: "Error al actualizar la informacion" });

            if (!productUpdated) return res.status(404).send({ message: "No se ha podido actualizar la informacion" });

            return res.status(200).send({
                productos: productUpdated
            })
        })
    },
    deleteProducto: function (req, res) {

        var productoId = req.params.id;
        Producto.findByIdAndRemove(productoId, (error, productoRemoved) => {
            if (error) return res.status(500).send({ message: "Error al eliminar el producto" });

            if (!productoRemoved) return res.status(404).send({ message: "No se ha podido eliminar el producto" });

            return res.status(200).send({
                producto: productoRemoved
            });
        });

    },
    getImage: function (req, res) {
        var productoId = req.params.id;

        Producto.findById(productoId, (error, producto) => {
            if (error) return res.status(500).send({ message: "Error al buscar la imagen" });

            if (!producto) return res.status(500).send({ message: "no encontrado  la imagen" });

            if(producto.image==null){
                return res.status(404).send({message:"el producto no tiene imagen"});
            }
            res.status(200).send({
                image:producto.image
            })

        })



    },
    getImages: function (req, res) {

        Producto.find({ "image": { "$ne": null } }).exec((error, productos) => {
            if (error) return res.status(500).send({ message: "Error al obtener los datos" });

            if (!productos) return res.status(404).send({ message: "No se han podido obtener los productos" });

            return res.status(200).send({
                productos: productos
            });
        });




    }



}
module.exports = controller;