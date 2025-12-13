/*const promisesOne = new Promise ((resolve,reject) =>{
    setTimeout(()=>{
        console.log('async task is completed')
        resolve();
    },1000)
})
promisesOne.then(()=>{
    console.log('task completed')
})

new Promise((resolve,reject) =>{
    setTimeout(()=>{
        console.log('async task 2 complette');
        resolve();
    },2000)
})
.then(()=>{
    console.log('task 2 completerrrrrr')
}); */

/*
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            user: 'madhab',
            email : 'madhabExample@gmail.com'
        })


    },1000)
})
promise3.then((user)=>{
    console.log(user)

}) */
/*
const promise4 = new Promise ((resolve,reject) =>{
    setTimeout (()=>{
        let error = false;
        if(!error){
            resolve({
                username: 'madhab',
                pass :123
            })
        }
        else{
            reject('error')
            
        }
    },1000)
})
promise4
.then((userinfo)=>{
    console.log(userinfo)
    return userinfo.username
})
.then((username)=>{
    console.log(username)
})
.catch((err)=>{
    console.log(err)

})
.finally(()=>{
    console.log('the enddddddd')
})
*/

const promise5 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({
                username: 'js',
                pass :'js123'
            })
        }
        else{
            reject('js-error')
            
        }

    },1000)
})
async function consumedPromise5(){
    try {
        const responsed = await promise5;
        console.log(responsed)
        
    } catch (error) {
        console.log(error)
        
    }
}
consumedPromise5();


// fetch practice 
/*
async function getUser() {
    try {
      let url = await fetch('https://jsonplaceholder.typicode.com/users')
     let data =  await url.json();
     console.log(data)

    } catch (error) {
        console.log('error', error)
        
    }
}
getUser();
*/

fetch('https://api.github.com/users')
.then((info)=>{
    return info.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    
        console.log(error)
    
})