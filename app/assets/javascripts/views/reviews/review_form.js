Lunchin.Views.ReviewForm = Backbone.CompositeView.extend({
  template: JST['reviews/form'],

  initialize: function() {
    this.addSearch();
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    'submit form.review-form': 'submit',
    'click .btn-rating-selector': 'selectRating',
    'mouseenter .btn-rating-selector': 'hoverRating',
    'mouseleave .btn-rating-selector': 'hoverRating'
  },

  addSearch: function() {
    var subview = new Lunchin.Views.SearchForm({ input: this.location });
    this.addSubview('.header', subview);
  },

  render: function() {
    var content = this.template({ business: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var attrs = $(event.currentTarget).serializeJSON();
    this.model.reviews().create({
      business_id: this.model.id,
      rating: attrs.rating,
      body: attrs.body
    }, {wait: true});
    Backbone.history.navigate('businesses/' + this.model.id, {trigger: true});
  },

  selectRating: function(event) {
    event.preventDefault();
    var rating = $(event.currentTarget).data('rating');
    $(".btn-rating-selector").removeClass('rating-selected');
    for (var i = 1; i <= rating; i++) {
      $(".btn-rating-selector[data-rating='" + i + "']").addClass('rating-selected');
    }
    $(".rating-radio-button[value='" + rating + "']").prop('checked', true);
  },

  hoverRating: function(event) {
    event.preventDefault();
    var rating = $(event.currentTarget).data('rating');
    for (var i = 1; i <= rating; i++) {
      $(".btn-rating-selector[data-rating='" + i + "']").toggleClass('rating-hover');
    }
  }

})
