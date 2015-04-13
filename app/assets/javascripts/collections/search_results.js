Lunchin.Collections.SearchResults = Backbone.Collection.extend({
  initialize: function (options) {
    this.url = options.url;
  },

  model: Lunchin.Models.Business
});
