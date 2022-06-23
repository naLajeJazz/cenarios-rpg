  
 
export const canvas = document.getElementById("Canvas");
export const ctx = canvas.getContext("2d");


///anima imagem
let xIndex =0
setInterval(()=>xIndex=32,125);
setInterval(()=>xIndex=0,250);


export default class Obj {
  constructor(x, y, w, h, spd) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
   
    this.spd = spd
    


  };
  draw(c){
    ctx.save()
    this.c=c
    ctx.fillStyle =c;
    ctx.fillRect(this.x, this.y, this.w,this.h);
    ctx.restore()
  };
  drawRect(c){
    
    ctx.beginPath();
    ctx.strokeStyle = c;
    ctx.rect(this.x, this.y, this.w,this.h);
    ctx.stroke();
   
  };
  tileSet=(img)=>{
                    
    this.img=img;
      ctx.drawImage(this.img,this.x,this.y,this.w,this.h); 
  
    };

   collide(hitX,hitY,hitW,hitH){
    this.collideBolean = false;
    this.hitX=hitX;
    this.hitY=hitY;
    this.hitW=hitW;
    this.hitH=hitH;
if(this.x<=this.hitX+this.hitW&&this.x+this.w>=this.hitX&&this.y+this.h>=this.hitY&&this.y<=this.hitY+this.hitH)
{this.collideBolean=true}else{this.collideBolean=false}

}; 

hudMsg(msg){

ctx.save()
ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "white";
ctx.fillText(msg, this.x, this.y+64);
ctx.restore()
}









};






/*

function draw(){
    ctx.fillStyle = c;
    ctx.fillRect(this.x, this.y, this.w,this.h);
  }


  function collide(hitX,hitY,hitW,hitH){
    this.hitX=hitX;
    this.hitY=hitY;
    this.hitW=hitW;
    this.hitH=hitH;
if(this.x<=this.hitX+this.hitW&&this.x+this.w>=this.hitX&&this.y+this.h>=this.hitY&&this.y<=this.hitY+this.hitH)
{this.collideBolean=true}else{this.collideBolean=false}}; 

*/