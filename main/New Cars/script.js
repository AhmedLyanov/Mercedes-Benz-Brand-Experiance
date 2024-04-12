//Header
const wordsTranslations = {
    'Login': 'Регистрация',
    'English': 'Английский',
    'Russian': 'Русский',
    'Welcome': 'Добро пожаловать',
    'WelcomeText': 'Вы находитесь на официальном сайте Mercedes-Benz, чтобы ознакомиться со всем, перейдите по этой ',
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

function setDefaultWords() {
    const englishText = document.getElementById('English');
    const russianText = document.getElementById('Russian');
    
    englishText.style.color = "black"; // Возвращаем цвет текста English к исходному
    russianText.style.color = "grey"; // Устанавливаем серый цвет для Russian
}

const translateButton2 = document.querySelector('.Text-Navigation-type-2');

translateButton2.addEventListener('click', () => {
    TranslateWords();
    setDefaultWords();
});


//Header


//nav
setTimeout(() => {
    let animationNav = document.getElementById('AnimationNav')
    animationNav.classList.add('Navigation-For-Model-Class')
}, 1000);







const nav = document.getElementById("AnimationNav");


setTimeout(function() {
  
  nav.style.display = "block";
}, 1000);




setTimeout(() => {
    let animationText = document.getElementById('Class-Model-Text')
    if(animationText.style.display == 'none'){
        animationText.style.display = 'block'
    }



}, 2000);





setTimeout(function() {
    document.getElementById("TransformDivButtonNav").style.display = "block";
  }, 3000);
  
//nav



//Hover Buttons Nav
function changeColor(element) {
    let allElements = document.getElementsByClassName('ButtonForModel');
    for (let i = 0; i < allElements.length; i++) {
        if (allElements[i] === element) {
            element.style.color = 'white';
        } else {
            allElements[i].style.color = 'gray';
        }
    }
}

function resetColor(element) {
    let allElements = document.getElementsByClassName('ButtonForModel');
    for (let i = 0; i < allElements.length; i++) {
        allElements[i].style.color = 'white';
    }
}

//Hover Buttons Nav

function toggleNavigation() {
    var navElement = document.getElementById('AnimationNav');
    navElement.classList.toggle('closed'); // Переключаем класс closed
}



