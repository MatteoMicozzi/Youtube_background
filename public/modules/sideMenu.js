const menuPortion = document.querySelector(".menuPortion");
const menuButton = document.querySelector(".menuButton");

menuButton.addEventListener('click', () => {
  menuPortion.classList.toggle('openMenu');
  menuButton.classList.toggle('closingButton');
});
