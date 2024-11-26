function openArticle(articleUrl) {
    window.location.href = articleUrl;
}

let menuBtn = document.querySelector('#menu-btn');
let navig = document.querySelector('.navig');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times')
    navig.classList.toggle('active');
}