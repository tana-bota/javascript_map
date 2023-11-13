// JavaScript
console.log('Hello world!');

var map = L.map('map').setView([33.67013665013756, 130.44480333900552], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


//アイコン
const whiteIcon = L.icon({
    iconUrl: 'images/ico.png',
    shadowUrl: 'images/ico_shadow.png',
  
  iconSize:     [40, 40], // size of the icon
  shadowSize:   [40, 40], // size of the shadow
  iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
  shadowAnchor: [20, 40],  // the same for the shadow
  popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
  });



  L.marker([33.67013665013756, 130.44480333900552], { icon: whiteIcon }).addTo(map).bindPopup('ここ九産大！🌏✨<br><img src="images/img01.png" alt="img">').openPopup();
　//L.marker([ 33.59070013866579, 130.42037177081994], { icon: whiteIcon }).addTo(map).bindPopup('ここ博多駅！🌏✨<br><img src="images/img01.png" alt="img">').openPopup();
