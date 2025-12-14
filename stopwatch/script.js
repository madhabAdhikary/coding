let h2= document.querySelector('h2');
let btn= document.querySelector('button');
addEventListener("click",function(){
    let alphabate="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,0,1,2,3,4,5,6,7,8,9";
    let randomindex='';

    for(let i=0;i<8;i++){
        randomindex+=alphabate[randomindex=Math.floor(Math.random() * alphabate.length)];
    }
    h2.textContent=randomindex;
})
