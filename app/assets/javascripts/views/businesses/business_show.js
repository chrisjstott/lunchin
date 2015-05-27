Lunchin.Views.BusinessShow = Backbone.CompositeView.extend({
  template: JST['businesses/show'],

  events: {
    'click a.review-button': 'clickReview'
  },

  initialize: function() {

    this.collection = this.model.reviews();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model, 'sync', this.addReviews);

    this.addSearch();
  },

  addSearch: function() {
    var subview = new Lunchin.Views.SearchForm({});
    this.addSubview('.header', subview);
  },

  addReviews: function() {
    this.collection.each(this.addReview.bind(this));
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
    var content = this.template({ business: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
