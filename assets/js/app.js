$(function(){

    $("#inicio").click(function iniciar(){do {
        var intentos= prompt("Bienvenido al cachipun contra la maquina 😉. Cuantos intentos desea hacer? (ingrese numero del 1 al 10)","");
        intentos= parseInt(intentos)
        if (intentos<1 || intentos>10 || typeof(intentos)==="string") {
            alert("ERROR! Sigue nuestras instrucciones 😉 ingrese numero del 1 al 10 para intentos")
        }
    } while (intentos<1 || intentos>10 || typeof(intentos)==="string");
    
    for (let index = 0; index < intentos; index++) {
           iteracion()
        
    }})

    // function iniciar(){ do {
    //     var intentos= prompt("Bienvenido al cachipun contra la maquina 😉. Cuantos intentos desea hacer? (ingrese numero del 1 al 10)","");
    //     intentos= parseInt(intentos)
    //     if (intentos<1 || intentos>10 || typeof(intentos)==="string") {
    //         alert("ERROR! Sigue nuestras instrucciones 😉 ingrese numero del 1 al 10 para intentos")
    //     }
    // } while (intentos<1 || intentos>10 || typeof(intentos)==="string");
    
    // for (let index = 0; index < intentos; index++) {
    //        iteracion()
        
    // }}
    
   

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
                    resultado="has empatado la partida  😀";
                }else if(jugador==="papel"){
                    console.log("has ganado la partida 🥳🎉");
                    resultado="has ganado la partida 🥳🎉";
                }else{
                    console.log("has perdido la partida 😢");
                    resultado="has perdido la partida 😢";
                }
                
                mostrarPantalla()
                                
                break;
                

            case "papel":
                if (jugador==="papel"){
                    console.log("has empatado la partida  😀");
                    resultado="has empatado la partida  😀";
                }else if(jugador==="tijera"){
                    console.log("has ganado la partida 🥳🎉");
                    resultado="has ganado la partida 🥳🎉";
                }else{
                    console.log("has perdido la partida 😢");
                    resultado="has perdido la partida 😢";
                }
               
                mostrarPantalla()
                
               break;
                            

            case "tijera":
                if (jugador==="tijera"){
                    console.log("has empatado la partida  😀");
                    resultado="has empatado la partida  😀";
                }else if(jugador==="piedra"){
                    console.log("has ganado la partida 🥳🎉");
                    resultado="has ganado la partida 🥳🎉";
                }else{
                    console.log("has perdido la partida 😢");
                    resultado="has perdido la partida 😢";
                }
                
                mostrarPantalla()
                
                break;                                
                    
            default:
                console.log("ups!! ingresaste una opcion incorrecta");
                break;                

    }

    function mostrarPantalla(){
    $("#cuerpo-resultados").html(`
    <h2>La maquina ha elegido:${eleccionMaquina}<h2>

    <h2>Tu has elegido:${jugador}<h2>

    <h2>${resultado}<h2>            
`);}
};
    
       
});