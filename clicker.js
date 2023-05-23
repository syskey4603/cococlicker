const coconut = document.getElementById('coconut');
var coconum = document.getElementById('cococount')
var cocospersec = document.getElementById('cocospersec')
const multibtn = document.getElementById('multitest');
const ccc = document.getElementById('cocochopper');
let cc = 0;
let multi = 1;
let cps = 1;
let cocosps = 0
let cccp = 100
let mp = 10

coconut.addEventListener('click', () => {

  cc=cc+cps*multi;
  coconum.innerHTML = cc + ' coconuts';
  coconut.classList.add('clicked');

  

  setTimeout(() => {
    coconut.classList.remove('clicked');
  }, 76); 
});

function testmulti() {
  if (cc >= mp) {
    cc = cc - mp
    if (multi == 1) {
      multi = multi + 1
    }
    else {
      multi = multi + 2  
    }
    mp = Math.round(mp + (2/mp)*100)
    multibtn.textContent = 'multitest ' + mp;
  }
  
  

}
var intervalID = window.setInterval(persec, 1000);
function persec() {
  cc = cc + cocosps
  coconum.innerHTML = cc + ' coconuts';
}
function cocochopper() {
  if(cc >= cccp) {
    cocosps++
    cc = cc - cccp
    cccp = Math.round(cccp + (15/cccp)*100)
    ccc.textContent = 'cocochopper ' + cccp;
  }
  cocospersec.innerHTML = cocosps + ' coconuts/ps';
  


}