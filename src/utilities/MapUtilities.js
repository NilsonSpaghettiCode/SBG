/**
 * MAIN VARIABLES
 */
const urlTemplate = "https://tile.openstreetmap.org/{z}/{x}/{y}.png"

let latitude      = 4.7001587;
let longitude     = -74.1243204;
let zoom          = 60;

let map           = null;
var popup         = L.popup();

/**
 * Modify map, adding tile, used intern by createTile() method of leaflet when needs get img
 * ej: https://tile.openstreetmap.org/18/77133/127593.png
 * @param {*} urlTemplate Map image
 */
function loadTileLayer(urlTemplate) {
  L.tileLayer(urlTemplate, {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  map.on('click', onMapClick);
}

function initMap(lat, lon, zoom) {
  map = L.map("map", {
    center: [lat, lon],
    zoom: zoom,
  });
}

function addMark(lat, lon) {
    L.marker([lat, lon]).addTo(map);
    console.log("Agregado")
  }
  
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}