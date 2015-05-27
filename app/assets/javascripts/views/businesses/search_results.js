Lunchin.Views.SearchResults = Backbone.CompositeView.extend({
  template: JST['businesses/search_results'],

  initialize: function(options) {
    this.location = options.location;

    this.listenTo(this.collection, 'sync', this.addListings);
    this.listenTo(this.collection, 'sync', this.addMap);
    this.listenTo(this.collection, 'sync', this.render);

    this.addSearch();
  },

  addSearch: function() {
    var subview = new Lunchin.Views.SearchForm({ input: this.location });
    this.addSubview('.header', subview);
  },

  addMap: function() {
    var subview = new Lunchin.Views.MapShow({
      collection: this.collection,
      location: this.location
    });
    this.addSubview('.map', subview);
    subview.initMap();
  },

  addListing: function(business) {
    var subview = new Lunchin.Views.BusinessListItem({ model: business });
    this.addSubview('.listings', subview);
  },

  addListings: function() {
    this.collection.each(this.addListing.bind(this));
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
