var anim = new Array();
var textAnim0 = new Array();
var textAnim1 = new Array();
var IN = new Array();
for(i=0; i<7; i++){
anim[i] = document.getElementById("aD"+i),
pfx = ["webkit", "moz", "MS", "o", ""], IN[i] = true;
textAnim0[i] = document.getElementById("t"+i).getElementsByTagName("h5")[0];
textAnim1[i] = document.getElementById("t"+i).getElementsByTagName("p")[0];

}

PrefixedEvent(anim, "AnimationStart", AnimationListener);
PrefixedEvent(anim, "AnimationIteration", AnimationListener);
PrefixedEvent(anim, "AnimationEnd", AnimationListener);

function PrefixedEvent(element, type, callback) {
    for (var p = 0; p < pfx.length; p++) {
        if (!pfx[p]) type = type.toLowerCase();
        element.addEventListener(pfx[p]+type, callback, false);
    }
}

function playAnim(id) {
  if(IN[id]){
    if(anim[id].classList.contains("fadeOut")){
    anim[id].classList.remove("fadeOut");
  textAnim0[id].classList.remove("fadeOut");
textAnim1[id].classList.remove("fadeOut");}
    if(!anim[id].classList.contains("fadeIn")){
anim[id].classList.add("fadeIn");

textAnim0[id].setAttribute("data-text",
textAnim0[id].textContent);
textAnim1[id].setAttribute("data-text",
textAnim1[id].textContent);
textAnim0[id].setAttribute("data-currChar",
0);
textAnim1[id].setAttribute("data-currChar",
0);
animText0(id);
animText1(id);
}
}else{
  if(anim[id].classList.contains("fadeIn")){
  anim[id].classList.remove("fadeIn");
  if(!anim[id].classList.contains("fadeOut")){
anim[id].classList.add("fadeOut");
textAnim0[id].classList.add("fadeOut");
textAnim1[id].classList.add("fadeOut");
}
}

}
IN[id] = !IN[id];
}

function animText0(id){
  textAnim0[id].style.opacity=1;
  textAnim0[id].innerHTML = "";
  for(var i=0; i<textAnim0[id].getAttribute("data-text").length;
i++){
(function(index){
  setTimeout(function(){
    textAnim0[id].innerHTML+=textAnim0[id].getAttribute("data-text")
    .substring(index,index+1);
  }, 100*i);
})(i);
}
}

function animText1(id){
  textAnim1[id].style.opacity=1;
  textAnim1[id].innerHTML = "";
for(var i=0; i<textAnim1[id].getAttribute("data-text").length;
i++){
(function(index){
setTimeout(function(){
  textAnim1[id].innerHTML+=textAnim1[id].getAttribute("data-text")
  .substring(index,index+1);
}, 70*i);
})(i);
}
}

function pp(){
  if(document.getElementById('pp').classList.contains("fa-poop")){
  document.getElementById('pp').classList.remove("fa-poop");
  document.getElementById('pp').classList.add("fa-poo");
}else{
  document.getElementById('pp').classList.remove("fa-poo");
  document.getElementById('pp').classList.add("fa-poop");
}
}

function moon(){
  if(document.getElementById('moon').classList.contains("far")){
  document.getElementById('moon').classList.remove("far");
  document.getElementById('moon').classList.add("fas");
}else{
  document.getElementById('moon').classList.remove("fas");
  document.getElementById('moon').classList.add("far");
}
}