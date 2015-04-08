Lunchin.Routers.Router = Backbone.Router.extend({
  routes: {
    'businesses/:id': 'businessShow'
  },

  businessShow: function(id) {
    var business = Lunchin.Collections.Businesses.getOrFetch(id);

    var view = new Lunchin.Views.BusinessShow({ model: business });
    this.$rootEl.html(view.render().$el);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
