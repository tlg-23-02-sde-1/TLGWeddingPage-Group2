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

    mySpan.setAttribute("class","slider round");
    mySwitch.appendChild(myInput);
    mySwitch.appendChild(mySpan);
    options.appendChild(label);
    options.appendChild(mySwitch);
}

function addTimer() {

    /*
    Countdown Timer till 15 APR, 2024 10:00AM
    */
    
    let timer_ctner = document.createElement("box");
    timer_ctner.setAttribute("id","timer");
    
    var countDownDate = new Date("Apr 15, 2024 10:00:00").getTime();

    var x = setInterval(()=> {
        var now = new Date().getTime();
        var mildistance = countDownDate - now;
        var distance = Math.floor(mildistance/1000);
        var days = Math.floor(distance/(60*60*24));
        var hours = Math.floor((distance%(60*60*24))/(60*60));
        var minutes = Math.floor((distance%(60*60))/(60));
        var seconds = Math.floor((distance%(60)));

        document.getElementById("timer").textContent = 
        `${days} days ${hours} hrs ${minutes} mins ${seconds} secs`

        if(distance < 0) {
            clearInterval(x);
            document.getElementById("timer").textContent = "Married!";
        }
    }, 1000);
}


buttons_ctner.addEventListener("click", (event)=> {
    if(event.target.textContent === "Edit Landing Page"){
        displayEditPage("../../index.html");
        color_switch.addEventListener("change", )
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