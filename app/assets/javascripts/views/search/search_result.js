Lunchin.Views.SearchResult = Backbone.View.extend({
  template: JST['search/search_result'],
  tagName: 'div',
  className: 'business-list-item row',

  intitialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var content = this.template({opening: this.model, business: this.model.business()});
    this.$el.html(content);
    return this;
  }
});
