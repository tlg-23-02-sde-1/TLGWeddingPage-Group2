//Initialize and add the map
let map;

async function initMap() {
  // The location of Wedding (get from user input on prompt of form)
  const position = { lat: 35.208282942575416, lng: -84.65539844765875 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Venue
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "MAP_ID",
  });
}

initMap();

document
  .getElementById("addressForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get address from input field
    var address = document.getElementById("addressInput").value;

    // Use Google Maps geocoding service
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: address }, function (results, status) {
      if (status === "OK") {
        var lat = results[0].geometry.location.lat();
        var lng = results[0].geometry.location.lng();

        // Update map with marker
        var map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: lat, lng: lng },
          zoom: 14,
          mapId: "Map_ID",
        });
        var marker = new google.maps.Marker({
          map: map,
          position: { lat: lat, lng: lng },
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  });
