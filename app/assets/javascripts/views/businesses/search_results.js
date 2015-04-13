Lunchin.Views.SearchResults = Backbone.CompositeView.extend({
  template: JST['businesses/search_results'],

  initialize: function() {
    this.listenTo(this.collection, 'add', this.addListing);
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'sync', this.addMap);
    this.collection.each(this.addListing.bind(this));
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
