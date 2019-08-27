
var place =0;
function changeColor() {
    var colorList = ["#5199FF","#FFAF50","#35D073", "#F375CF"]; //color list
      place++; // set the color
    if (place === colorList.length) place=0; // if place is greater than the list size, reset
    document.body.style.backgroundColor = colorList[place];
    document.getElementById('changeColors').style.backgroundColor = colorList[place];
  }

  window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

//this makes scroll to top
function backtotopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function topnavfunction() {
  var  x = document.getElementById("mobTopNav");
  if (x.className == "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
