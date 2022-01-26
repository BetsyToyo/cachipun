var ganadorMaquina;
var ganadorUsuario;

function iteracion(){
    do {
        var jugador= prompt("Elije piedra ✊, papel ✋ o tijera ✌ (escribelo tal cual en minuscula sin los emojis claro!)","");
        if(jugador!="piedra" && jugador!="papel" && jugador!="tijera"){
            alert("ERROR! Sigue nuestras instrucciones 😉 escribe en minusculas piedra, papel o tijera")
        }
    
    } while (jugador!="piedra" && jugador!="papel" && jugador!="tijera");
    
    var maquina= Math.floor(Math.random()*3)+1;
    var eleccionMaquina;
    var resultado;
    

    if(maquina===1){
        eleccionMaquina="piedra"
    }else if(maquina===2){
        eleccionMaquina="papel"
    }else{
        eleccionMaquina="tijera"
    }

    console.log(maquina);        
    console.log(eleccionMaquina);
    console.log(jugador);
        

    switch (eleccionMaquina) {
        
        case "piedra":
            if (jugador==="piedra"){
                console.log("has empatado la partida  😀");
                resultado="La maquina ha elegido Piedra. Has empatado esta partida  😀";
                alert(resultado)

            }else if(jugador==="papel"){
                console.log("has ganado la partida 🥳🎉");
                resultado="La maquina ha elegido Piedra. Has ganado esta partida 🥳🎉";
                alert(resultado)
                ganadorUsuario++

            }else{
                console.log("has perdido la partida 😢");
                resultado="La maquina ha elegido Piedra. Has perdido esta partida 😢";
                alert(resultado)
                ganadorMaquina++

            }           
            
                            
            break;
            

        case "papel":
            if (jugador==="papel"){
                console.log("has empatado la partida  😀");
                resultado="La maquina ha elegido Papel. Has empatado la partida  😀";
                alert(resultado)

            }else if(jugador==="tijera"){
                console.log("has ganado la partida 🥳🎉");
                resultado="La maquina ha elegido Papel. Has ganado la partida 🥳🎉";
                alert(resultado)
                ganadorUsuario++
                
            }else{
                console.log("has perdido la partida 😢");
                resultado="La maquina ha elegido Papel. Has perdido la partida 😢";
                alert(resultado)
                ganadorMaquina++

            }
                       
            
           break;
                        

        case "tijera":
            if (jugador==="tijera"){
                console.log("La maquina ha elegido Tijera. Has empatado la partida  😀");
                resultado="has empatado la partida  😀";
                alert(resultado)

            }else if(jugador==="piedra"){
                console.log("La maquina ha elegido Tijera. Has ganado la partida 🥳🎉");
                resultado="has ganado la partida 🥳🎉";
                alert(resultado)
                ganadorUsuario++

            }else{
                console.log("La maquina ha elegido Tijera. Has perdido la partida 😢");
                resultado="has perdido la partida 😢";
                alert(resultado)
                ganadorMaquina++

            }
            
            
            
            break;                                
                
        default:
            
            break;                

}


console.log(ganadorMaquina);
console.log(ganadorUsuario);

var ganadorFinal

if (ganadorMaquina > ganadorUsuario) {
     ganadorFinal="El ganador de cachipun contra la maquina es la maquina 😢"
}else if(ganadorUsuario > ganadorMaquina){
    ganadorFinal="El ganador indiscutible de cachipun contra la maquina eres TUUUUU!!! 🥳🎉"   
}else{
    ganadorFinal="La maquina y tu han empatado el juego 😀"
}

function mostrarPantalla(){
    $("#cuerpo-resultados").html(`
    <hr>
    <h2 class="mb-3">La maquina gano: ${ganadorMaquina} partidas<h2>
    <h2 class="mb-3">Tu has ganado:${ganadorUsuario} partidas<h2>
    <h2 class="mb-3">${ganadorFinal}<h2>
    <hr>            
    `);}
    
mostrarPantalla()

};

$(function(){

    $("#inicio").click(function iniciar(){
        ganadorMaquina=0
        ganadorUsuario=0

        do {
        var intentos= prompt("Bienvenido al cachipun contra la maquina 😉. Cuantos intentos desea hacer? (ingrese numero del 1 al 10)","");
        intentos= parseInt(intentos)
        if (intentos<1 || intentos>10 || typeof(intentos)==="string") {
            alert("ERROR! Sigue nuestras instrucciones 😉 ingrese numero del 1 al 10 para intentos")
        }
        } while (intentos<1 || intentos>10 || typeof(intentos)==="string");
    
        for (let index = 0; index < intentos; index++) {
           iteracion()
        
        }})

    $("#reiniciar").click(function(){
        //Actualizamos la página
        location.reload();
      });
   
       
});