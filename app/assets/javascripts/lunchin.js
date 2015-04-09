window.Lunchin = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Lunchin.Routers.Router;
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Lunchin.initialize();
});
