home.addEventListener("click",()=> {
    location.href = "../index.html"
})
plan.addEventListener("click",()=> {
    location.href = "../Plan/plan.html"
})
rsvp.addEventListener("click",()=> {
    location.href = "../RSVP/rsvp.html"
})
gifts.addEventListener("click",()=>{
    location.href = "../Gifts/gifts.html"
})
photos.addEventListener("click",()=> {
    location.href = "./photos.html"
})

var scroll = window.requestAnimationFrame || 
            function (callback){window.setTimeout(callback,1000/60)};

var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

loop();

function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }