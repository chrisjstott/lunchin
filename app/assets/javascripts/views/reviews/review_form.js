Lunchin.Views.ReviewForm = Backbone.View.extend({
  template: JST['reviews/form'],

  events: {'submit form.review-form': 'submit'},

  render: function() {
    this.$el.html(this.template);
    return this;
  },

  submit: function() {
    event.preventDefault();
  }

})
