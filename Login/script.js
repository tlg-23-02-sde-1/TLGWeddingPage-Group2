register.addEventListener("click",()=>{
    location.href="./register.html";
})

login.addEventListener("submit",(event)=> {
    event.preventDefault();
    let username = login.username.value;
    let password = login.password.value;
    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password
        }),
    })
    .then((res)=>res.json())
    .then((data)=>{
        if(data.success) {
            location.href=data.url;
        }
        else {

        }
    })
})