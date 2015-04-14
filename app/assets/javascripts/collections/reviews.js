Lunchin.Collections.Reviews = Backbone.Collection.extend({
  url: 'api/reviews',
  model: Lunchin.Models.Review,

  intialize: function(models, options) {
    this.business = options.business;
  }

})
