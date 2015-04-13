Lunchin.Views.SearchForm = Backbone.View.extend({
  events: {'submit form.search-bar': 'submit'},

  template: JST['businesses/search_form'],

  render: function() {
    this.$el.html(this.template);
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
