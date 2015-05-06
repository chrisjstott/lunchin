Lunchin.Collections.SearchResults = Backbone.Collection.extend({
  model: Lunchin.Models.Business,
  url: function() {
    return 'api/businesses?search=' + this.query;
  },

  initialize: function (models, options) {
    this.query = options.query;
  }
});
