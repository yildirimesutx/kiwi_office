// JS Single Thread 
// JS Synchronous

// const func1 = () => {
//     console.log("Func 1 Console Log 1");
//     console.log("Func 1 Console Log 2");
//     alert('Alert Message');
// }
// const func2 = () => {
//     console.log("Func 2 Console Log 1");
//     console.log("Func 2 Console Log 2");
// }
// func1();
// func2();

// let x = 10; 
// console.log("1.gelen veri", x);

// setTimeout(() =>{
//     x = x+5;
//     console.log("2.gelen veri", x);
// }, 4000)




// x = x + 5;
// console.log("3.gelen veri", x);

// call stack, faunc ların çalışma sırası

// function func1() {
//     console.log("Ben birinciyim");
//     func2();
//     console.log("Ben tekrar birinciyim");
// }
// function func2() {
//     console.log("Ben ikinciyim");
//     func3();
//     console.log("Ben tekrar ikinciyim");  
// }
// function func3() {
//     console.log("Ben üçüncüyüm");
// }
// func1();

//  for in 

// const sayı = [-5,15,22,-4,45,78,-25]

// let counter = 0

// for (let i in sayı){
//     counter += sayı[i]
// }

// console.log(counter)

// const sayı = [-5,15,22,-4,45,78,-25]

// let counter = 0

// for(let i = 0; i<sayı.length;i++){
//     counter += sayı[i]

// }

// console.log(counter)

// const sayı = [-5,15,22,-4,45,78]

// let counterp = 0;

// let countern = 0;

// for (let i=0; i<sayı.length; i++){
//     if(sayı[i]<0){
//         countern +=sayı[i];
//     }
//     else if(sayı[i]>0){
//         counterp +=sayı[i];
//     }
// }


// // console.log(countern,counterp)


// console.log(`Dizideki pozitif sayıların toplamı: ${counterp}`)
// console.log(`Dizideki negatif sayıların toplamı: ${countern}`)

// const namex = ["Ahmet", "Can", "Mustafa", "Ayşe", "Elif"]

// const surname = ["OZTURK","YILMAZ", "ARI", "CALI", "YAZI"]


// const all = (x,y)=>{
//     let tall = []
//     for(let i in x,y){
//         tall[i] = `${x[i]} ${y[i]}`;
//     }

// return tall
// }

// console.log(all(namex, surname))

// const tum = (a,b)=>{
//     let all = [];
//     for (let i=0; i<namex.length;i++){
//         all[i]=`${a[i]} ${b[i]}`;
        
//     }
//     return all
// }

// console.log(tum(namex, surname))

// let car= ["BMW", "VOLVO", "MİNİ"]

// let all = "";
// for(let x of car){
//     all += x+"";
// }

// console.log(all)

// let student = ["john", "ali", "ahmet"];

// //  arrow function
// const print = (name)=>{
//   console.log(name)
// }

// student.forEach(print)

// anynmous method

// student.forEach((name)=> console.log(name))

// const payments = [100, 300, -200, 500, -400,225,1000,-700]

// let sum = 0

// payments.forEach((p)=>(sum += p));

// console.log(sum)

// const arr = [65,44,12,4,-20,1];

// let sum = 0;

// arr.forEach((i)=>(sum +=i));



// document.querySelector(".sum").innerHTML = sum


// const arr = [65,44,12,4,-20,19];

// let sum = 0;

// arr.forEach(hesapla);


// function hesapla(s){
//     sum +=s
//     document.querySelector(".sum").textContent = sum}

// const tan = [-5,24,-13,7];

// const tanı =[];

// tan.forEach((d,i)=>tanı[i]=d*5);

// console.log(tanı)


// map ile çözüm
// const tanı= tan.map((x)=>x*5);

// console.log(tanı)
price = [105,95,85,120]

const products = price.map(function(d){
    if(d>100){
      return   (d*1.1).toFixed(2);
    }
    else{
       return (d*1.15).toFixed(2)
    }

})

console.log(products)



