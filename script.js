$(document).ready(function(){

  // var map = L.map('map').setView([51.636, 4.238009], 16);
  //
  // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  //       attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  //   }).addTo(map);


  // ADD CUSOTM BASE LAYER-----------------------------------------------
  var map, stanfordMlk, myIcon;

  map = L.map('map', {
    center: [0, 0],
    crs: L.CRS.Simple,
    zoom: 0,
    center: [0,-70],
    zoomControl: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
  });

  // stanfordMlk = L.tileLayer.iiif('http://free.iiifhosting.com/iiif/5aa293f052ebc1cbc314ca307e35a044fcec478cc148eaa7c7fd2c0823c19df/info.json', {}).addTo(map);

  // ADD CONTROLS
  // iiifLayers = {
  //   'Martin Luther King Jr. & Joan Baez ...': stanfordMlk, };
  // L.control.layers(iiifLayers).addTo(map);


  // ADD MARKERS-----------------------------------------------
  var LeafIcon = L.Icon.extend({
      options: {
          shadowUrl: 'icon/img-shadow.png',
          iconSize:     [328, 492], // size of the icon
          // shadowSize:   [50, 64],
          // iconAnchor:   [22, 94],
          // shadowAnchor: [4, 62],
      }
  });

  var cIcon = new LeafIcon({iconUrl: 'icon/img-1.png', iconAnchor:[0,0], popupAnchor:  [255, 20], className: 'cIcon projIcons'}),
      mIcon = new LeafIcon({iconUrl: 'icon/img-2.png', iconAnchor:[450,0], popupAnchor:  [-193, 32], className: 'mIcon projIcons'}),
      yIcon = new LeafIcon({iconUrl: 'icon/img-3.png', iconAnchor:[900,0], popupAnchor:  [-642, 20], className: 'yIcon projIcons'}),
      kIcon = new LeafIcon({iconUrl: 'icon/img-4.png', iconAnchor:[1350,0], popupAnchor:  [-1095, 50], className: 'kIcon projIcons'}),
      myIcon = new L.divIcon({iconAnchor:[-520, -5], iconSize:[418, 582], className: 'myIcon projIcons'});

  var cMarker = L.marker([25, 0], {icon: cIcon}),
      mMarker = L.marker([1000, -850], {icon: mIcon}),
      yMarker = L.marker([-500, 0], {icon: yIcon}),
      kMarker = L.marker([250, 380], {icon: kIcon}),
      myMarker = L.marker([0, 450], {icon: myIcon});

  cMarker.addTo(map).bindPopup("1. Image Exhibition The Christmas Tree Island. 2022. The Hague.");
  mMarker.addTo(map).bindPopup("2. Image Exhibition The Christmas Tree Island. 2022. The Hague.");
  yMarker.addTo(map).bindPopup("3. Image Exhibition The Christmas Tree Island. 2022. The Hague.");
  kMarker.addTo(map).bindPopup("4. Image Exhibition The Christmas Tree Island. 2022. The Hague.");
  myMarker.addTo(map);

  // L.marker([25, 0], {icon: cIcon}).addTo(map).bindPopup("1. Image Exhibition The Christmas Tree Island. 2022. The Hague.");
  // L.marker([1000, -850], {icon: mIcon}).addTo(map).bindPopup("2. Image Exhibition The Christmas Tree Island. 2022. The Hague.");
  // L.marker([-500, 0], {icon: yIcon}).addTo(map).bindPopup("3. Image Exhibition The Christmas Tree Island. 2022. The Hague.");
  // L.marker([250, 180], {icon: kIcon}).addTo(map).bindPopup("4. Image Exhibition The Christmas Tree Island. 2022. The Hague.");
  // L.marker([0, 450], {icon: myIcon}).addTo(map);
  //

  var cMarkerll = cMarker.getLatLng();
  var mMarkerll = mMarker.getLatLng();
  var yMarkerll = yMarker.getLatLng();
  var kMarkerll = kMarker.getLatLng();
  var myMarkerll = myMarker.getLatLng();

  $('.myIcon').append("<div class='img-wrapper'><img src='imgs/xmas-1/img-5.jpg'/><div class='pls-scroll'>scroll down ↓</div></div>").append("<p>The Promise of Ruin(s) tackles the concept of ruin(s)—as both a material relic and an intangible construct of the mind—into their diverse specificity, giving space to relational proposals and overlapping temporalities. Each of the three upcoming chapters echoes the ruin in its multiplicity, from the reading of modernity, to the speculative discrepancy of decay and precariousness of turbo-capitalism. <br> <br> This program is set to unfold at The Balcony over the course of the upcoming year. Each chapter is articulated as a trio exhibition. The aim is to bind established artists, with mid-career and recently graduated practitioners from the field.</>");


  // menu items
  $(".menu ul li:nth-child(2)").click(function(){
    $(this).find('ul').show();
  });


  $('.cTrigger0').click(function(e){
        var lat = cMarkerll.lat;
        var lng = cMarkerll.lng;
        map.flyTo([lat,lng]);
  });
  $('.cTrigger1').click(function(e){
        var lat = mMarkerll.lat;
        var lng = mMarkerll.lng;
        map.flyTo([lat,lng]);
  });
  $('.cTrigger2').click(function(e){
        var lat = yMarkerll.lat;
        var lng = yMarkerll.lng;
        map.flyTo([lat,lng]);
  });
  $('.cTrigger3').click(function(e){
        var lat = kMarkerll.lat;
        var lng = kMarkerll.lng;
        map.flyTo([lat,lng]);
  });
  $('.cTrigger4').click(function(e){
        var lat = myMarkerll.lat;
        var lng = myMarkerll.lng;
        map.flyTo([lat,lng]);
        $(".myIcon").css({
          'box-shadow': '10px 10px 10px yellow',
        });
  });

  $(".thisTxtbox").click(function(){
    $(".text").addClass("bgColorHl")
  });

  $(".projIcons").each(function(){
    $(this).click(function(){
      $(".sideBar").animate({right: 0});
    });
  });

  $(".closeBtn").click(function(){
    $(".sideBar").animate({right: "-30vw"});
  });
});
