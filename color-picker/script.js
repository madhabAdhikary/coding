let colorGenerator = document.querySelector('button');
colorGenerator.addEventListener('click', function(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let result = `rgb(${red},${green},${blue})`;
    document.body.style.backgroundColor = result;
    document.querySelector('h1').innerText = result;
})