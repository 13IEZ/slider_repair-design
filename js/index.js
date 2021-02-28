'use strict';
const btnNext = document.querySelector('#right');
const btnPrev = document.querySelector('#left');

const img = document.querySelector('.completed-project-wrapper_item__img');
const firstImg = 'url(\'../uploads/completed-project-pic-1.jpg\')';
const secondImg = 'url(\'../uploads/completed-project-pic-2.jpg\')';
const thirdImg = 'url(\'../uploads/completed-project-pic-3.jpg\')';

const titles = document.querySelectorAll('.completed-project-wrapper_item__title');
const activeTitle = 'active';

const circles = document.querySelectorAll('.completed-project-wrapper_item-nav__circle');
const activeCircle = 'full-circle';

const city = document.querySelector('.city');
const area = document.querySelector('.area');
const time = document.querySelector('.time');

let currTarget = 1;

const doFirstParam = () => {
	img.style.backgroundImage = firstImg;
	titles.forEach(elem => elem.classList.remove(activeTitle));
	titles[0].classList.add(activeTitle);
	circles.forEach(elem => elem.classList.remove(activeCircle));
	circles[0].classList.add(activeCircle);
	city.innerText = 'Rostov-on-Don \n LCD admiral';
	area.innerText = '81 m2';
	time.innerText = '3.5 months';
};

const doSecondParam = () => {
	img.style.backgroundImage = secondImg;
	titles.forEach(elem => elem.classList.remove(activeTitle));
	titles[1].classList.add(activeTitle);
	circles.forEach(elem => elem.classList.remove(activeCircle));
	circles[1].classList.add(activeCircle);
	city.innerText = 'Sochi \n Thieves';
	area.innerText = '105 m2';
	time.innerText = '4 months';
};

const doThirdParam = () => {
	img.style.backgroundImage = thirdImg;
	titles.forEach(elem => elem.classList.remove(activeTitle));
	titles[2].classList.add(activeTitle);
	circles.forEach(elem => elem.classList.remove(activeCircle));
	circles[2].classList.add(activeCircle);
	city.innerText = 'Rostov-on-Don \n Patriotic';
	area.innerText = '93 m2';
	time.innerText = '3 months';
};


btnNext.addEventListener('click', (e) => {
	if (currTarget === 1) {
		currTarget++;
		doSecondParam();
	} else if (currTarget === 2) {
		currTarget++;
		doThirdParam();
	}
});

btnPrev.addEventListener('click', () => {
	if (currTarget === 3) {
		currTarget--;
		doSecondParam();
	} else if (currTarget === 2) {
		currTarget--;
		doFirstParam();
	}
});


circles.forEach(elem => {
	elem.addEventListener('click', (e) => {
		if (+e.target.id === 1) {
			currTarget = 1;
			doFirstParam();
		} else if (+e.target.id === 2) {
			currTarget = 2;
			doSecondParam();
		} else if (+e.target.id === 3) {
			currTarget = 3;
			doThirdParam();
		}
	});
});

titles.forEach(elem => {
	elem.addEventListener('click', (e) => {
		if (e.target.id === 'one') {
			currTarget = 1;
			doFirstParam();
		} else if (e.target.id === 'two') {
			currTarget = 2;
			doSecondParam();
		} else if (e.target.id === 'three') {
			currTarget = 3;
			doThirdParam();
		}
	});
});