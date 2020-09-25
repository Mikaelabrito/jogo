const jogador1 = "X";
const jogador2 = "O";
let playTime = jogador1;
let gameOver = false;
var jogo;

atualizaView();
inicializarEspacos();

function atualizaView (){
    if (gameOver){return;}

    if (playTime == jogador1){
        let jogador = document.querySelectorAll("div#view img")[0]
        jogador.setAttribute("src", "x.jpg");
    }else{
        let jogador = document.querySelectorAll("div#view img")[0]
        jogador.setAttribute("src", "circle.jpg");
        //cpuJoga();
    }
}

function cpuJoga() {
    console.log("oi");
        let arrayLinhas = ["", "", ""];
        do{
            arrayLinhas = Math.floor(Math.random() * 9);
        }while(document.getElementById = "campo"!="");
        this.innerHTML = "<img src= 'circle.jpg' width= 50px;>";
        this.setAttribute("jogada", jogador2);
        // gameOver != false
        
    }

function inicializarEspacos(){
    //const campos = document.querySelectorAll("espaco");
    let espacos = document.getElementsByClassName("espaco");
    //jogo = Array.from(Array(9).keys());
    for(let i = 0; i < espacos.length; i++){
        /*campos[i].innerHTML = "<img src= 'x.jpg' width= 50px;>";
		//chamada da função caso clique em uma das células
        campos[i].addEventListener('click', clique, false);
    }
    
}*/
         espacos[i].addEventListener("click", function(){

            if (gameOver) { return;}
            if (this.getElementsByTagName("img").length == 0){
                if (playTime == jogador1){
                    this.innerHTML = "<img src= 'x.jpg' width= 50px;>";
                    this.setAttribute("jogada", jogador1);
                    playTime = jogador2;
                }else{
                    //cpuJoga();
                    this.innerHTML = "<img src= 'circle.jpg' width= 50px;>";
                    this.setAttribute("jogada", jogador2);
                    
                    playTime = jogador1;
                }
                atualizaView();
            }
        });
    }
}

 /*async function verificarGanhador(){
     let a1 = document.getElementById("a1").getAttribute("jogada");
     let a2 = document.getElementById("a2").getAttribute("jogada");
     let a3 = document.getElementById("a3").getAttribute("jogada");

     let b1 = document.getElementById("b1").getAttribute("jogada");
     let b2 = document.getElementById("b2").getAttribute("jogada");
     let b3 = document.getElementById("b3").getAttribute("jogada");

     let c1 = document.getElementById("c1").getAttribute("jogada");
     let c2 = document.getElementById("c2").getAttribute("jogada");
     let c3 = document.getElementById("c3").getAttribute("jogada");

     let ganhador = "";
     if(((a1 == b1 && a1 == c1) || (a1 == a2 && a1 == a3) || (a1 == b2 && a1 == c3)) && a1 != ""){
        ganhador = a1;
     }else if (((b2 == b1 && b2 == b3) || (b2 == a2 && b2 == c2) || (b2 == a3 && b2 == c1)) && b2 != ""){
         ganhador = b2;
     }else if (((c3 == c2 && c3 == c1) || (c3 == b3 && c3 == a3) && c3 != "")){
       ganhador = c3;
     }if(ganhador != a1 && ganhador != c2 && ganhador != b3){
         alert('Deu velha!');
     }else if (ganhador != ""){
        gameOver = true;
         await sleep(50);
         alert(`O jogador ${ganhador} venceu o jogo!`);
     }
 }*/