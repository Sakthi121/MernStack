
//program for sum of the two numbers using arrow function
//  const Addition=(a,b)=>{
//     return a+b ;
// }
//  const Subtraction=(a,b)=>{
//     return a-b;
// }
//  const Mutiplication=(a,b)=>{
//     return a*b;
// }
//  const Division=(a,b)=>{
//     return a/b;
// }

// console.log('Addition = '+ Addition(40,50));
// console.log('Subtraction' + Subtraction(40,50));
// console.log('Multiplication = '+ Mutiplication(40,50));
// console.log('Division = '+ Division(40,50));

// let n1=parseInt(process.argv[2]);
// let n2=parseInt(process.argv[3]);
//let n3=process.argv[4];
// switch(process.argv[4])
// {
//     case '+':
//         console.log('Addition = '+ Addition(n1,n2));
//         break;
//     case '-':    console.log('Subtraction' + Subtraction(n1,n2));  break;
//     case '*':    console.log('Multiplication = '+ Mutiplication(n1,n2)); break;
//     default :    console.log('Division = '+ Division(n1,n2));

// }
// console.log('Addition = '+ Addition(n1,n2));
// console.log('Subtraction' + Subtraction(n1,n2));
// console.log('Multiplication = '+ Mutiplication(n1,n2));
// console.log('Division = '+ Division(n1,n2));

//module.exports= {Addition};

//-------------------------------------- FILES -----------------------------------------------------------------//
// READ A FILE
/*
const fs= require('fs');
fs.readFile(`${__dirname}/states.txt`,(err,data) =>{
    if(err){
        console.log('ERROR');

    }
    else{
        console.log(data.toString());
    }
}
)*/



// const name='sakthi'
// console.log(`hello ${name}`);


// WRITE A FILE

// const fs= require('fs');
// const inputData=' who is representative of cse b';
// fs.writeFile(`${__dirname}/states.txt`,inputData,(err) =>{
//     if(err){
//         console.log('ERROR');

//     } 
//     else{
//         console.log("Data has been written");
//     }


// });
// // non bloging statement - execute without waiting

//<--------------------------------------------------->>>><<<<-------------------------------------------------------->>
const fs= require('fs');

function read(filePath)
{
  return new Promise((resolve,reject)=>{
  fs.readFile(filePath,(err,data)=>{
    if(err) {
        reject('Failed')
    }
    else{
        resolve(data);
    }
  })
})
}





function write(filePath,input)
{
    return new Promise((resolve,reject)=>{

    
    fs.appendFile(filePath,input,(err) =>{
            if(err){
                reject('Failed')
    }
            else{
         resolve(input);
            }
        
        })
})
}

/*
read(`${__dirname}/states.txt`)
.then((data)=>{

    console.log(data.toString());
}).catch((err)=>{
    console.log(err);
})

*/
let n3=process.argv[2];
write(`${__dirname}/states.txt`,"n3")
.then((data)=>{

    console.log(data.toString());
}).catch((err)=>{
    console.log(err);
})
