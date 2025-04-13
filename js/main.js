// loader
$(window).on("load", function () {
  setTimeout(function () {
    $(".loader-container").fadeOut("slow", function () {
      $(".loader-container").remove();
    });
  }, 1000);
});
// toggle sidebar
let allLinks = document.querySelector(".links");
let toggleBtn = document.querySelector(".coll-icon");
let navLayer = document.querySelector(".nav-layer");

if (allLinks) {
  toggleBtn.addEventListener("click", function () {
    navLayer.classList.toggle("slideto");
    allLinks.classList.toggle("slideto");
    this.classList.toggle("active");
  });
  navLayer.addEventListener("click", function () {
    toggleBtn.classList.remove("active");
    allLinks.classList.remove("slideto");
    this.classList.remove("slideto");
  });
}

// //  add active class to cuurent link
$(".links > li > a").each(function () {
  if (window.location.href.includes($(this).attr("href"))) {
    $(this).addClass("active");
  }
});

$(".links > li > a").on("click", function () {
  navLayer.classList.remove("slideto");
  allLinks.classList.remove("slideto");
  toggleBtn.classList.remove("active");

  $(".links > li > a").removeClass("active");
  $(this).addClass("active");
})
$(".footer-colomn-me  li > a").on("click", function () {
  $(".links > li > a").removeClass("active");
  $('.' + $(this).data("id")).addClass("active");
})


window.onscroll = function () {
  if (window.scrollY > 90) {
    $(".header").addClass("header-bg");
   
  } else{
    
    $(".header").removeClass("header-bg");
  }
};


// add active based on scroll
// $(window).on("scroll", function () {
//   let scrollPos = $(this).scrollTop();
//   $(".shared-section").each(function () {
//     let sectionOffset = $(this).offset().top;
//     if (sectionOffset >= scrollPos) {
//       $(".links > li > a").removeClass("active");
//       $('.' + $(this)).addClass("active");
//     }
//   });
// });
