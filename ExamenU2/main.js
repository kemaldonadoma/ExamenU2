var mongoose = require("mongoose");
var ventasSchema = require("./ventasSchema");
var productoSchema = require("./productoSchema");

mongoose.connect('mongodb://localhost:27017/exU2');
// arameters are model name, shcema, collection name
var Ventas = mongoose.model('Venta',ventasSchema,'ventas');
var Producto = mongoose.model('Producto',productoSchema,'productos');



function creaProducto(producto){
	Producto.create(producto)
	.then(data=>{
		console.log("Se ha creado un producto!");
		process.exit(0);
	})
	.catch(err=>{
		console.log(err);
		process.exit(1);
	});
}




async function creaVenta(venta){
    Producto.findOne({_id : venta.producto, $where :`this.cant >= ${venta.cant}`})
	.then(data=>{
        if(data === null ){
            console.log("No cuenta con tantos productos para hacer la venta");
        }
        else{
        console.log("Cantidad de productos suficientes");
            venta.subtotal = data.precio * venta.cant;
            venta.iva = venta.subtotal * 0.16;
            venta.total = venta.subtotal + venta.iva;

                 Producto.findByIdAndUpdate({_id:venta.producto}, { $dec: { cant:  venta.cant }})
                .then((data) => {
                    console.log("Se ha actualizado la producto!");
                    return data;
                })
                .catch((err)=> {
                    console.log("Error al actualizar!");
                    return err;
                });

              

            Ventas.create(venta)
            .then(data=>{
                console.log("Se ha creado una venta!");
                
            })
            .catch(err=>{
                console.log(err);
                console.log("error en la venta 2");
            });
        }
	})
	.catch(err=>{
        
		console.log(err);
		
    });
    
    
}


function enviarLista(){

}

//crear producto
/* 
creaProducto({
    nombre:"bimbo",
	precio: 30,
	cant:30,
	minimo: 10,
	maximo: 20,
    costo: 5
}); */

//crear venta 

creaVenta({
    folio : "abc",
	fecha : Date.Now,
	cant : 1 ,
    producto : "5d1f60053043d727b49bf8f5",
	subtotal : 0 ,
	iva : 0,
    total : 0 }
    ); 