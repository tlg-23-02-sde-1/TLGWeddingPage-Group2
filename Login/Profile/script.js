home.addEventListener("click",()=> {
    location.href = "../../index.html"
})
plan.addEventListener("click",()=> {
    location.href = "../../Plan/plan.html"
})
rsvp.addEventListener("click",()=> {
    location.href = "../../RSVP/rsvp.html"
})
gifts.addEventListener("click",()=> {
    location.href = "../../Gifts/gifts.html"
})
photos.addEventListener("click",()=> {
    location.href = "../../Photos/photos.html"
})

function displayEditPage(url) {
    edit_section.innerHTML = '';
    let ipage = document.createElement("iframe");
    ipage.setAttribute("src",url);
    ipage.setAttribute("height","500");
    ipage.setAttribute("width","600")
    edit_section.appendChild(ipage);
    options.innerHTML = "";
    displaySettings();
}

function displaySettings() {
    let mySwitch = document.createElement("label");
    let myInput = document.createElement("input");
    let mySpan = document.createElement("span");
    let label = document.createElement("label");

    label.innerText = "Timer";

    mySwitch.setAttribute("class","switch");
    mySwitch.setAttribute("id","add_timer");
    

    myInput.setAttribute("type","checkbox");
    myInput.setAttribute("aria-checked","false");

    mySpan.setAttribute("class","slider round");
    mySwitch.appendChild(myInput);
    mySwitch.appendChild(mySpan);
    options.appendChild(label);
    options.appendChild(mySwitch);

    let mySwitch2 = document.createElement("label");
    let myInput2 = document.createElement("input");
    let mySpan2 = document.createElement("span");
    let label2 = document.createElement("label");

    label2.innerText = "COLOR";

    mySwitch2.setAttribute("class","switch");
    mySwitch2.setAttribute("id","chng_color");
    

    myInput2.setAttribute("type","checkbox");
    myInput2.setAttribute("aria-checked","false");

    mySpan2.setAttribute("class","slider round");
    mySwitch2.appendChild(myInput2);
    mySwitch2.appendChild(mySpan2);
    options.appendChild(label2);
    options.appendChild(mySwitch2);
}

function addTimer(frameDom) {

    /*
    Countdown Timer till 15 APR, 2024 10:00AM
    */

    let timer_ctner = document.createElement("box");
    timer_ctner.setAttribute("id","timer");
    frameDom.getElementById("first_section").appendChild(timer_ctner);
    var countDownDate = new Date("Apr 15, 2024 10:00:00").getTime();

    var x = setInterval(()=> {
        var now = new Date().getTime();
        var mildistance = countDownDate - now;
        var distance = Math.floor(mildistance/1000);
        var days = Math.floor(distance/(60*60*24));
        var hours = Math.floor((distance%(60*60*24))/(60*60));
        var minutes = Math.floor((distance%(60*60))/(60));
        var seconds = Math.floor((distance%(60)));

        if(frameDom.getElementById("timer") == null) {
            return;
        }
        frameDom.getElementById("timer").textContent = 
        `${days} days ${hours} hrs ${minutes} mins ${seconds} secs`

        if(distance < 0) {
            clearInterval(x);
            frameDom.getElementById("timer").textContent = "Married!";
        }
    }, 1000);
}

function ariaChecker(event) {
    let checker = event.target.getAttribute("aria-checked");
    if(checker === "false") {
        event.target.setAttribute("aria-checked","true");
        return true;
    }
    else {
        event.target.setAttribute("aria-checked","false");
        return false;
    }
}

function colorChange(frameDom,color) {
    frameDom.getElementById("first_section").style.color = color;
    frameDom.getElementById("home").style.color = color;
    frameDom.getElementById("home").style.borderColor = color;
    frameDom.getElementById("plan").style.color = color;
    frameDom.getElementById("plan").style.borderColor = color;
    frameDom.getElementById("rsvp").style.color = color;
    frameDom.getElementById("rsvp").style.borderColor = color;
    frameDom.getElementById("photos").style.color = color;
    frameDom.getElementById("photos").style.borderColor = color;
    frameDom.getElementById("gifts").style.color = color;
    frameDom.getElementById("gifts").style.borderColor = color;
}


buttons_ctner.addEventListener("click", (event)=> {
    if(event.target.textContent === "Edit Landing Page"){
        displayEditPage("../../index.html");

        document.getElementById("add_timer").addEventListener("change", (event) => {
            event.preventDefault();
            let frameDOM = document.querySelector("iframe").contentDocument;
            if(ariaChecker(event) === true){
                let timer = {
                    timer: true
                }
                localStorage.setItem("timer",JSON.stringify(timer));
                addTimer(frameDOM);
            }
            else {
                let timer = {
                    timer: false
                }
                localStorage.setItem("timer",JSON.stringify(timer));
                frameDOM.getElementById("timer").remove();
            }
        })
        document.getElementById("chng_color").addEventListener("change",(event)=> {
            event.preventDefault();
            let frameDOM = document.querySelector("iframe").contentDocument;
            if(ariaChecker(event) === true){
                let color = {
                    color: true
                }
                localStorage.setItem("color",JSON.stringify(color));
                colorChange(frameDOM,"rgb(0,0,0)");
            }
            else {
                let color = {
                    color: false
                }
                localStorage.setItem("color",JSON.stringify(color));
                colorChange(frameDOM,"rgb(159,137,83)");
            }
        })
    }
    if(event.target.textContent === "Edit Plan Page"){
        displayEditPage("../../Plan/plan.html");
    }
    if(event.target.textContent === "Edit Photos Page"){
        displayEditPage("../../Photos/photos.html");
    }
    if(event.target.textContent === "Edit Gifts Page"){
        displayEditPage("../../Gifts/gifts.html");
    }
})