Lunchin.Models.Business = Backbone.Model.extend({
  urlRoot: 'api/businesses',

  reviews: function() {
    if (!this._reviews) {
      this._reviews = new Lunchin.Collections.Reviews([], { business: this });
    }
    return this._reviews;
  },

  openings: function() {
    if (!this._openings) {
      this._openings = new Lunchin.Collections.Openings([], { business: this });
    }
    return this._openings;
  },

  parse: function (response) {
    if (response.reviews) {
      this.reviews().set(response.reviews);
      delete response.reviews;
    }

    if (response.openings) {
      this.openings().set(response.openings);
      delete response.openings;
    }
    return response;
  }
});
