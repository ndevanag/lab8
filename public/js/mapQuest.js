function initMap() {
	L.mapquest.key = 'buPsHWjQ5rMsVuKdwbwDn4z5n62Hab2x';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	  center: [37.7749, -122.4194],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 12
	});

	L.marker([37.7749, -122.4194]).addTo(map);
}