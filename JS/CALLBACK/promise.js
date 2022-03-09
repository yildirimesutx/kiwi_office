// promise 

// asekron olan istek tamamlandıktan sonra şuradan devam edebilirsin şeklinde kullanılır.

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

function newTodo(todo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            todos.push(todo);
            const e = false;
    
            if(!e){
              resolve(todos);
            }else{
              reject("hata var...")
            }
        },2000)
    })
   
}

newTodo(
    {title: "Todo 4",
    description: "Umutlu ol.."
}).then(response =>{
    console.log("yeni liste", response);
    todoList()
}).catch(e=>{
    console.log(e);
}); */

// todoList();


// promise all

const p1= Promise.resolve("P1")
const p2= new Promise((resolve, reject)=>{
     setTimeout(()=>{
         resolve("Ben 2.Promise'im");
     }, 2000);
});
const p3 = 14021;
const p4 = fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json())

Promise.all([p1,p2,p3,p4]).then(promises=>{
    console.log("promises", promises);
})