'use strict'

var express = require('express');
var Silo = require('./../models/siilo');
var controller = {
    home: function (req, res) {
        return res.status(200).send({ message: "soy el silo" });
    },
    saveSilo: function (req, res) {
        var silo = new Silo();
        var params = req.body;

        silo.nombre = params.nombre;
        silo.capacidadTotal = params.capacidadTotal;
        silo.stock = params.stock;
        silo.tipoProducto = params.tipoProducto;
        silo.estado = true;

        silo.save((error, siloStored) => {
            if (error) return res.status(500).send({ message: "Error al guardar el silo" });
            if (!siloStored) return res.status(404).send({ message: "No se ha podido guardar el error " });

            return res.status(200).send({
                silo: siloStored
            })
        });

    },
    getSilo: function (req, res) {
        var siloId = req.params.id;
        if (siloId == null) return res.status(404).send({ message: "El silo no existe" });

        Silo.findById(siloId, (error, silo) => {
            if (error) return res.status(500).send({ message: "Error al devolver los datos" });

            if (!silo) return res.status(404).send({ message: "El silo no existe" });

            return res.status(200).send({
                silo
            });

        });
    },
    getSilos: function (req, res) {
        Silo.find({}).exec((error, silos) => {

            if (error) return res.status(500).send({ message: "Error al devolver los datos " });
            if (!silos) return res.status(404).send({ message: "No se han podido obtener los datos" });

            return res.status(200).send({
                silos: silos
            })
        });
    },
    updateSilo: function (req, res) {
        var siloId = req.params.id;
        var update = req.body;

        Silo.findByIdAndUpdate(siloId, update, { new: true }, (error, updateSilo) => {
            if (error) return res.status(500).send({ message: "Error al actualizar datos" });
            if (!updateSilo) return res.status(404).send({ message: "No se puedieron actulizar los datos" });

            return res.status(200).send({
                silos: updateSilo
            });
        });
    },
    deleteSilo: function (req, res) {
        var siloId = req.params.id;

        Silo.findByIdAndRemove(siloId, (error, siloRemoved) => {
            if (error) return res.status(500).send({ message: "Error al eliminar el silo" });

            if (!siloRemoved) return res.status(404).send({ message: "No se ha podido eliminer el silo" });

            return res.status(200).send({
                silo: siloRemoved
            });

        });
    }
}
module.exports = controller;
