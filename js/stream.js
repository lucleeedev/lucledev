
// dùng chung
var isFalse = false

//  trên mobile và table khi click vào cái thanh bars
// bắt đầu

const headerBars = document.querySelector('.header__bars-list')
const headerSearch = document.querySelector('.header__search-mobile-tablet')
const scrollBar1 = document.querySelector('.header-crossBar-1')
const scrollBar2 = document.querySelector('.header-crossBar-2')
const scrollBar3 = document.querySelector('.header-crossBar-3')


headerSearch.addEventListener("click", function() {
  if (isFalse) {
    scrollBar2.style.opacity = '1'

    scrollBar1.style.transform = 'rotate(0deg)';
    scrollBar1.style.top = '10px'

    scrollBar3.style.transform = 'rotate(0deg)'
    scrollBar3.style.top = '-10px'

    headerBars.style.transform = 'translateY(-101%)'

    isFalse = false
  } else {
    scrollBar2.style.opacity = '0'
    
    scrollBar1.style.transform = 'rotate(45deg)';
    scrollBar1.style.top = '0px'

    scrollBar3.style.transform = 'rotate(-45deg)'
    scrollBar3.style.top = '0px'

    headerBars.style.transform = 'translateY(0)'


    isFalse = true
  }
})

// kết thúc



// khi click vào thẻ <a>

const links = document.querySelectorAll(".nav-link");
const overlay = document.querySelector(".overlay");
const loader = document.querySelector(".loader-web");

links.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.style.display = "block";
    loader.style.display = "block";

    setTimeout(function() {
      overlay.style.display = "none";
      loader.style.display = "none";
      window.location.href = link.href;
    }, 1000);
  });
});

window.onpopstate = function(event) {
  overlay.style.display = "block";
  loader.style.display = "block";
  event.preventDefault();
  window.location.reload();
  setTimeout(function() {
    overlay.style.display = "none";
    loader.style.display = "none";
  }, 500);
};
