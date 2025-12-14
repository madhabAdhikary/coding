let input=document.querySelector("input");
let span=document.querySelector("span");
let h2=document.querySelector("h2");
input.addEventListener("input",function(dats)
{
    let len=dats.target.value.length;
    let num=span.textContent=20-len;
    console.log(num)
    if(num < 0){
         span.textContent=20-len; 
         h2.style.color='red';
        
    }
    else{
        span.textContent=20-len; 

    }

})
