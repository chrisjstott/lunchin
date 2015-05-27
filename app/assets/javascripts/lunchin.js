window.Lunchin = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    this.currentUserId = options.currentUserId;
    new Lunchin.Routers.Router({
      currentUserId: options.currentUserId
    });
    Backbone.history.start();
  }
};

