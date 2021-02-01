
function updateText(){
  let addLetter = document.getElementById('text-input').value;
  document.getElementById('text-output').innerText = addLetter;
}

function makeBold(element){
  element.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("bold");
}

function makeItalic(element){
  element.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("italic");
}

function makeUnderline(element){
  element.classList.toggle("active");
  if(document.getElementById("text-output").classList.contains("underline")) {
    document.getElementById("text-output").classList.remove("underline");
  } else {
    document.getElementById("text-output").classList.add("underline");
  }
}

function alignText(element, alignType){
  element.classList.toggle("active");
  //option: -1
  let buttonList = document.getElementsByClassName("align");
  for(let i=0; i<buttonList.length; i++) {
    buttonList[i].classList.remove("active");
  }
  //option:- 2
  // if(alignType === "left") {
  //   document.getElementById('center-align').classList.remove("active");
  //   document.getElementById('right-align').classList.remove("active");
  // } else if(alignType === "center") {
  //   document.getElementById('left-align').classList.remove("active");
  //   document.getElementById('right-align').classList.remove("active");
  // } else if(alignType === "right") {
  //   document.getElementById('left-align').classList.remove("active");
  //   document.getElementById('center-align').classList.remove("active");
  // }
  document.getElementById("text-output").style.textAlign= alignType;
}
