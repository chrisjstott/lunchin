Lunchin.Models.Business = Backbone.Model.extend({
  urlRoot: 'api/businesses',

  reviews: function() {
    if (!this._reviews) {
      this._reviews = new Lunchin.Collections.Reviews([], { business: this });
    }
    return this._reviews;
  },

  parse: function (response) {
    if (response.reviews) {
      this.reviews().set(response.reviews);
      delete response.reviews;
    }
    return response;
  }
});
