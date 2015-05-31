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
      zoom: 15,
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

  addMarker: function (business) {
    if (this._markers[business.id]) { return };
    var view = this;

    var marker = new google.maps.Marker({
      position: { lat: business.get('latitude'),
                  lng: business.get('longitude') },
      map: this._map,
      business: business
    });

    google.maps.event.addListener(marker, 'click', function() {
      view.showMarkerInfo(marker)
    });

    this._markers[business.id] = marker;
  },

  removeMarker: function (business) {
    var marker = this._markers[business.id];
    marker.setMap(null);
    delete this._markers[business.id];
  },

  showMarkerInfo: function (marker) {
    if (this.infoWindow) {
      this.infoWindow.close();
    };

    var content = JST['businesses/map_popup']({ business: marker.business });
    this.infoWindow = new google.maps.InfoWindow({ content: content });
    this.infoWindow.open(this._map, marker);
  }
});
