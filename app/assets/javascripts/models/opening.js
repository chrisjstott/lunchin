Lunchin.Models.Opening = Backbone.Model.extend ({
  urlRoot: 'api/openings',
  
  business: function() {
    if (!this._business) {
      this._business = new Lunchin.Models.Business();
    }
    return this._business;
  },

  parse: function (response) {
    if (response.business) {
      this.business().set(response.business);
      delete response.business;
    }
    return response;
  }

});
