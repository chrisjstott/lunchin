Lunchin.Collections.Businesses = Backbone.Collection.extend({
  url: 'api/businesses',
  model: Lunchin.Models.Business,

  getOrFetch: function(id) {
    var business = this.get(id);

    if (!business) {
      business = new Lunchin.Models.Business({id: id});
      business.fetch({
        success: function() {
          this.add(business);
        }.bind(this)
      });
    } else {
      business.fetch();
    }

    return business;
  },
});
