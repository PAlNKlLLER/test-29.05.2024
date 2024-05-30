let TopSwiper = new Swiper(".top__swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
      },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        1400: {
            spaceBetween: 20,
        },
        1000: {
            spaceBetween: 15,
        },
        720: {
            spaceBetween: 10,
        },
        320: {
            spaceBetween: 7,
        }
    }
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
    breakpoints: {
        1400: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1150: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1000: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        770: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 38,
        },
        570: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1,
        }
    }
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
    breakpoints: {
        1400: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1150: {
            slidesPerView: 4,
            spaceBetween: 45,
        },
        1050: {
            slidesPerView: 4,
            spaceBetween: 11,
        },
        950: {
            slidesPerView: 3,
            spaceBetween: 76,
        },
        850: {
            slidesPerView: 3,
            spaceBetween: 26,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 11,
        },
        720: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        570: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1,
        }
    }
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


  $(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.top-menu').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});