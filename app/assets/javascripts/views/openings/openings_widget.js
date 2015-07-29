Lunchin.Views.OpeningsWidget = Backbone.View.extend({
  template: JST['openings/openings_widget'],

  events: {
    'click a.opening': 'clickOpening'
  },
  
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    this.openings = this.collection.models;
  },
  
  clickOpening: function(event) {
    event.preventDefault();
    
    var id = $(event.currentTarget).data('id');
    var location = this.openings[id].escape('location');
    
    $('img.static-map').attr('src',
    'https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=300x300&markers=' +
    location + '&style=feature:poi|element:labels|visibility:off');
  },

  render: function() {
    var content;
    if (this.collection.any()) {
      content = this.template({
        openings: this.openings,
      });
    } else {
      content = "No upcoming openings";
    }
    this.$el.html(content);
    return this;
  }
});