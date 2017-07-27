document.addEventListener("DOMContentLoaded", function(){

  var paint = document.getElementById("paintColors");
  var print = document.getElementById("printColors");
  var width = document.getElementById("width");
  var height = document.getElementById("height");
  var button = document.getElementById("button");
  var price = document.getElementById("price");
  var info = document.getElementById("info");
  var line = document.getElementsByClassName("line");
  var currency = document.getElementById("currency");

  button.addEventListener("click", function(){
    if (paint.value<1 || print.value<1 || width.value<1 || height.value<1) {
    info.innerText="Fill the form!";
  } else if (((paint.value*100)+(print.value*50))>1000) {
    info.innerText="Check values!"
    line[0].style.display="none";
    currency.style.display="none";
    price.style.display="none";
  }else {

    price.innerText=(paint.value*100)+(print.value*50);
    info.innerText="+ shipping cost";
    line[0].style.display="block";
    currency.style.display="block";
    price.style.display="block";
  }

  });

});
