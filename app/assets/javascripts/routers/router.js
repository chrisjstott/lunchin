Lunchin.Routers.Router = Backbone.Router.extend({

  initialize: function() {
    this.collection = new Lunchin.Collections.Businesses;
    this.$rootEl = $('#main');
  },

  routes: {
    'businesses/:id': 'businessShow'
  },

  businessShow: function(id) {
    var business = this.collection.getOrFetch(id);
    var view = new Lunchin.Views.BusinessShow({ model: business });
    this._swapView(view);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
