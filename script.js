function initMap() {
  const center = { lat: -7.6959088, lng: 111.9424649 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: center,
    mapTypeId: "satellite",
  });

  const tanahCoords = [
    { lat: -7.6952, lng: 111.9418 },
    { lat: -7.6951, lng: 111.9432 },
    { lat: -7.6966, lng: 111.9430 },
    { lat: -7.6967, lng: 111.9419 },
  ];

  const bidangTanah = new google.maps.Polygon({
    paths: tanahCoords,
    strokeColor: "#ffffff",
    strokeOpacity: 1,
    strokeWeight: 2,
    fillColor: "#b0005a",
    fillOpacity: 0.6,
  });

  bidangTanah.setMap(map);

  new google.maps.Marker({
    position: center,
    map: map,
    title: "Lokasi Sawah",
  });
      }
