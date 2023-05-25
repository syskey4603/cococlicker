const coconut = document.getElementById('coconut');
var coconum = document.getElementById('cococount')
var cocospersec = document.getElementById('cocospersec')
const multibtn = document.getElementById('multitest');
const ccc = document.getElementById('cocochopper');
const cococutterpb = document.getElementById('cococutter');
const inpcontainer = document.getElementById('container-left');
const cocoeaterpb = document.getElementById('cocoeater')

let cc = 0;
let multi = 1;
let mp = 10

let cps = 1;
let cocosps = 0
let cccp = 100

let cococutterp = 550
let cocoeaterp = 5000

function pageload() {
  
  ccstr = localStorage.getItem("ccstr");
  if(isNaN(ccstr)) {
    ccstr = 0
    cc = 0
    multi = 1;
    mp = 10

    cps = 1;
    cocosps = 0
    cccp = 100
    cococutterp = 550
    cocoeaterp = 5000
    return
  }
  cc = parseInt(ccstr)
  multistr = localStorage.getItem("multistr");
  multi = parseInt(multistr)
  mpstr = localStorage.getItem("mpstr");
  mp = parseInt(mpstr)
  multibtn.textContent = 'multitest ' + numconvert(mp);
  cocospsstr = localStorage.getItem("cocospsstr")
  cocosps = parseInt(cocospsstr)
  cccpstr = localStorage.getItem("cccpstr")
  cccp = parseInt(cccpstr)
  cocospersec.innerHTML = numconvert(cocosps) + ' coconuts/ps';
  ccc.textContent = 'cocochopper ' + numconvert(cccp);
  cococutterpstr = localStorage.getItem("cococutterpstr")
  cocoeaterpstr = localStorage.getItem("cocoeaterpstr")



  if(isNaN(cococutterpstr) || !cococutterpstr) {
    cococutterp = 550
    cococutterpb.textContent = 'cococutter ' + numconvert(cococutterp);


  }
  else {  

    cococutterp = parseInt(cococutterpstr)
    cococutterpb.textContent = 'cococutter ' + numconvert(cococutterp);


  } 

  if(isNaN(cocoeaterpstr) || !cocoeaterpstr) {
    cocoeaterp = 5000
    cocoeaterpb.textContent = 'cocoeater ' + numconvert(cocoeaterp);


  }
  else {  

    cocoeaterp = parseInt(cocoeaterpstr)
    cocoeaterpb.textContent = 'cocoeater ' + numconvert(cocoeaterp);


  } 
}

coconut.addEventListener('click', () => {
  var audio = document.getElementById("audio");
  audio.play();

  cc=cc+cps*multi;
  coconum.innerHTML = numconvert(cc) + ' coconuts';
  coconut.classList.add('clicked');
  

  

  setTimeout(() => {
    coconut.classList.remove('clicked');
  }, 76); 

  saveall()

  
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
    mp = Math.round(mp*1.15)
    multibtn.textContent = 'clickmulti ' + numconvert(mp);
  }
  saveall()

  

}
var intervalID = window.setInterval(persec, 1000);
function persec() {
  cc = cc + cocosps
  coconum.innerHTML = numconvert(cc) + ' coconuts';
  var ccstr = cc.toString();
  localStorage.setItem("ccstr", ccstr);
}
function cocochopper() {
  if(cc >= cccp) {
    cocosps++
    cc = cc - cccp
    cccp = Math.round(cccp*1.15)
    ccc.textContent = 'cocochopper ' + numconvert(cccp);
  }
  cocospersec.innerHTML = numconvert(cocosps) + ' coconuts/ps';
  saveall()


}

function cococutter() {
  if(cc >= cococutterp) {
    cocosps = cocosps + 50
    cc = cc - cococutterp
    cococutterp = Math.round(cococutterp*1.15)
    cococutterpb.textContent = 'cococutter ' + numconvert(cococutterp);
  }
  else {
    alert("your too poor")
  }

  cocospersec.innerHTML = numconvert(cocosps) + ' coconuts/ps';
  saveall()


}

function saveall() {
  var ccstr = cc.toString();
  localStorage.setItem("ccstr", ccstr);
  var multistr = multi.toString();
  localStorage.setItem("multistr", multistr);
  var mpstr = mp.toString();
  localStorage.setItem("mpstr", mpstr);
  var cocospsstr = cocosps.toString();
  localStorage.setItem("cocospsstr", cocospsstr)
  var cccpstr = cccp.toString();
  localStorage.setItem("cccpstr", cccpstr)
  var cococutterpstr = cococutterp.toString();
  localStorage.setItem("cococutterpstr", cococutterpstr)
  var cocoeaterpstr = cocoeaterp.toString();
  localStorage.setItem("cocoeaterpstr", cocoeaterpstr)
}

function devmode() {
  alert("only for sxskey")
}

function cocoeater() {
  if(cc >= cocoeaterp) {
    cocosps = cocosps + 100
    cc = cc - cocoeaterp
    cocoeaterp = Math.round(cocoeaterp*1.15)
    cocoeaterpb.textContent = 'cocoeater ' + cocoeaterp;
  }
  else {
    alert("your too poor")
  }

  cocospersec.innerHTML = numconvert(cocosps) + ' coconuts/ps';
  saveall()
} 


function numconvert(labelValue) {

  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e+9

  ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
  // Six Zeroes for Millions 
  : Math.abs(Number(labelValue)) >= 1.0e+6

  ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
  // Three Zeroes for Thousands
  : Math.abs(Number(labelValue)) >= 1.0e+3

  ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

  : Math.abs(Number(labelValue));

}