var logo_tl = gsap.timeline();

logo_tl.from(".header__logo--sticker", {duration: .3, opacity: 0, scale: 2.5})
.from(".header__logo--park", {duration: .3, opacity: 0, scale: 2.5},"-=0.2")


let header_logo = document.querySelector('.header__logo');

header_logo.addEventListener('mouseover', mouseOver);
header_logo.addEventListener('mouseout', mouseOut);

function mouseOver() {
    gsap.to(".header__logo--sticker", {duration: .5, y: "-10", ease: "circ.out"});
    gsap.to(".header__logo--park", {rotate: 30, duration: .5, y: "10", ease: "circ.out"});
}

function mouseOut() {
    gsap.to(".header__logo--sticker", {duration: .5, y: 0, ease: "circ.out"});
    gsap.to(".header__logo--park", {rotate: 0, duration: .5, y: 0, ease: "circ.out"});
}


gsap.from(".stickerpack-slider", {duration: 1, y: 150, opacity: 0});