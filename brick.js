let x =1;
let y = ['<div class="brick"></div>'];
function addBrick(){
    
  
    x++;
    y.push('<div class="brick"></div>');
    document.getElementById("right-container").innerHTML =  y;
  
        document.getElementById("count").innerHTML= x;
        document.getElementById("count").style.color = "green"; 
}
function changeButtonColor(){

}
function removeBrick(){
   if (x>=1) {
    x--;
    y.pop('<div class="brick"></div>');
    document.getElementById("right-container").innerHTML =  y;
   }
        document.getElementById("count").innerHTML= x;
        document.getElementById("count").style.color = "red";
}