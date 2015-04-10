Lunchin.Views.BusinessShow = Backbone.View.extend({
  template: JST['businesses/show'],

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function() {
    var content = this.template({ business: this.model });
    debugger
    this.$el.html(content);
    return this;
  }
});