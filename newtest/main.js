const coconut = document.getElementById('coconut');
var coconum = document.getElementById('cococount')
var cocospersec = document.getElementById('cocospersec')
const multibtn = document.getElementById('multitest');
const ccc = document.getElementById('cocochopper');
const cococutterpb = document.getElementById('cococutter');
const inpcontainer = document.getElementById('container-left');
const cocoeaterpb = document.getElementById('cocoeater')
const devmode = document.getElementById('devmode')
const consolelog = document.getElementById('logs')

var ccnum = 0
var cocosps = 0


class Upgrade {
  constructor(name, cost, pricemult, btn) {
    this.name = name;
    this.cost = cost;
    this.pricemult = pricemult;
    this.btn = btn;
  }
}


coconut.addEventListener('click', () => {
  var audio = document.getElementById("audio");
  audio.play();
  

});