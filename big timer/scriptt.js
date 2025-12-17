let btn=document.querySelector("button");
function getTheme(theme){
    document.body.classList.remove("dark",'light');
    document.body.classList.add(theme);
}
btn.addEventListener("click",function(){
    let currentTheme=document.body.classList.contains("dark")?'light':'dark';
    let newtheme=currentTheme=='light'?'dark':'light';
    getTheme(newtheme);
    localStorage.setItem("theme",newtheme);

})