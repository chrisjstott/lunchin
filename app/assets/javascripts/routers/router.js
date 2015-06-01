Lunchin.Routers.Router = Backbone.Router.extend({

  initialize: function(options) {
    this.currentUserId = options.currentUserId;
    this.businesses = new Lunchin.Collections.Businesses;
    this.$rootEl = $('#main');
  },

  routes: {
    '': 'newSearch',
    'businesses/:id': 'businessShow',
    'businesses/:id/review': 'reviewForm',
    'search/:query': 'searchResults',
  },

  newSearch: function() {
    var view = new Lunchin.Views.NewSearch;
    this._swapView(view);
  },

  businessShow: function(id) {
    var business = this.businesses.getOrFetch(id);
    var view = new Lunchin.Views.BusinessShow({ model: business });
    this._swapView(view);
  },

  reviewForm: function(id) {
    var business = this.businesses.getOrFetch(id);
    var view = new Lunchin.Views.ReviewForm({ model: business });
    this._swapView(view);
  },

  searchResults: function(query) {
    var openings = new Lunchin.Collections.Openings([], {
      query: query
    });
    openings.fetch();
    var view = new Lunchin.Views.SearchResults({
      collection: openings,
      location: query
    });
    this._swapView(view);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
