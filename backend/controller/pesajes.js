'use strict'

var express = require('express');
var Pesaje = require('../models/pesajes');

var controller = {
    home: function(req,res){
        return res.status(200).send({message:"soy el home"});
    },
    savePesaje:function(req,res){
        var pesaje=new Pesaje();
        var params=req.body;
        pesaje.nombre=params.nombre;
        pesaje.rut=params.rut;
        pesaje.razonSocial=params.razonSocial;
        pesaje.pesoEntrada=params.pesoEntrada;
        pesaje.pesoSalida=params.pesoSalida;
        pesaje.tipoTransaccion=params.tipoTransaccion;
        pesaje.tipoVehiculo=params.tipoVehiculo;
        pesaje.patente=params.patente;

        pesaje.save((error,pesajeStored)=>{
            if(error) return res.status(500).send({message:"error al guardar el pesaje"});
            
            if(!pesajeStored) return res.status(404).send({message:"No se ha podido guardar el pesaje"});

            return res.status(200).send({pesaje:pesajeStored});
        });
    }, 
    getPesajes:function (req, res){
        Pesaje.find({}).exec((error,pesajes)=>{

            if(error) return res.status(500).send({message:"Error al devolver los datos"});
            
            if(!pesajes) return res.status(404).send({message:"no hay pesajes disponibles"});

            return res.status(200).send({pesajes});
        });
    },
    updatePesaje:function(req,res){
        var pesajeId = req.params.id;
        var update = req.body;

        Pesaje.findByIdAndUpdate(pesajeId,update,{new:true},(error,pesajeUpdated)=>{
            if (error) return res.status(500).send({message:"Error al actualizar"});

            if(!pesajeUpdated) return res.status(404).send({message:"No existe el pesaje"});

            return res.status(200).send({
                pesaje:pesajeUpdated
            });
        });
    },
    deletePesaje:function(req,res){
        var pesajeId = req.params.id;

        Pesaje.findByIdAndRemove(pesajeId,(error,pesajeRemoved)=>{
            if(error) return res.status(500).send({message:"Error al eliminar el pesaje"});
            
             if(!pesajeRemoved) return res.status(404).send({message:"No se ha posido eliminar el pesaje"});
            
             return res.status(200).send({
                 pesajes:pesajeRemoved
             });
         });
    },

	getPesaje: function(req, res){
		var pesajeId = req.params.id;

		if(pesajeId == null) return res.status(404).send({message: 'El pesaje no existe.'});

		Pesaje.findById(pesajeId, (err, pesaje) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!pesaje) return res.status(404).send({message: 'El pesaje no existe.'});

			return res.status(200).send({
				pesaje
			});

		});
	},
}

module.exports = controller;