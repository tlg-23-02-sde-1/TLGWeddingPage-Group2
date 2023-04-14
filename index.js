home.addEventListener("click",()=> {
    location.href = "./index.html"
})
plan.addEventListener("click",()=> {
    location.href = "./Plan/plan.html"
})
rsvp.addEventListener("click",()=> {
    location.href = "./RSVP/rsvp.html"
})
gifts.addEventListener("click",()=>{
    location.href = "./Gifts/gifts.html"
})
photos.addEventListener("click",()=> {
    location.href = "./Photos/photos.html"
})
login.addEventListener("click",()=> {
    location.href = "./Login/login.html"
})

addEventListener("DOMContentLoaded", (event)=> {
    event.preventDefault();
    if(JSON.parse(localStorage.getItem("timer")).timer) {
        addTimer();
    }
})

addEventListener("DOMContentLoaded", (event)=> {
    event.preventDefault();
    if(JSON.parse(localStorage.getItem("color")).color) {
        document.getElementById("first_section").style.color = "rgb(0,0,0)";
        document.getElementById("home").style.color = "rgb(0,0,0)";
        document.getElementById("home").style.borderColor = "rgb(0,0,0)";
        document.getElementById("plan").style.color = "rgb(0,0,0)";
        document.getElementById("plan").style.borderColor = "rgb(0,0,0)";
        document.getElementById("rsvp").style.color = "rgb(0,0,0)";
        document.getElementById("rsvp").style.borderColor = "rgb(0,0,0)";
        document.getElementById("photos").style.color = "rgb(0,0,0)";
        document.getElementById("photos").style.borderColor = "rgb(0,0,0)";
        document.getElementById("gifts").style.color = "rgb(0,0,0)";
        document.getElementById("gifts").style.borderColor = "rgb(0,0,0)";
    }
})

function addTimer() {

    /*
    Countdown Timer till 15 APR, 2024 10:00AM
    */

    let timer_ctner = document.createElement("box");
    timer_ctner.setAttribute("id","timer");
    document.getElementById("first_section").appendChild(timer_ctner);
    var countDownDate = new Date("Apr 15, 2024 10:00:00").getTime();

    var x = setInterval(()=> {
        var now = new Date().getTime();
        var mildistance = countDownDate - now;
        var distance = Math.floor(mildistance/1000);
        var days = Math.floor(distance/(60*60*24));
        var hours = Math.floor((distance%(60*60*24))/(60*60));
        var minutes = Math.floor((distance%(60*60))/(60));
        var seconds = Math.floor((distance%(60)));

        if(document.getElementById("timer") == null) {
            return;
        }
        document.getElementById("timer").textContent = 
        `${days} days ${hours} hrs ${minutes} mins ${seconds} secs`

        if(distance < 0) {
            clearInterval(x);
            document.getElementById("timer").textContent = "Married!";
        }
    }, 1000);
}

