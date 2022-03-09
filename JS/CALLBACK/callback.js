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
// price = [105,95,85,120]

// const products = price.map(function(d){
//     if(d>100){
//       return   (d*1.1).toFixed(2);
//     }
//     else{
//        return (d*1.15).toFixed(2)
//     }

// })

// console.log(products)

// console.log("Hello.");
// setTimeout(function() {
//   console.log("Goodbye!");
// }, 2000);
// console.log("Hello again!");

// ****************Asynchronous ****************

// let test = function(){
//     console.log("Star of code");

//     alert("Notice Me!");

//     console.log("End of code");
// };


// let test2 = function() {
//     console.log("Now T get attention.");
// };

// test();
// test2();

// let test = function(){
//     setTimeout(function() {
//         console.log("Star of code");

//         alert("Notice Me!");
    
//         console.log("End of code");
//     }, 5000)
    
// };


// let test2 = function() {
//     console.log("Now T get attention.");
// };

// test();
// test2();

// function mesut(){
//     console.log("merhaba Mesut")
// }

// let task = setTimeout(mesut,3000);

// console.log("this message is shown first");
// console.log("ID: ", task);

// // program to stop the setTimeout() method
// let count = 0;

// // function creation
// function increaseCount() {
//   count += 1;
//   console.log(count);
// }

// let id = setTimeout(increaseCount, 3000);
// clearTimeout(id);
// console.log('setTimeout is stopped.');
// expected output: setTimeout is stopped

// function showTime() {
//     let dateTime = new Date();
//     let time = dateTime.toLocaleTimeString();
    
//     document.querySelector(".sum").innerText = time

//     setTimeout(showTime,3000)
// }

// // let a = showTime()
// // console.log(a) 
// showTime()


// let dateTime = new Date()

// console.log(dateTime)

// program to stop the setInterval() method after five times
// let count = 0;
// let interval = setInterval(function () {
//   count += 1;
//   if (count === 5) {
//     clearInterval(interval);
//   }
//   let dateTime = new Date();
//   let time = dateTime.toLocaleTimeString();
//   console.log(time);
// }, 2000);

// console.log(time)

// console.log(time)


// let count = 0
// let my = setInterval(()=>{
//     if( count ===10){
//       clearInterval(my)
//     }  
//    count += 1
//    console.log(count)
// },2000)

// let myCount = 0
// let myInterval = setInterval(function(){
//      myCount += 1
//      if(myCount===6){
//        clearInterval(myInterval)
//      }

//      let asTime= new Date()
//      let myTime= asTime.toLocaleTimeString();
//      console.log(myTime)
// },2000)

// setTimeout(() => {
//   console.log('john:Hi');
//   setTimeout(() => {
//     console.log('Sarah: Hello');
//     setTimeout(() => {
//       console.log('John: How Are you?');
//       setTimeout(() => {
//         console.log('Fine and you?');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// ******** Promise **************


// const cayDemle() =>{
//   suyuKaynat()
//      .then((durum1)=>{
//        console.log(durum1);
//        return cayEkle();
//      })
//      .then((durum2)=>{
//        console.log(durum2)
//        bekle(); 
//        return afiyet();
//      })
//      .then((durum3)=>{
//        console.log(durum3);
//      })
//      .catch((err)=>{
//     console.log(err);
//      })
// };


// 'cay hazır afiyet olsun'

// callback example 

/* const todos =[
    {title: "Todo 1", description:"JS calıs" },
    {title: "Todo 2", description:"JS ogren" },
    {title: "Todo 3", description:"JS uygula" },
]

let todoListElement = document.getElementById("todoList");

function todoList(){
    setTimeout(()=>{
        let todoItems=""
        todos.forEach(item=>{
            todoItems +=`
            <li>
                  <b>${item.title}</b>
                  <p>${item.description}</p>
            </li>`
        })
        todoListElement.innerHTML = todoItems;
    }, 1000)
}

// todoList()


function newTodo(todo, callback){
    setTimeout(()=>{
        todos.push(todo);
        callback()
    },2000)
}

newTodo(
    {title: "Todo 4",
    description: "Umutlu ol.."
},
todoList
) */




 


