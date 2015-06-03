Lunchin.Views.SearchResult = Backbone.View.extend({
  template: JST['search/search_result'],
  tagName: 'li',
  className: 'business-list-item group',

  intitialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var content = this.template({opening: this.model, business: this.model.business()});
    this.$el.html(content);
    return this;
  }
});
