Lunchin.Routers.Router = Backbone.Router.extend({

  initialize: function() {
    this.businesses = new Lunchin.Collections.Businesses;
    this.$rootEl = $('#main');
  },

  routes: {
    'businesses': 'businessIndex',
    'businesses/:id': 'businessShow',
    'search': 'searchForm',
    'search/:query': 'searchResults'
  },

  businessShow: function(id) {
    var business = this.businesses.getOrFetch(id);
    var view = new Lunchin.Views.BusinessShow({ model: business });
    this._swapView(view);
  },

  businessIndex: function() {
    this.businesses.fetch();
    var view = new Lunchin.Views.BusinessesIndex({ collection: this.businesses });
    this._swapView(view);
  },

  searchForm: function() {
    var view = new Lunchin.Views.SearchForm();
    this._swapView(view);
  },

  searchResults: function(query) {
    var matchingBusinesses = new Lunchin.Collections.SearchResults({
      searchQuery: query
    });
    matchingBusinesses.fetch();
    var view = new Lunchin.Views.BusinessesIndex({collection: matchingBusinesses});
    this._swapView(view);
  },


  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
