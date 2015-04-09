Lunchin.Views.BusinessesIndex = Backbone.CompositeView.extend({
  template: JST['businesses/index'],

  initialize: function() {

    this.listenTo(this.collection, 'add', this.addListing);
    this.listenTo(this.collection, 'sync', this.render);

    this.collection.each(this.addListing.bind(this));
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
