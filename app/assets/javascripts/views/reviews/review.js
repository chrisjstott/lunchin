Lunchin.Views.Review = Backbone.View.extend({
  template: JST['reviews/show'],
  tagName: 'div',
  className: 'col-md-12',

  render: function() {
    var content = this.template({ review: this.model });
    this.$el.html(content);
    return this;
  }
});
