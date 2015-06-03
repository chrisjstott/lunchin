Lunchin.Collections.Openings = Backbone.Collection.extend({
  model: Lunchin.Models.Opening,
  url: function() {
    return 'api/openings?location=' + this.location + '&&time=' + this.time;
  },

  initialize: function (models, options) {
    this.location = options.location;
    this.time = options.time;
  }
});
