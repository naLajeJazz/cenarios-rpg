//Modulo de colisão para desenvolvimento de jogos
//escrito por Rodrigo Melo
import Obj from './obj.js'
import {canvas} from './obj.js'
import {ctx} from './obj.js'

canvas.width=screen.width;
canvas.height=screen.height;

canvas.style.backgroundColor="#657996";

let bck = document.createElement("IMG");
bck.setAttribute("src", "./assets/bck-dirt.png");


let windowSelect=new Obj(0,0,200,canvas.height);
let cenary=new Obj (260,0,1024,1024);

let tile =new Obj(260,0,128,128);



function game (){
requestAnimationFrame(game,canvas);
ctx.clearRect(0,0,canvas.width,canvas.height);


windowSelect.draw('#506078');
cenary.drawRect("white");
tile.tileSet(bck);





};
game();