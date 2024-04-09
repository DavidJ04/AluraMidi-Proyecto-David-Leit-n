var listaDeTeclas = document.querySelectorAll('.tecla') //Trae una lista con todos los elementos que empiezan con 'tecla'

function reproducirSonido(ElementoAudio) {
    
        document.querySelector(ElementoAudio).play();

}


for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#sonido_${instrumento}`

    tecla.onclick = function (){reproducirSonido(idAudio)};

    tecla.onkeydown = function(evento){
        console.log(evento.code) //Codigo de cual tecla se presionó
        if(evento.code === "Space" || evento.code === "Enter" ){
            tecla.classList.add('activa');
        }

    }

        // tecla.onkeydown = function(){
        
        //     tecla.classList.add('activa');
        // }
        
    tecla.onkeyup = function(){
        tecla.classList.remove('activa');
    }

    tecla
}

// while (contador < 9) {
//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];

//     const idAudio = `#sonido_${instrumento}`

//     tecla.onclick = function (){reproducirSonido(idAudio)};

//     contador++;
// }



 

