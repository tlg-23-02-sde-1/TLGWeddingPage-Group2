home.addEventListener("click", () => {
    location.href = "../index.html";
  });
  plan.addEventListener("click", () => {
    location.href = "../Plan/plan.html";
  });
  rsvp.addEventListener("click", () => {
    location.href = "../RSVP/rsvp.html";
  });
  gifts.addEventListener("click", () => {
    location.href = "../Gifts/gifts.html";
  });
  photos.addEventListener("click", () => {
    location.href = "../Photos/photos.html";
  });
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