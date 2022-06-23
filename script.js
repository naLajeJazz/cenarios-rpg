//Modulo de colisão para desenvolvimento de jogos
//escrito por Rodrigo Melo
import Obj from './obj.js'
import {canvas} from './obj.js'
import {ctx} from './obj.js'

canvas.width=screen.width;
canvas.height=screen.height;
canvas.style.backgroundColor="#28303C";




let selector =[new Obj(0,0,32,32),new Obj(0,0,64,64),new Obj(0,0,96,96),new Obj(0,0,128,128)]
let tiles=[];
let selectorN=0
let tileDim=32
let hud=new Obj(100,canvas.height-96)

let bckImageN=0
let bck = document.createElement("IMG");
let bckImage=""
//let bckImage=["./assets/bck-dirt.png","./assets/bck-dirt-1.png"]


if(bckImageN==0){
  bck.setAttribute("src","./assets/bck-dirt.png");
  }else if (bckImageN==1){
    bck.setAttribute("src","./assets/bck-dirt-1.png");
   }


window.addEventListener("keydown",function(event){

  let k= event.key;

  if (k == "d" ){
      selector[selectorN].x+=tileDim
     
          
  }else if(k =="a" ){
    selector[selectorN].x-=tileDim
    
      
  }else if(k == "w"  ){
    selector[selectorN].y-=tileDim
  
        
  }else if(k == "s"  ){
    selector[selectorN].y+=tileDim
    
        
  }else if(k == "e"  ){
    selectorN++
    tileDim+=32
  }else if(k == "q"  ){
    selectorN--
    tileDim-=32
    
  }else if(k == "b"  ){
    bckImageN++
    
  }else if(k == "v"  ){
    bckImageN--
    
  }
  else if(k == "c"  ){
    tiles.push(new Obj(selector[selectorN].x,selector[selectorN].y,128,128))
    
  }
      
},false);


function game (){
  
requestAnimationFrame(game,canvas);
ctx.clearRect(0,0,canvas.width,canvas.height);
/*
if(selectorN==0){
  tileDim=64
}else if (selectorN==1){
  tileDim=128
}*/




let n=tiles.length
for(let i=0;i<n;i++){

  tiles[i].tileSet(bck)
  
}





selector[selectorN].drawRect("#657996")



hud.hudMsg( `
selectorN: ${selectorN} 
tileDim: ${tileDim}
bckImageN: ${bckImageN}

` )



};
game();

