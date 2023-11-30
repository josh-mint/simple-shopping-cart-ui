const cartIcon = document.querySelector('.cart-icon');
const cartDropdownContent = document.querySelector('.cart-dropdown-content');
const cartDropdownArrow = document.querySelector('.dropdown-arrow-container');

cartIcon.onclick = function () {
  cartDropdownContent.classList.toggle('show');
  cartDropdownArrow.classList.toggle('show');
}

window.onclick = function(event) {
  if (!cartIcon.contains(event.target) && !cartDropdownContent.contains(event.target)) {
    if (cartDropdownContent.classList.contains('show')) {
      cartDropdownContent.classList.remove('show');
      cartDropdownArrow.classList.remove('show');
    }
  }
}
