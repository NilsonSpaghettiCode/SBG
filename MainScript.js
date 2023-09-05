function loadMap() {
  initMap(latitude, longitude, zoom);
  loadTileLayer(urlTemplate);
}

function main(params) {
  loadMap();
}

main((params = null));
