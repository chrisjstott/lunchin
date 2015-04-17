Lunchin.Views.SearchResults = Backbone.CompositeView.extend({
  template: JST['businesses/search_results'],

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.addListings);

    this.addSearch();
  },

  addSearch: function() {
    var subview = new Lunchin.Views.SearchForm();
    this.addSubview('.header', subview);
  },

  addMap: function() {
    var subview = new Lunchin.Views.MapShow({ collection: this.collection });
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
    this.addMap();
    this.attachSubviews();
    return this;
  }
});
