//logica para la asignacion de los descuentos
var Cat = "";
var descuento = 0.8;
function Actualizacion(){
    Cat = document.querySelector("select").value;
    updateValue();
}
//logica para la insercion de la cantidad
const input = document.querySelector("#cantidad");
const log = document.getElementById('values');
input.addEventListener('input', updateValue);
function updateValue() {
    if(Cat == "Estudiante"){
        descuento = 0.2;
    }else if(Cat == "Trainee"){
        descuento = 0.7;
    } if(Cat == "Junior"){
        descuento = 0.85;
    }
    log.textContent = Math.abs(input.value)*200*descuento;
}

//habilitar resumen
function resum(nom,ape,canti){
    var nom = document.getElementById("nombre").value;
    var ape = document.getElementById("apellido").value;
    var canti = document.getElementById("cantidad").value;
    if(nom!="" && ape!="" && canti>0){
        document.getElementById("resumen").disabled=false;
    }
}

//accion del boton resumen
function btnResumen(){
    document.getElementById("VentanaFlotante").style.display="block"
    var nom = document.getElementById("nombre");
    document.getElementById("Nom").innerHTML="Nombre: " + nom.value;
    var ape = document.getElementById("apellido");
    document.getElementById("Ape").innerHTML="Apellido: " + ape.value;
    document.getElementById("Pre").innerHTML="Precio Total: " + log.textContent +"$";
}

//boton cerrar
function cerrar(){
    document.getElementById("VentanaFlotante").style.display="none";
}