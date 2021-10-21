const menuPortion = document.querySelector(".menuPortion");
const menuButton = document.querySelector(".menuButton");

menuButton.addEventListener('click', () => {
  menuPortion.classList.toggle('open');
  menuButton.classList.toggle('open');
});
