Lunchin.Views.BusinessShow = Backbone.CompositeView.extend({
  template: JST['businesses/show'],

  events: {
    'click button.review-button': 'writeReview'
  },

  initialize: function() {
    this.collection = this.model.reviews();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addReview);
  },

  addReview: function(review) {
    var subview = new Lunchin.Views.Review({ model: review });
    this.addSubview('.reviews', subview);
  },

  writeReview: function(event) {
    event.preventDefault();
    Backbone.history.navigate(
      "businesses/" + this.model.id + "/review",
      { trigger: true }
    );
  },

  render: function() {
    var content = this.template({ business: this.model });
    this.$el.html(content);
    this.collection.each(this.addReview.bind(this));
    return this;
  }
});
