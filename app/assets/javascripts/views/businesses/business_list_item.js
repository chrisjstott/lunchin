Lunchin.Views.BusinessListItem = Backbone.View.extend({
  template: JST['businesses/list_item'],
  tagName: 'li',
  className: 'business-list-item group',

  intitialize: function() {
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function() {
    var content = this.template({business: this.model});
    this.$el.html(content);
    return this;
  }
});
