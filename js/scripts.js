var slide_combos = new Swiper(".slide-combos", {
	loop: true,
	slidesPerView: 3,
	spaceBetween: 32,
	speed: 800,
	pagination: {
		el: ".s-combos .controls .swiper-pagination",
		clickable: true
	},
	navigation: {
		nextEl: ".s-combos .area-slide .btn-next",
		prevEl: ".s-combos .area-slide .btn-prev"
	}
});

const copy_year = document.querySelector(".year");

copy_year.innerHTML = new Date().getFullYear();
copy_year.style.fontFamily = "Ubuntu";
copy_year.style.fontWeight = 600;
