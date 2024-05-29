let TopSwiper = new Swiper(".top__swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
});


let total = 0;
function CalculateTotal() {
    $("input:checkbox").each(function () {
        if ($(this).is(":checked")) {
            total += parseFloat($(this).val());
        }
    });
    $("#price").html(total);
}

$("input:checkbox").change(function () {
    total = 0;
    CalculateTotal();
}).trigger("change");


let swiper = new Swiper(".selection__swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
    mousewheel: true,
    keyboard: true,
});


let accessoriesSwiper = new Swiper(".accessories__swiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next3",
        prevEl: ".swiper-button-prev3",
    },
    mousewheel: true,
    keyboard: true,
});


document.addEventListener('DOMContentLoaded', () => {

    const elements = document.querySelectorAll('[data-mask="phone"]')
    const phoneOptions = {
      mask: '+{7}(000)000-0000'
    }
    elements.forEach(el => {
      IMask(el, phoneOptions)
    })
  
  })