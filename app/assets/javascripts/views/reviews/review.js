Lunchin.Views.Review = Backbone.View.extend({
  template: JST['reviews/show'],
  tagName: 'li',
  className: 'group',

  render: function() {
    var content = this.template({ review: this.model });
    this.$el.html(content);
    return this;
  }
});
