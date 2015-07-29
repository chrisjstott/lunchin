Lunchin.Views.SearchResults = Backbone.CompositeView.extend({
  template: JST['search/search_results'],
  classname: 'row',

  initialize: function(options) {
    this.location = options.location;

    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'sync', this.addMap);
    this.listenTo(this.collection, 'sync', this.addListings);
  },

  addMap: function() {
    var subview = new Lunchin.Views.MapShow({
      collection: this.collection,
      location: this.location
    });
    this.addSubview('.map', subview);
    subview.initMap();
  },

  addListing: function(opening) {
    var subview = new Lunchin.Views.SearchResult({ model: opening });
    this.addSubview('.listings', subview);
  },

  addListings: function() {
    if (this.collection.any()) {
      this.collection.each(this.addListing.bind(this));
    } else {
      $('.listings').html('<br>No results found. Try searching for a different location');
    }
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
