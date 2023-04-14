home.addEventListener("click",()=> {
    location.href = "../index.html"
})
plan.addEventListener("click",()=> {
    location.href = "../Plan/plan.html"
})
rsvp.addEventListener("click",()=> {
    location.href = "./rsvp.html"
})
gifts.addEventListener("click",()=>{
    location.href = "../Gifts/gifts.html"
})
photos.addEventListener("click",()=> {
    location.href = "../Photos/photos.html"
})

guests.addEventListener("submit",(event)=> {
    event.preventDefault();
    let fname = guests.fname.value;
    let lname = guests.lname.value;
    let email = guests.email.value;
    let address = guests.address.value;
    let city = guests.city.value;
    let state = guests.state.value;
    let headCount = guests.headCount.value;
    let zip = guests.zip.value;
    let meal = guests.meal.value;
    let yes_no = guests.yes_no.value;

    fetch("http://localhost:3000/guests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fname,
            lname,
            email,
            address,
            city,
            state,
            headCount,
            zip,
            meal,
            yes_no
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