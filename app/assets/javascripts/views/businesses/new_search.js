Lunchin.Views.NewSearch = Backbone.CompositeView.extend ({
  template: JST['search/new'],

  events: {'submit form.search-bar': 'submit'},

  initialize: function() {
    // this.addSearch();
  },

  addSearch: function() {
    var subview = new Lunchin.Views.SearchForm();
    this.addSubview('.big-search', subview);
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },
  
  submit: function(event) {
    event.preventDefault();
    var searchQuery = $(event.target).serializeJSON().query;
    if (searchQuery) {
      Backbone.history.navigate('search/' + searchQuery, {trigger: true});
    } else {
      Backbone.history.navigate('businesses/all', {trigger: true});
    }
  }

});
