/* var hotel = prompt("Dato: \n 1-Habitacion indidual \n 2-Habitacion Doble \n 3-habitacion triple  \n 4-Habitacion Cuadruple  \n 5-Superior \n 6-Deluxe  \n 5- salir");
console.log("Tu menu es: " + menu);
alert("Tu menu es: " + menu);
 */
do {
var menu = prompt("Reserva de Hotel: \n 1-habitacion \n 2-Alimentacion  \n 3-Entretenimiento  \n 4-Total \n 5-salir");
switch (menu) {
    case "1":
        Opcion1();
        break;
    case "2":
        Opcion2();
        break;
    case "3":
        Opcion3();
        break
        case "4":
        Opcion4();          
        break
    case "5": 
        alert("a Selecionado 5 Saliendo del menu");
        break    
    default:
        alert("Opcion Invalida");       
    }
}
while (menu != "5");

function Opcion1() { 
    var habitacion = parseInt(prompt("¿Que tipo de cama necesita? \n1-Cama individual \n 2-Cama doble \n 3-Cama queen \n 4-Cama king \n 5-Cama super king  \n 6-Camas gemelas"));
    if (habitacion === 1) {
        alert("a Seleccionado  1-Cama Individual ");
    } else if (habitacion === 2) {
        alert("a Seleccionado  2-Cama doble");
    } else if (habitacion === 3) {
        alert("a Seleccionado 3-Cama queen");
    } else if (habitacion === 4) {
        alert("a Seleccionado 4-Cama king");
    } else if (habitacion === 5) {
        alert("a Seleccionado 5-Cama super king ");     
    } else if (habitacion === 6) {
        alert("a Seleccionado 6-Camas gemelas");        
    } else { 
        alert("Opcion Invalida");
    };
    
}
function Opcion2(){ 
    var Alimentacion= parseInt(prompt("¿Que tipo de alimentacion Necesita? \n 1-Menu del dia \n 2-tenedor libre \n 3-A la carta"));
    if (habitacion === 1) {
        alert("a Seleccionado  1-Menu del dia ");
    } else if (habitacion === 2) {
        alert("a Seleccionado  2-Tenedro Libre");
    } else if (habitacion === 3) {
        alert("a Seleccionado 3-A la Carta");   
    } else { 
        alert("Opcion Invalida");
    };
}
function Opcion3() { 
    var Entretenimiento = parseInt(prompt("¿Que tipo de alimentacion quiere? \n1-Menu del dia  \n 2-Tenedor Libre \n 3- a la carta "));
    if (habitacion === 1) {
        alert("a Seleccionado  1-Menu del dia ");
    } else if (habitacion === 2) {
        alert("a Seleccionado  2-Tenedro Libre");
    } else if (habitacion === 3) {
        alert("a Seleccionado 3-A la Carta");   
    } else { 
        alert("Opcion Invalida");
    };
}
function Opcion4() { 
    var Total = parseInt(prompt("¿Que tipo de cama necesita? \n1-Cama individual \n 2-Cama doble \n 3-Cama queen \n 4-Cama king \n 5-Cama super king \n 6-Camas gemelas"));
    
}
function Opcion5() { 
    var Tipohadehabitacion = parseInt(prompt("¿Que tipo de cama necesita? \n1-Cama individual \n 2-Cama doble \n 3-Cama queen \n 4-Cama king \n 5-Cama super king \n 6-Camas gemelas"));
    
}
