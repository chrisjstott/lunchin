Lunchin.Views.SearchResults = Backbone.CompositeView.extend({
  template: JST['businesses/search_results'],


  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addListing);

    // could do an if statement that decides whether to run this or not
    // but I might need to fix it differently to get the listings to reload
    // when moving the map.
    this.collection.each(this.addListing.bind(this));

    this.listenTo(this.collection, 'sync', this.addMap);
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

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

});
