Lunchin.Views.BusinessShow = Backbone.CompositeView.extend({
  template: JST['businesses/show'],

  events: {
    'click a.review-button': 'clickReview'
  },

  initialize: function() {
    this.reviews = this.model.reviews();
    this.upcomingOpenings = this.model.upcomingOpenings();
    
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model, 'sync', this.addOpenings);
    this.listenTo(this.model, 'sync', this.addReviews);
  },
  
  addOpenings: function() {
    var subview = new Lunchin.Views.OpeningsWidget({ collection: this.upcomingOpenings });
    this.addSubview('.openings-widget', subview);
  },

  addReviews: function() {
    this.reviews.each(this.addReview.bind(this));
  },

  addReview: function(review) {
    var subview = new Lunchin.Views.Review({ model: review });
    this.addSubview('.reviews', subview);
  },

  render: function() {
    var content = this.template({
      business: this.model,
      upcomingOpenings: this.upcomingOpenings.models,
      signedIn: !!Lunchin.currentUserId
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
