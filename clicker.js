const coconut = document.getElementById('coconut');
var coconum = document.getElementById('cococount')
var cocospersec = document.getElementById('cocospersec')
const multibtn = document.getElementById('multitest');
const ccc = document.getElementById('cocochopper');
const cococutterpb = document.getElementById('cococutter');

let cc = 0;
let multi = 1;
let mp = 10

let cps = 1;
let cocosps = 0
let cccp = 100

let cococutterp = 550

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
    return
  }
  cc = parseInt(ccstr)
  multistr = localStorage.getItem("multistr");
  multi = parseInt(multistr)
  mpstr = localStorage.getItem("mpstr");
  mp = parseInt(mpstr)
  multibtn.textContent = 'multitest ' + mp;
  cocospsstr = localStorage.getItem("cocospsstr")
  cocosps = parseInt(cocospsstr)
  cccpstr = localStorage.getItem("cccpstr")
  cccp = parseInt(cccpstr)
  cocospersec.innerHTML = cocosps + ' coconuts/ps';
  ccc.textContent = 'cocochopper ' + cccp;

  cococutterpstr = localStorage.getItem("cococutterpstr")
  if(isNaN(cococutterpstr) || !cococutterpstr) {
    cococutterp = 550


  }
  else {  

    cococutterp = parseInt(cococutterpstr)

  } 
}

coconut.addEventListener('click', () => {

  cc=cc+cps*multi;
  coconum.innerHTML = cc + ' coconuts';
  coconut.classList.add('clicked');

  

  setTimeout(() => {
    coconut.classList.remove('clicked');
  }, 76); 

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
  

}
var intervalID = window.setInterval(persec, 1000);
function persec() {
  cc = cc + cocosps
  coconum.innerHTML = cc + ' coconuts';
  var ccstr = cc.toString();
  localStorage.setItem("ccstr", ccstr);
}
function cocochopper() {
  if(cc >= cccp) {
    cocosps++
    cc = cc - cccp
    cccp = Math.round(cccp + (15/cccp)*100)
    ccc.textContent = 'cocochopper ' + cccp;
  }
  cocospersec.innerHTML = cocosps + ' coconuts/ps';
  
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

}

function cococutter() {
  alert("button clicked")
  if(cc >= cococutterp) {
    alert("entered if statement")
    cocosps = cocosps + 50
    cc = cc - cococutterp
    cococutterp = Math.round(cococutterp + (15/cococutterp)*100)
    cococutterpb.textContent = 'cococutter ' + cococutterp;
  }
  else {
    alert(cc)
    alert(cococutterp)
    alert(cocosps)
  }

  cocospersec.innerHTML = cocosps + ' coconuts/ps';

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
  localStorage.setItem("cocutterpstr", cococutterpstr)

}