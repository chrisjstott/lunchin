Lunchin.Views.BusinessShow = Backbone.CompositeView.extend({
  template: JST['businesses/show'],

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render)
    this.model.reviews().each(this.addReview.bind(this));
  },

  addReview: function(review) {
    var subview = new Lunchin.Views.Review({ model: review });
    this.addSubview('.reviews', subview);
  },

  render: function() {
    var content = this.template({ business: this.model });
    this.$el.html(content);
    return this;
  }
});

// addListing: function(business) {
//   var subview = new Lunchin.Views.BusinessListItem({ model: business });
//   this.addSubview('.listings', subview);
// },
