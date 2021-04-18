nav = document.getElementById('navbar');
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        nav.style.height = '60px';
      } else {
       nav.style.height = '80px';
      } 
  });
}); 
// DOMContentLoaded  end
