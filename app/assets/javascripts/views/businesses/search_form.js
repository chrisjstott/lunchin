Lunchin.Views.SearchForm = Backbone.View.extend({
  events: {'submit form.search-bar': 'submit'},

  template: JST['search/form'],

  render: function() {
    this.$el.html(this.template);
    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var searchQuery = $(event.target).serializeJSON().query;
    Backbone.history.navigate('search/' + searchQuery, {trigger: true});
  }
});
