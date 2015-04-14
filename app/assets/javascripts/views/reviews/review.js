Lunchin.Views.Review = Backbone.View.extend({
  template: JST['reviews/show'],

  render: function() {
    var content = this.template({ review: this.model })
  }
});
