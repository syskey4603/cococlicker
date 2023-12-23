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
let noclicks = 0
let cc = 0;
let multi = 1;
let mp = 10

let cps = 1;
let cocosps = 0
let cccp = 100

let cococutterp = 550
let cocoeaterp = 5000
let demonspawned = "false";
let mousePos = { x: undefined, y: undefined };

document.addEventListener('mousemove', (event) => {
  mousePos = { x: event.pageX, y: event.pageY };

});
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
  demonspawned = localStorage.getItem("demonspawned")
  noclicksstr = localStorage.getItem("noclicksstr")
  noclicks = parseInt(noclicksstr)


  if(demonspawned == "true") {
    logtest("test2")
    cocodemonspawn()
  }


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
  let text = document.getElementById("text");
  cocosperclick = cps*multi
  
  text.innerHTML = "+" + cocosperclick.toString()
  text.style.left = mousePos.x + 'px';
  text.style.top = mousePos.y + 'px';
  logtest(mousePos.x, mousePos.y)
  text.classList.remove("hide");
  setTimeout(function () {
    text.classList.add("fade-in");
    setTimeout(function () {
      text.classList.remove("fade-in");
      setTimeout(function () {
        text.classList.add("hide");
      }, 1000);
    }, 1000);
  });

  

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
  addcocos(cocosps)
  //cc = cc + cocosps
  //coconum.innerHTML = numconvert(cc) + ' coconuts';
  var ccstr = cc.toString();
  localStorage.setItem("ccstr", ccstr);
}

function cocochopper() {
  if(cc >= cccp) {
    cocosps = cocosps + 1
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
  localStorage.setItem("demonspawned", demonspawned)
  var noclicksstr = noclicks.toString();
  localStorage.setItem("noclicksstr", noclicksstr)
}

function devmode1() {
  
}

function cocoeater() {
  if(cc >= cocoeaterp) {
    cocosps = cocosps + 100
    cc = cc - cocoeaterp
    cocoeaterp = Math.round(cocoeaterp*1.15)
    cocoeaterpb.textContent = 'cocoeater ' + numconvert(cocoeaterp);
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

  ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(3) + "B"
  // Six Zeroes for Millions 
  : Math.abs(Number(labelValue)) >= 1.0e+6

  ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(3) + "M"
  // Three Zeroes for Thousands
  : Math.abs(Number(labelValue)) >= 1.0e+3

  ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(3) + "K"

  : Math.abs(Number(labelValue).toFixed(3)) + " ";

}
/*
function addcocos(amount) {
  if(cc > 1000) {
    let endvalue = cc + amount
    let interval = amount;
    let duration = 1  


    let counter = setInterval(function () {
      cc += (interval/1000);
      coconum.innerHTML = numconvert(cc) + ' coconuts';
      if (cc >= endvalue) {
        clearInterval(counter);
      }
    }, duration);

  }
  else {
    cc += amount
    coconum.innerHTML = cc + ' coconuts';

  }
}
*/

function addcocos(amount) {
    cc += amount
    coconum.innerHTML = numconvert(cc) + ' coconuts';

}


function logtest(logtext1) {
  consolelog.innerHTML = logtext1;


}

var intervalId1 = window.setInterval(function(){
  cocodemonspawn()
}, 70000);



function cocodemonspawn() {
  logtest("test")
  demonspawned = "true";
  var elem = document.createElement("img");
  elem.src = 'cococutter.png';
  //elem.setAttribute("height", "768");
  //elem.setAttribute("width", "1024");
  document.getElementById("container-center").appendChild(elem);
  
  saveall()
  elem.addEventListener('click', () => {
    noclicks++
    if(noclicks>=20){
      clearInterval(intervalId2) 
      elem.remove()
      demonspawned = "false";
      noclicks = 0;
      savell()
    }
  })

  var intervalId2 = window.setInterval(function(){
    cc = Math.round(cc*0.99)  
  }, 5000);

  
  


  



}

