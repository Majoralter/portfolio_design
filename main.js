import Swiper from "swiper/bundle"
import "swiper/css/bundle"

const swiper = new Swiper(".swiper",{
    direction: "horizontal",
    loop: true,
    speed: 600,
    spaceBetween: 20,
    grabCursor: true,
    autoplay: true,

    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        slideShadows: !1,
        scale: .9
    },

    breakpoints: {
        475:{
            slidesPerView: 1.4
        },

        768:{
            slidesPerView: 1.8
        },

        992:{
            slidesPerView: 2.2
        },

        1280:{
            slidesPerView: 2.8
        }
    }
})