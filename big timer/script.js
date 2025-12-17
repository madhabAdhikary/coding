function getTheme(theme){
  document.body.classList.remove("dark",'light');
  document.body.classList.add(theme);
}
function getsystem(){
  return window.matchMedia('(prefers-color-scheme: dark)').matches
  ?'dark':'light';


}
function setinitialTheme(){
  const savedTheme=localStorage.getItem("theme");
  getTheme(savedTheme || getsystem());
}
setinitialTheme();
window.matchMedia('(prefers-color-scheme: dark)').
addEventListener("change",function(){
  if(!localStorage.getItem("theme")){
    getTheme(getsystem());
  }
});
document.querySelector("button").addEventListener('click',function (){
  const currentTheme=document.body.classList.contains("dark")
  ?'dark'
  :'light';
  const newTheme=currentTheme==="dark"?"light":"dark";
  getTheme(newTheme);
  localStorage.setItem("theme",newTheme);
});
