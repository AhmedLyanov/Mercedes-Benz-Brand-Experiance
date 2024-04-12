


//nav
setTimeout(() => {
    let animationNav = document.getElementById('AnimationNav')
    animationNav.classList.add('Navigation-For-Model-Class')
}, 1000);







const nav = document.getElementById("AnimationNav");


setTimeout(function() {
  
  nav.style.display = "block";
}, 2000);

//nav



//animationText

let scrollEnabled = false;

document.querySelector('.banner').addEventListener('wheel', function(event) {
    if (!scrollEnabled) {
        event.preventDefault();
    } else {
        return;
    }

    let heading = document.querySelector('.banner h1');
    let fontSize = window.getComputedStyle(heading).getPropertyValue('font-size');
    let currentFontSize = parseFloat(fontSize);
    let newFontSize = currentFontSize * 1.5;

    if (newFontSize <= 1450.56) {
        heading.style.fontSize = newFontSize + 'px';
        let video = document.querySelector('.banner video');
        video.style.opacity = (newFontSize - currentFontSize) / 100;
        
        if (event.deltaY < 0 && currentFontSize > 100) {
            newFontSize = currentFontSize / 1.5;
            if (newFontSize < 100) {
                newFontSize = 100;
            }
            heading.style.fontSize = newFontSize + 'px';
            video.style.opacity = (newFontSize - currentFontSize) / 100;
        }
    } else {
        heading.style.display = 'none';
        let video = document.querySelector('.banner video');
        video.style.opacity = 1;
        scrollEnabled = true;
        document.querySelector('.content').classList.remove('hidden');
    }

    if (newFontSize > 1400.56) {
        heading.style.display = 'none';
        let video = document.querySelector('.banner video');
        video.style.opacity = 1;
        scrollEnabled = true;
        document.querySelector('.content').classList.remove('hidden');
        document.querySelector('main').style.display = 'block';
    }
});


document.querySelector('.content').addEventListener('wheel', function(event) {
    if (!scrollEnabled) {
        event.preventDefault();
    }
});



//скролл тексто и фото
const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function(){
  for(let i = 0; i < revealElements.length; i++){
    const isElementsOnScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight;
    
    if(isElementsOnScreen){
      revealElements[i].classList.add("revealed")
    } else {
      revealElements[i].classList.remove("revealed")
    }
  }
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);

//скролл тексто и фото