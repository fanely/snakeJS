var velocidad = 60;
var tamano = 10;

class objeto{
  constructor(){
    this.tamano=tamano;
  }
  choque(obj){
    var difx = Math.abs(this.x - obj.x);
    var dify = Math.abs(this.y - obj.y);
    if(difx >=0 && difx < tamano && dify >=0 && dify < tamano){
      return true;
    } else{
        return false;
    }
  }
}

function dibujar(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height);

}
function main(){
  dibujar();
}
setInterval(*main()*,velocidad);
