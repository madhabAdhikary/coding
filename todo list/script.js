//const { createElement } = require("react");

let btn=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let text=input.value.trim();

    if(text !==""){
        let li=document.createElement("li");
        li.textContent=text;
        ul.appendChild(li);
        input.value='';

    }

})
