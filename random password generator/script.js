let main=document.querySelector('.main');
let num=document.querySelector('.number');
let your=document.querySelector('.your');
let button=document.querySelector('.submit');
 num.addEventListener("input",function(val){
        let nums=Number(val.target.value);
        console.log(nums)
        button.addEventListener("click",function(val){
            

    let caps='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let str='';

    for(let i=0;i <nums;i++){
        str+=caps[Math.floor(Math.random()*caps.length)];
    }
    your.textContent=str;
})

    })
