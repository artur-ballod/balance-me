ymaps.ready(init);

function init() {
	const myMap = new ymaps.Map('map', {
		center: [55.76, 37.64], // Москва
		zoom: 10
	});

	// Добавьте метки, линии и другие объекты
	const placemark = new ymaps.Placemark([55.76, 37.64], {
		balloonContent: 'Москва!'
	});
	myMap.geoObjects.add(placemark);
}