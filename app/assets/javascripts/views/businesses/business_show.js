Lunchin.Views.BusinessShow = Backbone.View.extend({
  template: JST['businesses/show'],

  render: function() {
    var content = this.template({ business: this.model });
    this.$el.html(content);
    return this;
  }
});
