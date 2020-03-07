//= components/glider.min.js

alert('Это демонвариант, адаптива под мобилку нет, фото тоже временное');

new Glider(document.querySelector('.glider_one'), {
	slidesToShow: 1,
	dots: '#dots_one',
	draggable: false
});

new Glider(document.querySelector('.glider_two'), {
	slidesToShow: 1,
	dots: '#dots_two',
	draggable: false
});

new Glider(document.querySelector('.glider_three'), {
	slidesToShow: 1,
	dots: '#dots_three',
	draggable: false
});