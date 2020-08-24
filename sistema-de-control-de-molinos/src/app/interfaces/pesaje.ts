export interface IPesaje{
    _id?:string;
    nombre:string;
    rut:string;
    razonSocial:string;
    pesoEntrada:number;
    pesoSalida:number;
    tipoTransaccion:string;
    tipoVehiculo:string;
    patente:string; 
    tipoProducto:string;
    createdAt:Date
}