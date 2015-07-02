Lunchin.Views.OpeningsWidget = Backbone.View.extend({
  template: JST['openings/openings_widget'],
  
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    var content;
    if (this.collection.any()) {
      content = this.template({
        openings: this.collection.models,
        selected: 0
      });
    } else {
      content = "No upcoming openings";
    }
    this.$el.html(content);
    return this;
  }
});