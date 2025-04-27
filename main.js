
const burgerButton = document.querySelector('.burger-button');

const dialogMenu = document.querySelector('.dialog-menu'); 
const buttonClose = document.querySelector('.button-close');

burgerButton.addEventListener('click', ()=> {
  dialogMenu.classList.add('dialog-menu--active');
});

buttonClose.addEventListener('click', () => {
  dialogMenu.classList.remove('dialog-menu--active');

});