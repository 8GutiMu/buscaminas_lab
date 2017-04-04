console.log("MI JS SE RELACIONA CON EL HTML");

var longitud= document.getElementsByClassName("nada").length;
var longitudBomba = document.getElementsByClassName("bomba").length;
var longitudNumero = document.getElementsByClassName("numero").length;
var cajasVacias=[];
var bombasBoom=[];
var numero=[];

 for (var i = 0 ; i < longitud; i++) {
    cajasVacias[i]= document.getElementsByClassName("nada")[i];
    cajasVacias[i].addEventListener('click' , cambiarColor) ;

  }

for (var i = 0 ; i < longitudBomba; i++) {
   bombasBoom[i]= document.getElementsByClassName("bomba")[i];
   bombasBoom[i].addEventListener('click' , tronoLaBomba  ) ;
 }

  for (var i = 0 ; i < longitudNumero; i++) {
     numero[i]= document.getElementsByClassName("numero")[i];
     numero[i].addEventListener('click' , agregarNumero ) ;
   }

function cambiarColor() {
  console.log("Entraste a cambiar un color")
  this.style.backgroundColor = "#E6D2D2";
}

function tronoLaBomba(cajasVacias,numero){
  for(i=0; i<longitudBomba;i++){
    bombasBoom[i].innerHTML = "<img src=assets/img/bomba.png width='45'>";
  }
  cajasVacias.forEach(cambiarColor);
  numero.forEach(agregarNumero);
}

function agregarNumero(){
  this.innerHTML = "1";
}
