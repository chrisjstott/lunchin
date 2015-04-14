Lunchin.Views.BusinessShow = Backbone.CompositeView.extend({
  template: JST['businesses/show'],

  initialize: function() {
    this.collection = this.model.reviews();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'sync add', this.addReview);
  },

  addReview: function(review) {
    var subview = new Lunchin.Views.Review({ model: review });
    this.addSubview('.reviews', subview);
  },

  render: function() {
    var content = this.template({ business: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
