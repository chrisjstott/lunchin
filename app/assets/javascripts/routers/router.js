Lunchin.Routers.Router = Backbone.Router.extend({

  initialize: function(options) {
    this.currentUserId = options.currentUserId;
    this.businesses = new Lunchin.Collections.Businesses();
    this.$headerEl = $('#header');
    this.$rootEl = $('#main');
  },

  routes: {
    '': 'newSearch',
    'businesses/:id': 'businessShow',
    'businesses/:id/review': 'reviewForm',
    'search/:location': 'searchResults',
    'search/:location/:time': 'searchResults',
  },

  newSearch: function() {
    var view = new Lunchin.Views.NewSearch();
    this._swapView(view, '');
  },

  businessShow: function(id) {
    var business = this.businesses.getOrFetch(id);
    var view = new Lunchin.Views.BusinessShow({ model: business });
    var header = new Lunchin.Views.SearchForm();

    this._swapView(view, header);
  },

  reviewForm: function(id) {
    var business = this.businesses.getOrFetch(id);
    var view = new Lunchin.Views.ReviewForm({ model: business });
    var header = new Lunchin.Views.SearchForm();

    this._swapView(view, header);
  },

  searchResults: function(location, time) {
    var openings = new Lunchin.Collections.Openings([], {
      location: location,
      time: time
    });
    openings.fetch();
    
    var view = new Lunchin.Views.SearchResults({
      collection: openings,
      location: location
    });
    
    var header = new Lunchin.Views.SearchForm({
      location: location,
      time: time
    });
    
    this._swapView(view, header);
  },

  _swapView: function(view, header) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this._currentHeader && this._currentHeader.remove();
    this._currentHeader = header;
    this.$headerEl.html(header.$el);
    this.$rootEl.html(view.$el);
    header && header.render();
    view.render();
  }
});
