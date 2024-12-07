let total = 0;
let state = "start";
let style = "integer";

const button = document.getElementsByClassName("button");
for(let i = 0; i < button.length; i++){
  button[i].addEventListener("click",function() {
    console.log(button[i].textContent);
    if(total === 0){
      total = button[i].textContent;
    }else if(state === "afterEqual"){ 
      total = button[i].textContent;
      state = "start";
    }else {
      total += button[i].textContent;
      state = "start"
    }
    document.getElementById("displayNum").textContent = total;
  })
};

const symbol = document.getElementsByClassName("symbol");
for(let i = 0; i < symbol.length; i++){
  symbol[i].addEventListener("click",function() {
    console.log(symbol[i].textContent);
    if(total === 0){
      return;
    }else if(state === "afterSymbol"){
      return;
    }else{
      total += symbol[i].textContent;
      state = "afterSymbol";
      style = "integer"
    }
    document.getElementById("displayNum").textContent = total;
  })
};

const buttonZero = document.getElementsByClassName("buttonZero");
for(let i = 0; i < buttonZero.length; i++){
  buttonZero[i].addEventListener("click",function() {
    console.log(buttonZero[i].textContent);
    if(total === 0){
      return;
    }else if(state === "afterSymbol"){
      total += 0;
      state = "afterZero";
    }else if(state === "afterZero"){ 
      return;
    }else if(state === "afterEqual"){ 
      total = 0;
      state = "start";
    }else{
      total += buttonZero[i].textContent;
    }
    document.getElementById("displayNum").textContent = total;
  })
};

const point = document.getElementById("point");
point.addEventListener("click",function(){
  console.log(point.textContent);
  if(total === 0){
    total += point.textContent;
    state = "afterSymbol";
    style = "decimal"
  }else if(state === "afterSymbol"){
    return;
  }else if(style === "decimal"){
    return;
  }else{
    total += point.textContent;
    state = "afterSymbol";
    style = "decimal"
  }
  document.getElementById("displayNum").textContent = total;
});

const equal = document.getElementById("equal");
equal.addEventListener("click",function(){
  console.log(equal.textContent);
  total = eval(total);
  total = Math.round(total*1000000000000000)/1000000000000000;
  document.getElementById("displayNum").textContent = total;
  state = "afterEqual";
});

const AC = document.getElementById("AC")
AC.addEventListener("click",function(){
  console.log(AC.textContent);
  total = 0;
  document.getElementById("displayNum").textContent = total;
  state = "start";
  style = "integer";
});