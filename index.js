// HAMBURGER MENU
const hamburgerMenu = document.querySelector('.js-ham-menu');
const navContainer = document.querySelector('.js-nav-container');
const backDrop = document.querySelector('.backdrop');

hamburgerMenu.addEventListener('click', () => {
  document.body.classList.toggle('open');
  navContainer.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');
  backDrop.classList.toggle('active');
});
//

backDrop.addEventListener('click', () => {
  backDrop.classList.toggle('active');
  document.body.classList.toggle('open');
  navContainer.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');
})


const designBtn = document.querySelector('.design-btn');
const codeBtn = document.querySelector('.code-btn');
const textBtn = document.querySelector('.text-btn');
const squareContent1 = document.querySelector('.square-content1');
const squareContent2 = document.querySelector('.square-content2');
const squareContent3 = document.querySelector('.square-content3');

function designSwitch() {
   if (designBtn.classList.contains('input-btns')) {
     designBtn.classList.remove('input-btns');
     designBtn.classList.add('design-btn');

     squareContent1.style.display = "block";
     squareContent2.style.display = "none";
     squareContent3.style.display = "none";

     codeBtn.classList.add('input-btns');
     codeBtn.classList.remove('code-btn');

     textBtn.classList.add('input-btns');
     textBtn.classList.remove('code-btn');

  } else if (designBtn) {
    designBtn.classList.add('input-btns');
     designBtn.classList.remove('design-btn');
  }
}

function codeSwtich() {
  if (codeBtn.classList.contains('input-btns')) {
    codeBtn.classList.remove('input-btns');
    codeBtn.classList.add('code-btn');

    squareContent1.style.display = "none";
    squareContent2.style.display = "block";
    squareContent3.style.display = "none";

    designBtn.classList.remove('design-btn');
    designBtn.classList.add('input-btns');

    textBtn.classList.add('input-btns');
     textBtn.classList.remove('code-btn');

  } else if (codeBtn) {
    codeBtn.classList.add('input-btns');
    codeBtn.classList.remove('code-btn');
  }
}

function textSwtich() {
  if (textBtn.classList.contains('input-btns')) {
     textBtn.classList.remove('input-btns');
     textBtn.classList.add('text-btn');

     squareContent1.style.display = "none";
     squareContent2.style.display = "none";
     squareContent3.style.display = "block";

     codeBtn.classList.add('input-btns');
     codeBtn.classList.remove('code-btn');

     designBtn.classList.add('input-btns');
     designBtn.classList.remove('code-btn');

  } else if (textBtn) {
    textBtn.classList.add('input-btns');
     textBtn.classList.remove('text-btn');
  }
}