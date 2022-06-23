//Modulo de colisão para desenvolvimento de jogos
//escrito por Rodrigo Melo
import Obj from './obj.js'
import {canvas} from './obj.js'
import {ctx} from './obj.js'

canvas.width=screen.width;
canvas.height=screen.height;
canvas.style.backgroundColor="#28303C";


let bck = document.createElement("IMG");
bck.setAttribute("src", "./assets/bck-dirt.png");
let cenary=new Obj (200,0,1024,1024);

let selector =new Obj(200,0,128,128)
let tiles=[new Obj(200,0,128,128)];



window.addEventListener("keydown",function(event){

  let k= event.key;

  if (k == "d" ){
      selector.x+=128
          
  }else if(k =="a" ){
    selector.x-=128
      
  }else if(k == "w"  ){
    selector.y-=128
        
  }else if(k == "s"  ){
    selector.y+=128
        
  }else if(k == "e"  ){
    tiles.push(new Obj(selector.x,selector.y,128,128))
     
  }
      
},false);


function game (){
  
requestAnimationFrame(game,canvas);
ctx.clearRect(0,0,canvas.width,canvas.height);

let n=tiles.length
for(let i=0;i<n;i++){

  tiles[i].tileSet(bck)
}


cenary.drawRect("#657996");


selector.drawRect("#657996")
selector.hudMsg(tiles.length)
//selector.hudMsg(n)


};
game();

