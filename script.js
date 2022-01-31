$(document).ready(function(){
  // var map = L.map('map').setView([51.636, 4.238009], 16);
  //
  // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  //       attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  //   }).addTo(map);


  // ADD CUSOTM BASE LAYER-----------------------------------------------
  var map, map1, stanfordMlk, stanfordMlk1;

  map = L.map('map', {
    center: [0, 0],
    crs: L.CRS.Simple,
    zoom: 0
  });

  // stanfordMlk = L.tileLayer.iiif('http://127.0.0.1:8182/iiif/2/img-5.jpg/info.json', {
  //   // attribution: '<a href="http://searchworks.stanford.edu/view/hg676jb4964">Martin Luther King Jr. & Joan Baez march to integrate schools, Grenada, MS, 1966</a>'
  // }).addTo(map);

  // ADD CONTROLS
  // iiifLayers = {
  //   'Martin Luther King Jr. & Joan Baez ...': stanfordMlk, };
  // L.control.layers(iiifLayers).addTo(map);


  // ADD MARKERS-----------------------------------------------
  var LeafIcon = L.Icon.extend({
      options: {
          // shadowUrl: 'leaf-shadow.png',
          iconSize:     [328, 492], // size of the icon
          // shadowSize:   [50, 64],
          // iconAnchor:   [22, 94],
          // shadowAnchor: [4, 62],
      }
  });

  var greenIcon = new LeafIcon({iconUrl: 'imgs/img-1.jpg', iconAnchor:[350,0], popupAnchor:  [-185, 584]}),
      redIcon = new LeafIcon({iconUrl: 'imgs/img-3.jpg', iconAnchor:[700,0], popupAnchor:  [-535, 584]});

  L.marker([0, 0], {icon: greenIcon}).addTo(map).bindPopup("1. Image Exhibition The Christmas Tree Island. 2022. The Hague.");
  L.marker([0, 0], {icon: redIcon}).addTo(map).bindPopup("2. Image Exhibition The Christmas Tree Island. 2022. The Hague.");


});
