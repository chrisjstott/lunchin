Lunchin.Views.BusinessShow = Backbone.CompositeView.extend({
  template: JST['businesses/show'],

  events: {
    'click a.review-button': 'clickReview'
  },

  initialize: function() {
    this.reviews = this.model.reviews();
    this.openings = this.model.openings();
    
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model, 'sync', this.addReviews);
  },

  addReviews: function() {
    this.reviews.each(this.addReview.bind(this));
  },

  addReview: function(review) {
    var subview = new Lunchin.Views.Review({ model: review });
    this.addSubview('.reviews', subview);
  },

  clickReview: function(event) {
    if (!!Lunchin.currentUserId) {
      event.preventDefault();
      Backbone.history.navigate(
        "businesses/" + this.model.id + "/review",
        { trigger: true }
      );
    }
  },

  render: function() {
    var content = this.template({ business: this.model, openings: this.openings.models });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
