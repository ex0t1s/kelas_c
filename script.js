document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navbarMenu = document.querySelector('.navbar ul');
    
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
      });
    }
  });