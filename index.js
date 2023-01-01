
const openBtnRef = document.querySelector('.open-modal');
const closeBtnRef = document.querySelector('.close-modal');
const overlayRef = document.querySelector('.overlay');


openBtnRef.addEventListener('click',openModal );
closeBtnRef.addEventListener('click',closeModal );
overlayRef.addEventListener('click', onOverlayClick);


function openModal(){
    overlayRef.classList.add('open-overlay');
    window.addEventListener('keydown',onEscPress);
}

function closeModal(){
    overlayRef.classList.remove('open-overlay');
    window.removeEventListener('keydown',onEscPress );
}


function onOverlayClick(e){
    if(e.target === e.currentTarget){
        closeModal()
    }
}

function onEscPress(e){
    if(e.code === 'Escape'){
        closeModal()
    }
}