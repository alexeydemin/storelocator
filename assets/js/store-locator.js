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

let map;
let markers = [];
let infoWindow;
let locationList = '';
let mapEl = document.getElementById("map");
let zipEl = parent.document.getElementById("zip");
let radiusEl = parent.document.getElementById('radius');
let listEl = parent.document.getElementById('locations');

function initMap() {
  zipEl.focus();
  let wakefieldOffice = {lat: 42.520226, lng: -71.047453};
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let pos = {
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
    let boundsChange = true;
    searchLocationsNear(map.getCenter(), boundsChange);
  });

  radiusEl.onchange = searchLocations;
  zipEl.oninput = function() {
    if(zipEl.value.length === 5 && isNum(zipEl.value)) {
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
  let zip = zipEl.value;
  let geocoder = new google.maps.Geocoder();
  let country = isNum(zip) ? 'US' : 'UK';
  geocoder.geocode({address: zip, country:  country}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
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
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers.length = 0;
  locationList = '';
}

function searchLocationsNear(center, boundsChange = false) {

  let radius = radiusEl.value;
  let searchUrl = '/api/stores.json';

  if(! boundsChange) {
    clearLocations();
    searchUrl += '?lat=' + center.lat() + '&lng=' + center.lng() + '&radius=' + radius;
  } else {
    let bounds = map.getBounds();
    let sw = bounds.getSouthWest();
    let ne = bounds.getNorthEast();
    searchUrl += '?a=' + sw.lat() + '&b=' + sw.lng() + '&c=' + ne.lat() + '&d=' + ne.lng();
  }

  downloadUrl(searchUrl, function(data) {
    let markerNodes = JSON.parse(data);
    let bounds = new google.maps.LatLngBounds();
    let locationList = [];
    for (let m of markerNodes) {
      let latLng = new google.maps.LatLng(parseFloat(m.lat), parseFloat(m.lng));
      createMarker(latLng, m);
      bounds.extend(latLng);
      locationList.push(m);
    }
    if(! boundsChange) {
      map.fitBounds(bounds);
    }
    let htmlList = '';
    for(let m of locationList) {
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

function createMarker(latlng, markerData) {
  let html = '<b>' + markerData.name + '</b><br>'
      + markerData.address + '<br>'
      + markerData.phone + '<br>'
      + '<a href="'+ markerData.website +'"></a>' + '<br>'
      + nl2br(markerData.hours) + '<br>'
      + nl2br(markerData.description) + '<br>'
      + (markerData.photo
              ? '<img width="150px" src="'+ markerData.photo.path + '" alt="' + markerData.name + '">'
              : '')
  ;

  let marker = new google.maps.Marker({
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
  let request = window.ActiveXObject ?
      new ActiveXObject('Microsoft.XMLHTTP') :
      new XMLHttpRequest;

  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      request.onreadystatechange = doNothing;
      callback(request.responseText, request.status);
    }
  };

  request.open('GET', url, true);
  request.send(null);
}

function parseXml(str) {
  if (window.ActiveXObject) {
    let doc = new ActiveXObject('Microsoft.XMLDOM');
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

function nl2br(str, is_xhtml) {
  if (typeof str === 'undefined' || str === null) {
    return '';
  }
  let breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}