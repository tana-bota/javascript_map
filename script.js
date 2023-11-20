// JavaScript
console.log('Hello world!');

var map = L.map('map').setView([33.67013665013756, 130.44480333900552], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


//アイコン
//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
  options: {
    shadowUrl: 'images/ico_shadow.png',
    iconSize: [40, 40],
    shadowSize: [40, 40],
    iconAnchor: [20, 40],
    shadowAnchor: [20, 40],
    popupAnchor: [0, -42]
  }
});

const blueIcon = new circleIcon({ iconUrl: 'images/ico_blue.png' }),
  pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });
  yellowIcon = new circleIcon({ iconUrl: 'images/ico_yellow.png' });

L.marker([33.67013665013756, 130.44480333900552], { icon: blueIcon }).addTo(map).bindPopup('ここ九産大！🎓✨<br><img src="images/img01.png" alt="img">');
//L.marker([ 33.59070013866579, 130.42037177081994], { icon: whiteIcon }).addTo(map).bindPopup('ここ博多駅！🌏✨<br><img src="images/img01.png" alt="img">').openPopup();
L.marker([33.65973750671518, 130.44401183714433], { icon: pinkIcon }).addTo(map).bindPopup('ここ香椎駅！🚈<br><img src="images/img02.jpg" alt="img">');
L.marker([33.67386429188948, 130.4413280751507], { icon: pinkIcon }).addTo(map).bindPopup('ここ九産前駅！🚈<br><img src="images/img03.jpg" alt="img">');
L.marker([33.58991515726229, 130.42074885396454], { icon: blueIcon }).addTo(map).bindPopup('ここ博多駅！🚅<br><img src="images/img04.jpg" alt="img">');
L.marker([33.66826630915908, 130.4457723959306], { icon: yellowIcon }).addTo(map).bindPopup('ここ九産大南口バス停！🚌<br><img src="images/img05.jpeg" alt="img">');
L.marker([33.66848585961498, 130.4423029347751], { icon: yellowIcon }).addTo(map).bindPopup('ここ九産大前バス停！🚌<br><img src="images/img06.jpeg" alt="img">');
L.marker([33.672917156107424, 130.4414208233102], { icon: yellowIcon }).addTo(map).bindPopup('ここ唐の原バス停！🚌芸術学部の棟へ行くならここ！<br><img src="images/img07.jpeg" alt="img">');

const circle = L.circle([33.67013665013756, 130.44480333900552], {
  color: '4d77fff', //円の輪郭線の色
  fillColor: '#4d77ff', //円の塗りつぶしの色
  fillOpacity: 0.3, //塗りつぶしの不透明度
  radius: 1000 //半径、メートルで指定
}).addTo(map);
circle.bindPopup("半径1kmの範囲");

// クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);
