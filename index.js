// document.write("Hello Using JS");
// const a=89;
// console .log("a="+a);

// var a = 72;

// if (a > 30) {
//     var a = 100;
//     console.log("a inside the block = " + a);
// }

// console.log("a outside the block = " + a);


// const sum=function (a,b){
//     return a+b;
// }
// const data=sum(20,20);
// console.log("Result="+data);

//ARROW FUNCTION
// const msg=(mymsg)=>{
//     console.log("Hii"+mymsg)
// }
// msg("Welcome to FSD");

// const a=(val)=>{
//     return Math.sqrt(val);
// }
// const result=a(20);
// console.log("Result ="+result)


// IIFE

// (()=>{console.log("Hiiii......IIFE")})();
// console.log("Fisrt")
// // console.log("Second")
// // setTimeout(()=>{console.log("Second")},100)
// for(i=0;i<100000;i++){
//     console.log("Second")

// }
// console.log("Third")


// callback example;

// setTimeout(()=>{
//     console.log("1");
//     setTimeout(()=>{
//          console.log("2");
//         setTimeout(()=>{
//              console.log("3");
//             setTimeout(()=>{
//                  console.log("4");
//                 setTimeout(()=>{
//                      console.log("5");
//                     setTimeout(()=>{
//                          console.log("6");
//                         setTimeout(()=>{
//                              console.log("7");
//                             setTimeout(()=>{
//                                  console.log("8");
//                                 setTimeout(()=>{
//                                      console.log("9");

//                                 },1000)
//                             },1000)
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)

//     },1000)
// },1000)


// Promises

const myPromise=new Promise((resolve,reject)=>{
    username= "ptomer540";
    password = "1234";
    if (username=="ptomer540"&& password=="1234"){
        resolve("success")
        }else{
            reject("username or password is incorrect")
        
    }})
    // myPromise.then((msg)=>{
    //     console.log("msg")
    // }).catch((msg)=>{
    //     console.log(msg)
    // }).finally(()=>{
    //     console.log("All the resources have been closed/memory released")
    // })


async function handleLogin(){
    try{
        await myPromise
    }catch(e){
        console.log(e)
    }finally{
        console.log("All the resources have been closed/memory released")
    }
}
handleLogin();