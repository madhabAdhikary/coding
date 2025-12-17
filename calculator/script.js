let input=document.querySelector("input");
let values=document.querySelectorAll("button");
let operator=document.querySelectorAll(".operator")
let previousValue;
let operatorVar=null;
let currentValue=null;
let result;
let euqal=document.querySelector("#equals");


values.forEach(function(button){
   button.addEventListener("click",function(ele){
    if(!button.classList.contains("operator")&& button.id!=="equals"){
        let clickedValue=ele.target.textContent;
        input.value+=clickedValue;
    }
   })
})
operator.forEach(function(button){
    button.addEventListener("click",function(ele){
        previousValue=Number(input.value);
        operatorVar=ele.target.textContent;
        input.value="";
    })
})
euqal.addEventListener("click",function(){
    currentValue=Number(input.value);
    if(operatorVar=="+"){
        result=`${previousValue+currentValue}`;
    }
     currentValue=input.value;
    if(operatorVar=="*"){
        result=`${previousValue*currentValue}`;
    }
     currentValue=input.value;
    if(operatorVar=="/"){
        result=`${previousValue/currentValue}`;
    }
     currentValue=input.value;
    if(operatorVar=="-"){
        result=`${previousValue-currentValue}`;
    }
    input.value=result;
})
