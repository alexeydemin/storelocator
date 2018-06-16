/*
 * Copyright 2017 Google Inc. All rights reserved.
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

// Style credit: https://snazzymaps.com/style/1/pale-dawn
const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
];

var map;
var markers = [];
var infoWindow;
var locationList = '';
var mapEl = document.getElementById("map");
var zipEl = parent.document.getElementById("zip");
var radiusEl = parent.document.getElementById('radius');
var listEl = parent.document.getElementById('locations');

function initMap() {
  zipEl.focus();
  var wakefieldOffice = {lat: 42.520226, lng: -71.047453};
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }


  map = new google.maps.Map(mapEl, {
    center: wakefieldOffice,
    zoom: 11,
    styles: mapStyle
  });
  infoWindow = new google.maps.InfoWindow();

  map.addListener('idle', function() {
      var boundsChange = true;
      searchLocationsNear(map.getCenter(), boundsChange);
  });

  radiusEl.onchange = searchLocations;
  zipEl.oninput = function() {
    if(zipEl.value.length == 5 && isNum(zipEl.value)) {
      searchLocations();
    }
  };
  zipEl.onkeyup =  function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      searchLocations();
    }
  };
}

function searchLocations() {
  var zip = zipEl.value;
  var geocoder = new google.maps.Geocoder();
  var country = isNum(zip) ? 'US' : 'UK';
  geocoder.geocode({address: zip, country:  country}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      searchLocationsNear(results[0].geometry.location);
    } else {
      console.log('Address not found');
    }
  });
}

function isNum($val){
  return/^\d+$/.test($val)
}

function clearLocations() {
  infoWindow.close();
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers.length = 0;
  locationList = '';
}

function searchLocationsNear(center, boundsChange = false) {

  var radius = radiusEl.value;
  var searchUrl = '/api/stores.json';

  if(! boundsChange) {
    clearLocations();
    searchUrl += '?lat=' + center.lat() + '&lng=' + center.lng() + '&radius=' + radius;
  } else {
    var bounds = map.getBounds();
    var sw = bounds.getSouthWest();
    var ne = bounds.getNorthEast();
    searchUrl += '?a=' + sw.lat() + '&b=' + sw.lng() + '&c=' + ne.lat() + '&d=' + ne.lng();
  }

  downloadUrl(searchUrl, function(data) {
    var markerNodes = JSON.parse(data);
    var bounds = new google.maps.LatLngBounds();
    var locationList = [];
    for (m of markerNodes) {
      var latlng = new google.maps.LatLng(parseFloat(m.lat), parseFloat(m.lng));
      createMarker(latlng, m.name, m.address, m.phone);
      bounds.extend(latlng);
      locationList.push(m);
    }
    if(! boundsChange) {
      map.fitBounds(bounds);
    }
  var htmlList = '';
  for(m of locationList) {
    htmlList += '<div class="col-item">' +
    '<h4 class="detail-headline">' + m.name + '</h4>' +
    '<p>' +
    m.address_1 + '<br>' +
    m.address_2 + '<br>' +
    m.city + ', ' + m.state + ', ' + m.zip + '<br>' +
    m.phone + '<br>' +
    (m.website ? ('<a href="' + m.website + '">' + m.website + '</a>') : '') + '<br>' +
    m.hours +
    '</p>' +
    '</div>';
  }

  listEl.innerHTML = htmlList;
  });
}

function createMarker(latlng, name, address, phone) {
  var html = '<b>' + name + '</b><br>' + address + '<br>' + phone;
  var marker = new google.maps.Marker({
    map: map,
    position: latlng,
    icon: '/plugins/ademin/storelocator/assets/images/icon-marker.png',
  });
  google.maps.event.addListener(marker, 'click', function() {
    infoWindow.setContent(html);
    infoWindow.open(map, marker);
  });
  markers.push(marker);
}

function downloadUrl(url, callback) {
  var request = window.ActiveXObject ?
    new ActiveXObject('Microsoft.XMLHTTP') :
    new XMLHttpRequest;

  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      request.onreadystatechange = doNothing;
      callback(request.responseText, request.status);
    }
  };

  request.open('GET', url, true);
  request.send(null);
}

function parseXml(str) {
  if (window.ActiveXObject) {
    var doc = new ActiveXObject('Microsoft.XMLDOM');
    doc.loadXML(str);
    return doc;
  } else if (window.DOMParser) {
    return (new DOMParser).parseFromString(str, 'text/xml');
  }
}

function doNothing() {}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}