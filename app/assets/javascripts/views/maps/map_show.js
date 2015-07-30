Lunchin.Views.MapShow = Backbone.View.extend({
  attributes: {
    id: 'map-canvas'
  },

  initialize: function (options) {
    this._markers = {};
    if (options.location.includes(',')) {
      this.location = options.location;
    } else {
      this.location = options.location + ', San Francisco';
    }
    this.geocoder = new google.maps.Geocoder();

    this.listenTo(this.collection, 'add', this.addMarker);
    this.listenTo(this.collection, 'add', this.removeMarker);
    this.infoWindow;
  },


  initMap: function (latLng) {
    var mapOptions = {
      center: { lat: 37.7577, lng: -122.4376 },
      zoom: 13,
      styles: [{
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [{ "visibility": "off" }]
      }]
    };

    this._map = new google.maps.Map(this.el, mapOptions);

    var map = this._map;

    this.geocoder.geocode( { 'address': this.location }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
      }
    });

    this.collection.each(this.addMarker.bind(this));
  },

  addMarker: function (opening) {
    if (this._markers[opening.id]) { return };
    var view = this;

    var marker = new google.maps.Marker({
      position: { lat: opening.get('latitude'),
                  lng: opening.get('longitude') },
      map: this._map,
      opening: opening
    });

    google.maps.event.addListener(marker, 'click', function() {
      view.showMarkerInfo(marker)
    });

    this._markers[opening.id] = marker;
  },

  removeMarker: function (opening) {
    var marker = this._markers[opening.id];
    marker.setMap(null);
    delete this._markers[opening.id];
  },

  showMarkerInfo: function (marker) {
    if (this.infoWindow) {
      this.infoWindow.close();
    };

    var content = JST['maps/map_popup']({ opening: marker.opening, business: marker.opening.business()});
    this.infoWindow = new google.maps.InfoWindow({ content: content });
    this.infoWindow.open(this._map, marker);
  }
});
