const tbody =document.getElementById("tbodyUserList");
const loading = document.getElementById("loading");

window.onload = ()=>{
    getApiUserList();
    setInterval(getApiUserList,5000)
    
}

const getApiUserList = async()=>{
    showLoading()
    // axios
try {
    const responseData = await axios("https://reqres.in/api/users?page=2")
    const {data:userListArray} = responseData.data;
    console.log(userListArray);
    if(userListArray.length === 0){
        alert("userlist not found");
        removeLoading()
    }else{
        tbody.innerHTML ="";
        userListArray.forEach(customer => {
       tbody.innerHTML += 
       `<tr>
                 <td>
                     ${customer.id}
                </td>
                <td>
                  <img src="${customer.avatar}">
                </td>
                <td>
                   ${customer.email}
                </td>
                <td>
                   ${customer.first_name}
                </td>
                <td>
                   ${customer.last_name}
                </td>
       </tr>`
        });

    }

} 
catch (error) {
    alert(error);

    // gerçek kullanımda databese de bulunan error table alınan hatalar gönderilir
    // send errors to api and database(errorLogs table)
    // postErrorLog("userList", "getApiUserList", error)
    removeLoading()
}
    removeLoading()
} 


