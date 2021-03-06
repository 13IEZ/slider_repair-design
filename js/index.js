'use strict';
const btnNext = document.querySelector('#right');
const btnPrev = document.querySelector('#left');

const img = document.querySelector('.completed-project-wrapper_item__img');

const titles = document.querySelectorAll('.completed-project-wrapper_item__title');
const activeTitle = 'active';

const circles = document.querySelectorAll('.completed-project-wrapper_item-nav__circle');
const activeCircle = 'full-circle';

const city = document.querySelector('.city');
const area = document.querySelector('.area');
const time = document.querySelector('.time');

const dbCarousel = [
	{
		img: 'url(uploads/completed-project-pic-1.jpg)',
		city: 'Rostov-on-Don \n LCD admiral',
		area: '81 m2',
		time: '3.5 months'
	},
	{	img: 'url(uploads/completed-project-pic-2.jpg)',
		city: 'Sochi \n Thieves',
		area: '105 m2',
		time: '4 months'
	},
	{
		img: 'url(uploads/completed-project-pic-3.jpg)',
		city: 'Rostov-on-Don \n Patriotic',
		area: '93 m2',
		time: '3 months'
	}
];

let currTarget = 1;

const setSlide = i => {
	titles.forEach(elem => elem.classList.remove(activeTitle));
	titles[i].classList.add(activeTitle);
	circles.forEach(elem => elem.classList.remove(activeCircle));
	circles[i].classList.add(activeCircle);
	city.innerText = dbCarousel[i].city;
	area.innerText = dbCarousel[i].area;
	time.innerText = dbCarousel[i].time;
	img.style.backgroundImage = dbCarousel[i].img;
};


btnNext.addEventListener('click', (e) => {
	if (currTarget === dbCarousel.length) {
		currTarget = 1;
		setSlide(currTarget - 1);
	} else {
		currTarget++;
		setSlide(currTarget - 1);
	}
});

btnPrev.addEventListener('click', () => {
	if (currTarget === 1) {
		currTarget = dbCarousel.length;
		setSlide(currTarget - 1);
	} else {
		currTarget--;
		setSlide(currTarget - 1);
	}
});

circles.forEach(elem => {
	elem.addEventListener('click', (e) => {
		setSlide(e.target.id - 1);
		currTarget = +e.target.id;
	});
});

titles.forEach(elem => {
	elem.addEventListener('click', (e) => {
		const newArr = [];
		titles.forEach(elem => newArr.push(elem));
		const currClicked = newArr.findIndex(elem => elem.innerHTML === e.target.innerHTML);
		setSlide(currClicked);
		currTarget = currClicked + 1;
	});
});