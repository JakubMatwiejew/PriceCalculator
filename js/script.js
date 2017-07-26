document.addEventListener("DOMContentLoaded", function(){

  var paint = document.getElementById("paintColors");
  var print = document.getElementById("printColors");
  var width = document.getElementById("width");
  var height = document.getElementById("height");
  var button = document.getElementById("button");
  var price = document.getElementById("price");

  button.addEventListener("click", function(){
    if (paint.value<1 || print.value<1 || width.value<1 || height.value<1) {
    price.value="Fill the form!";
  } else {
    price.value=(paint.value*100)+(print.value*50)+" EUR + return shipping";
  }

  });

});
