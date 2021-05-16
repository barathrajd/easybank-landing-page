const menu = document.querySelector('#menu');
const hamBtn = document.querySelector('#hamburger');
const closeBtn = document.querySelector('#close');
const navbar = document.querySelector('#navbar');
const overlay = document.querySelector('.overlay');

const toggle = () => {
  navbar.classList.toggle('active');
  hamBtn.classList.toggle('hidden');
  closeBtn.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

hamBtn.addEventListener('click', toggle);
closeBtn.addEventListener('click', toggle);
