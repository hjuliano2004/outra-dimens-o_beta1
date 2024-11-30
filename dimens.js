//variaveis do documento html
let audo = new Audio('chips.mp3');
let fury = new Audio('fury.mp3');
let main = document.getElementById("main");
let btn =  document.getElementById("btn");


//funcoes que controlam os elementos html
main.style.display ="none";

function toca(){
if(main.style.display == "none"){
    main.style.display = 'inline-block';
    btn.style.display = "none";
}
}

//funcoes que controlam elementos criados por js


let c = 0;


function div(){
    let div = document.createElement("div");
    main.appendChild(div);
    div.style.width ="250px";
    div.style.border ="2px solid red";
    div.style.marginBottom ="20px";
}


function imagem(imag, temp, som){
let img = document.createElement("img");
img.src = imag[c];
img.style.width ="200px";
let div = document.getElementsByTagName("div");
div[div.length -1].appendChild(img);

img.onmouseenter = function(){
   // img.src =imag;
    //audio.play()
    som.play();

let tempo = setInterval(() => {

    c++;
    img.src = imag[c];

if(c == imag.length -1){
    c=0;
    clearInterval(tempo);
}



}, temp);

}
img.onmouseleave = function(){
    //img.src =imag;
    img.src = imag[0];
    som.pause();
    som.currentTime = 0;

}
}



//let rubi = ["rubi.jpeg", "rubi2.jpeg", "rubi3.png"];
let beijo = ["beijo1.jpeg", "beijo2.jpeg", "beijo3.jpeg"];
let sonic = ["sonic1.jpg", "sonic2.jpg", "sonic3.jpg", "sonic4.jpg", "sonic5.jpg", "sonic6.jpg"];
//imagem(rubi, 500, audo);

div();
imagem(sonic, 200, fury)


div();
imagem(beijo,400, audo);