let dot=document.querySelector('.dot');
document.addEventListener("mousemove",(ele)=>{
    dot.style.left=ele.clientX+"px";
    dot.style.top=ele.clientY+"px";
    
}
)