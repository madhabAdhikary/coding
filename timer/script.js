let hrs=document.querySelector(".hours");
console.log(hrs.textContent)
let min=document.querySelector(".minutes");
let sec=document.querySelector(".sec");
let h=Number(prompt("enter the hour"));
let totalsec=h*60*60;
  let hours = Math.floor(totalsec / 3600); 
let minutes = Math.floor((totalsec % 3600) / 60); 
let secs = totalsec % 60;
 

let timer=setInterval(function(){
    totalsec--;
hours = Math.floor(totalsec / 3600); 
 minutes = Math.floor((totalsec % 3600) / 60); 
 secs = totalsec % 60;
 
  
    hrs.textContent=hours;
    min.textContent=minutes;
    sec.textContent=secs;
    
    if(totalsec<0) clearInterval(timer);

},1000)
