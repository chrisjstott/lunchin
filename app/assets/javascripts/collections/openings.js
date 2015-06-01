Lunchin.Collections.Openings = Backbone.Collection.extend({
  model: Lunchin.Models.Opening,
  url: function() {
    return 'api/openings?search=' + this.query;
  },

  initialize: function (models, options) {
    this.query = options.query;
  }
});
