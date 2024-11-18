// HAMBURGER MENU
const hamMenu= document.querySelector('.js-ham-menu');
const  hamMenuContainer = document.querySelector('.js-ham-menu-container');

   hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    hamMenuContainer.classList.toggle('active');
   });
//


  const designBtn = document.querySelector('.design-btn');
const codeBtn = document.querySelector('.code-btn');
const textBtn = document.querySelector('.text-btn');

function designSwitch() {
   if (designBtn.classList.contains('input-btns')) {
     designBtn.classList.remove('input-btns');
     designBtn.classList.add('design-btn');

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
  if (codeBtn.classList.contains('input-btns') ) {
    codeBtn.classList.remove('input-btns');
    codeBtn.classList.add('code-btn');

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
  if (textBtn.classList.contains('input-btns') ) {
     textBtn.classList.remove('input-btns');
     textBtn.classList.add('text-btn');

     codeBtn.classList.add('input-btns');
     codeBtn.classList.remove('code-btn');

     designBtn.classList.add('input-btns');
     designBtn.classList.remove('code-btn');

  } else if (textBtn) {
    textBtn.classList.add('input-btns');
     textBtn.classList.remove('text-btn');
  }
}