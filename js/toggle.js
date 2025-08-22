const toggleBtn = document.getElementById('menuToggle');
const menuList = document.querySelector('nav .right ul');

toggleBtn.addEventListener('click', () => {
  menuList.classList.toggle('show');
});
