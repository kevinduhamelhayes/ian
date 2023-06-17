var banana = 1
var casa = 2
var hola = 3
if (banana > casa) {
    console.log("banana es mayor que casa")
}
else if (banana < casa) {
    console.log("casa es mayor que banana")
}
else {
    console.log("casa es igual que banana")
}
//piedra papel o tijera
var piedra = 1
var papel = 2
var tijera = 3
if (piedra > papel) {
    console.log("piedra gana a papel")
}
else if (papel > tijera) {
    console.log("papel gana a tijera")
}
else if (tijera > piedra) {
    console.log("tijera gana a piedra")
}
else {
    console.log("empate")
}

var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("el usuario GANO con "+ op1)
        }else if(user === op2 && cpu === op1){
            console.log( "el usuario GANO con " + op2)
        }else if(user === op3 && cpu === op2){
            console.log("el usuario GANO con " + op3)
        }else{
            console.log("La CPU Gano!!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
};

resultado(op1,op3)