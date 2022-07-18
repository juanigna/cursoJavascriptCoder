//BUCLE FOR

numVueltas = parseInt(prompt("Cuantas veces desea sumar? "));
let num = 0;
let operacion = 0;
for(let i=1; i<=numVueltas; i++){
    num=parseInt(prompt("Introduzca un numero a sumar: "));
    operacion += num;
}
alert("La suma de los numeros da como resultado: "+operacion);

//BUCLE WHILE

let entrada = "";
let productos = "";
let producto = "";
let cantidadProductos = 0;
alert("Bienvenido a la seccion de agregar productos!");
while(entrada!="ESC"){
    producto = prompt("Ingrese el nombre del producto: ") + "\n";
    entrada=prompt("Si desea finalizar escriba ESC, de lo contrario solo de ENTER.")
    productos += producto;
    cantidadProductos +=1;
}
alert("Usted agrego: " + cantidadProductos +" productos "+ "y los productos agregados son: \n"  + productos );


//La misma logica de arriba utilizando for.

let cantidadProductos2 = parseInt(prompt("Ingrese la cantidad de productos a agregar: "));
let producto2="";
for(let i = 1; i<=cantidadProductos2; i++){
producto2+=prompt("Ingrese el producto numero " + i +" : ") + "\n";
}
alert("Usted agrego "+ cantidadProductos2+ " productos "+" y los productos agregados son: \n" + producto2);