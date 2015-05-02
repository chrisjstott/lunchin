Lunchin.Views.MapShow = Backbone.View.extend({
  attributes: {
    id: 'map-canvas'
  },

  initialize: function () {
    this._markers = {};

    this.listenTo(this.collection, 'add', this.addMarker);
    this.listenTo(this.collection, 'add', this.removeMarker);
    this.infoWindow;
  },

  initMap: function () {
    var mapOptions = {
      center: { lat: 37.7833, lng: -122.4167 },
      zoom: 15,
      styles: [{
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [{ "visibility": "off" }]
      }]
    };

    this._map = new google.maps.Map(this.el, mapOptions);

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
