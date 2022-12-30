const nav = document.querySelector('#nav')
const burger = document.querySelector('#burger')
const burgerImg = document.querySelector('#burger-img')

burger.onclick = ()=>{
    if (nav.classList.toggle('open')){
        burgerImg.src = 'img/icon/NAV CLOSE.svg'
        document.body.style = 'overflow: hidden'
    }else{
        burgerImg.src = 'img/icon/NAV.svg'
        document.body.style = 'overflow: auto'
    }
}

AOS.init({
    disable: 'phone',
    once: true
});