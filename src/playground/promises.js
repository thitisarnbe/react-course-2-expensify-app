const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve({
        //     name:'Be',
        //     age:'26'
        // });
        reject('Something went wrong!');
    }, 2000)
  
});

console.log('before');

promise.then((data,other)=>{
    console.log(data);
}).catch((error)=>{
    console.log('error: ',error);
});

console.log('after'); 