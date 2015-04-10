Lunchin.Collections.SearchResults = Backbone.Collection.extend({
  initialize: function(options) {
    this.searchQuery = options.searchQuery;
  },

  url: function() {
    return 'api/businesses?search=' + this.searchQuery;
  },

  model: Lunchin.Models.Business
});
