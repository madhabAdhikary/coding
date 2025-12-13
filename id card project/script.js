let form=document.querySelector("form");
let input=document.querySelectorAll("input");
let container=document.querySelector(".container");
form.addEventListener("submit",function(ele){
    ele.preventDefault();
   
   //console.log(ele)
   // values in console
    let naams=ele.target;
    input.forEach(function(names){
        console.log(naams[0].value);
    })
    
    let id=document.createElement("div");
    id.classList.add("id-card");

    let img=document.createElement("img");
    console.log(img.setAttribute("src",`${naams[0].value}`));

    let h3=document.createElement("h3");
    console.log(h3.textContent=naams[1].value);

    let p=document.createElement("p");
    console.log(p.textContent='jersey:'+naams[2].value);

    id.appendChild(img);
    id.appendChild(h3);
    id.appendChild(p);

    container.appendChild(id);

    form.reset();

 
})