


//Плавная амниация хедера
let OneAnimationWebSite = document.getElementById('AnimationForIntroSite');

setTimeout(() => {
    OneAnimationWebSite.classList.add('AnimationForWebSiteIntroOff');
    
    
    setTimeout(() => {
        OneAnimationWebSite.remove(); 
    }, 1000);
}, 2000);

//Плавная амниация хедера



//Встроенный перевод текста
const wordsTranslations = {
    'Login': 'Регистрация',
    'English': 'Английский',
    'Russian': 'Русский',
    'Welcome': 'Добро пожаловать',
    'WordNawOne': 'Искусство и культура',
    'WordNawTwo':'Устойчивость',
    'WordNawThree': 'Дизайн',
    'WordNawFour':'Инновация',
    'WordNawFive':'Эксклюзивный',
    'WordNawSix':'Транспортные средства'
    
};

function TranslateWords() {
    for (const word in wordsTranslations) {
        const elements = document.querySelectorAll(`*[data-i18n="${word}"]`);
        const ColorText = document.getElementById('Russian')
        for (const element of elements) {
            element.innerText = wordsTranslations[word];
            ColorText.style.color = "white"; 
        }
    }

}

const translateButton = document.querySelector('.Text-Navigation-type-2');

translateButton.addEventListener('click', () => {
    TranslateWords();
});
//Встроенный перевод текста




//Появление nav при наведении на header
    function showNavigation() {
        let navigation = document.querySelector('.Navigation');
        if (navigation.style.display === 'none') {
            navigation.style.display = 'block';
        }
    }

    function hideNavigation() {
        let navigation = document.querySelector('.Navigation');
        if (navigation.style.display !== 'none') {
            
            navigation.style.display = 'none';
        }
    }




    function SaveStyleForNav(){
        let navigation = document.querySelector('.Navigation');
        if (navigation.style.display === 'none') {
            navigation.style.display = 'block';
        }
    }



    function DeleteStyleForNav() {
        let navigation = document.querySelector('.Navigation');
        if (navigation.style.display !== 'none') {
            navigation.style.key
            navigation.style.display = 'none';

        }
    }
//Появление nav при наведении на header




function GetLoginPage() { 
    let loginGet = document.getElementById('loginButton'); 
     
    document.body.classList.add('AnimationBodyLogin'); 

    setTimeout(() => { 
         window.location.href = '../login/index.html'
    }, 1000); 
}









//Анимация hover на кнопках в nav
function changeColor(element) {
    let allElements = document.getElementsByClassName('color-change');
    for (let i = 0; i < allElements.length; i++) {
        if (allElements[i] === element) {
            element.style.color = 'white';
        } else {
            allElements[i].style.color = 'gray';
        }
    }
}

function resetColor() {
    let allElements = document.getElementsByClassName('color-change');
    for (let i = 0; i < allElements.length; i++) {
        allElements[i].style.color = 'white';
    }
}

//Анимация hover на кнопках в nav







//Анимация hover на кнопках во вкладке Vehicles
function changeColor2(element) {
    let allElements = document.getElementsByClassName('color-change2');
    for (let i = 0; i < allElements.length; i++) {
        if (allElements[i] === element) {
            element.style.color = 'white';
        } else {
            allElements[i].style.color = 'gray';
        }
    }
}

function resetColor2() {
    let allElements = document.getElementsByClassName('color-change2');
    for (let i = 0; i < allElements.length; i++) {
        allElements[i].style.color = 'white';
    }
}
//Анимация hover на кнопках во вкладке Vehicles






//Анимация появления текста на фоне видео
setTimeout(() => {
    let animationtext = document.getElementById('TextAnimationH1Button');
    if(animationtext) {
        setTimeout(() => {
        animationtext.classList.add('IntroVideoText');
        animationtext.style.display = 'block';
        }, 2000);
        
    }
}, 1000);
//Анимация появления текста на фоне видео











//Плавное опускание выниз после прокуртки колесика мыши

document.querySelector('.NewMain').addEventListener('wheel', function(event) {
    if (event.deltaY > 0) { 
        event.preventDefault(); 

        let shadowDiv = document.getElementById('ShadowModeScrollIntoView');

    
        shadowDiv.style.transition = 'height 1ms';
        shadowDiv.style.height = (shadowDiv.clientHeight + 900) + 'px';
        shadowDiv.style.backgroundColor = 'black';
        

        setTimeout(function() {
            shadowDiv.style.height = '100px'; 
            shadowDiv.style.transition = 'height 1s';
            shadowDiv.style.position = 'block'; 
        }, 1000);
        
        
        shadowDiv.scrollIntoView({ behavior: 'smooth' });
    }else{
        

    }
});

//Плавное опускание выниз после прокуртки колесика мыши












//Плавное появление блоков после видео
const imageElement = document.querySelector('.DivBannerOne');

window.addEventListener('scroll', () => {

  const scrollTop = window.pageYOffset;

  const imageTop = imageElement.getBoundingClientRect().top;

  if (scrollTop >= imageTop) {
    imageElement.style.display = 'block';
    imageElement.classList.add('fade-in-left');
  }
});




const imageElement2 = document.querySelector('.DivBannerTwo');

window.addEventListener('scroll', () => {

  const scrollTop = window.pageYOffset;

  const imageTop = imageElement2.getBoundingClientRect().top;

  if (scrollTop >= imageTop) {
    imageElement2.style.display = 'block';
    imageElement2.classList.add('fade-in-right');
  }
});






const imageElementTwo = document.querySelector('.DivBannerTwoDiv');

window.addEventListener('scroll', () => {

  const scrollTop = window.pageYOffset;

  const imageTop = imageElementTwo.getBoundingClientRect().top;

  if (scrollTop >= imageTop) {
    imageElementTwo.style.display = 'block';
    imageElementTwo.classList.add('fade-in-left');
  }
});




const imageElement2Two = document.querySelector('.DivBannerTwoDiv2');

window.addEventListener('scroll', () => {

  const scrollTop = window.pageYOffset;

  const imageTop = imageElement2Two.getBoundingClientRect().top;

  if (scrollTop >= imageTop) {
    imageElement2Two.style.display = 'block';
    imageElement2Two.classList.add('fade-in-right');
  }
});

//Плавное появление блоков после видео DivBannerTwoDiv







//Плавное появлене текста в Footer

const TextElement2Two = document.querySelector('.FooterTextOne');

window.addEventListener('scroll', () => {

  const scrollTop = window.pageYOffset;

  const imageTop = TextElement2Two.getBoundingClientRect().top;

  if (scrollTop >= imageTop) {
    TextElement2Two.style.display = 'block';
    TextElement2Two.classList.add('FooterTextAnimation');
  }
});












const TextElement2 = document.querySelector('.FooterTextOne2');

window.addEventListener('scroll', () => {

  const scrollTop = window.pageYOffset;

  const imageTop = TextElement2.getBoundingClientRect().top;

  if (scrollTop >= imageTop) {
    
    setTimeout(() => {
        TextElement2.style.display = 'block';
        TextElement2.classList.add('FooterTextAnimation');
    }, 1000);
    
  }
});
//Плавное появлене текста в Footer









//Открытие вкладок из nav
let isOpenVehicles = false; 
let isOpenExclusive = false; 

function OpenTheVehicles() {
    const blockVehicles = document.getElementById('OpenVehicles');
    let element = document.getElementById('OpenVehicles');
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    if (isOpenExclusive) {
        return; 
    }

    if (!isOpenVehicles) {
        blockVehicles.classList.add('open'); 
    } else {
        blockVehicles.classList.remove('open'); 
    }

    isOpenVehicles = !isOpenVehicles;
}






function OpenTheExclusive() {
    const blockExclusive = document.getElementById('OpenExclusive');
    let element = document.getElementById('OpenExclusive');
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    if (isOpenVehicles) {
        return; 
    }

    if (!isOpenExclusive) {
        blockExclusive.classList.add('open'); 
    } else {
        blockExclusive.classList.remove('open'); 
    }

    isOpenExclusive = !isOpenExclusive;
}







function OpenTheInnovation() {
  const blockExclusive = document.getElementById('OpenInnovation');
  let element = document.getElementById('OpenInnovation');
  element.scrollIntoView({ behavior: "smooth", block: "start" });
  if (isOpenVehicles) {
      return; 
  }

  if (!isOpenExclusive) {
      blockExclusive.classList.add('open'); 
  } else {
      blockExclusive.classList.remove('open'); 
  }

  isOpenExclusive = !isOpenExclusive;
}








function OpenTheDesign() {
  const blockExclusive = document.getElementById('OpenDesign');
  let element = document.getElementById('OpenDesign');
  element.scrollIntoView({ behavior: "smooth", block: "start" });
  if (isOpenVehicles) {
      return; 
  }

  if (!isOpenExclusive) {
      blockExclusive.classList.add('open'); 
  } else {
      blockExclusive.classList.remove('open'); 
  }

  isOpenExclusive = !isOpenExclusive;
}






function OpenTheSustainability() {
  const blockExclusive = document.getElementById('OpenSustainability');
  let element = document.getElementById('OpenSustainability');
  element.scrollIntoView({ behavior: "smooth", block: "start" });
  if (isOpenVehicles) {
      return; 
  }

  if (!isOpenExclusive) {
      blockExclusive.classList.add('open'); 
  } else {
      blockExclusive.classList.remove('open'); 
  }

  isOpenExclusive = !isOpenExclusive;
}





function OpenTheCulture() {
  const blockExclusive = document.getElementById('OpenCulture');
    let element = document.getElementById('OpenCulture');
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  if (isOpenVehicles) {
      return; 
  }

  if (!isOpenExclusive) {
      blockExclusive.classList.add('open'); 
  } else {
      blockExclusive.classList.remove('open'); 
  }

  isOpenExclusive = !isOpenExclusive;
}




//Открытие вкладок из nav


//Плавное появление текста и окнок в футоре



document.addEventListener("DOMContentLoaded", function() {
    let footerTwo = document.querySelector('.AnimationTextFooter');
    let executed = false;

    window.addEventListener('scroll', function() {
        if (!executed && isScrolledIntoView(footerTwo)) {
            executed = true;
            setTimeout(() => {
                footerTwo.classList.add('show-content');
            }, 0.5000);
          
        }
    });

    
    function isScrolledIntoView(element) {
        let rect = element.getBoundingClientRect();
        return (rect.top <= window.innerHeight * 0.8);
    }
});


document.addEventListener('DOMContentLoaded', function() {
    let iconsBlock = document.querySelector('.WebIconsFooter');
    let iconsBlockVisible = false;

    
    function showIconsBlock() {
        setTimeout(() => {
            let iconsBlockPosition = iconsBlock.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
    
            if (iconsBlockPosition < windowHeight && !iconsBlockVisible) {
                iconsBlock.style.opacity = 1;
                iconsBlockVisible = true;
            }
        }, 0.5000);
     
    }

    window.addEventListener('scroll', showIconsBlock);
});

//Плавное появление текста и окнок в футоре









//Анимация hover у слов футора
function changeColor(element) {
    let allElements = document.getElementsByClassName('color-change3');
    for (let i = 0; i < allElements.length; i++) {
        if (allElements[i] === element) {
            element.style.color = 'white';
        } else {
            allElements[i].style.color = 'rgb(83, 82, 82)';
        }
    }
}

function resetColor() {
    let allElements = document.getElementsByClassName('color-change3');
    for (let i = 0; i < allElements.length; i++) {
        allElements[i].style.color = 'white';
    }
}
//Анимация hover у слов футора

















function displayInfo1(){
    let AnimationTextFooterOne = document.getElementById('purchaseInfo')
    let AnimationTextFooterOne2 = document.getElementById('purchaseInfo2')
    let AnimationTextFooterOne3 = document.getElementById('purchaseInfo3')
    let AnimationTextFooterOne4 = document.getElementById('purchaseInfo4')
    let AnimationTextFooterOne5 = document.getElementById('purchaseInfo5')
    
    if(AnimationTextFooterOne.style.display == 'none'){
        AnimationTextFooterOne.style.display = 'block'
    }else{
        AnimationTextFooterOne.style.display = 'block'
    }



    
    if(AnimationTextFooterOne2.style.display == 'none'){
        AnimationTextFooterOne2.style.display = 'block'
    }else{
        AnimationTextFooterOne2.style.display = 'block'
    }




    
    if(AnimationTextFooterOne3.style.display == 'none'){
        AnimationTextFooterOne3.style.display = 'block'
    }else{
        AnimationTextFooterOne3.style.display = 'block'
    }



    
    if(AnimationTextFooterOne4.style.display == 'none'){
        AnimationTextFooterOne4.style.display = 'block'
    }else{
        AnimationTextFooterOne4.style.display = 'block'
    }



    if(AnimationTextFooterOne5.style.display == 'none'){
        AnimationTextFooterOne5.style.display = 'block'
    }else{
        AnimationTextFooterOne5.style.display = 'block'
    }




}



function displayInfo2(){
    let AnimationTextFooterOne = document.getElementById('financeInfo')
    let AnimationTextFooterOne2 = document.getElementById('financeInfo2')
    let AnimationTextFooterOne3 = document.getElementById('financeInfo3')
 
    
    if(AnimationTextFooterOne.style.display == 'none'){
        AnimationTextFooterOne.style.display = 'block'
    }else{
        AnimationTextFooterOne.style.display = 'block'
    }



    
    if(AnimationTextFooterOne2.style.display == 'none'){
        AnimationTextFooterOne2.style.display = 'block'
    }else{
        AnimationTextFooterOne2.style.display = 'block'
    }




    
    if(AnimationTextFooterOne3.style.display == 'none'){
        AnimationTextFooterOne3.style.display = 'block'
    }else{
        AnimationTextFooterOne3.style.display = 'block'
    }



    



}

function displayInfo3(){
    let AnimationTextFooterOne = document.getElementById('servicesInfo')
    let AnimationTextFooterOne2 = document.getElementById('servicesInfo2')
    let AnimationTextFooterOne3 = document.getElementById('servicesInfo3')
 
    
    if(AnimationTextFooterOne.style.display == 'none'){
        AnimationTextFooterOne.style.display = 'block'
    }else{
        AnimationTextFooterOne.style.display = 'block'
    }



    
    if(AnimationTextFooterOne2.style.display == 'none'){
        AnimationTextFooterOne2.style.display = 'block'
    }else{
        AnimationTextFooterOne2.style.display = 'block'
    }




    
    if(AnimationTextFooterOne3.style.display == 'none'){
        AnimationTextFooterOne3.style.display = 'block'
    }else{
        AnimationTextFooterOne3.style.display = 'block'
    }



    



}















//Переходы между страницами через js
function GetNewWebSite(){
    document.body.id = 'SetEndAnimation';

    setTimeout(() => {
        window.location.href = '../Models/index.html';
    }, 1000);
}

//Переходы между страницами через js

