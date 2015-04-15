Lunchin.Views.ReviewForm = Backbone.View.extend({
  template: JST['reviews/form'],

  events: {
    'submit form.review-form': 'submit',
    'click .btn-rating-selector': 'selectRating',
    'mouseenter .btn-rating-selector': 'hoverRating',
    'mouseleave .btn-rating-selector': 'hoverRating'
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  },

  submit: function(event) {
    event.preventDefault();
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
