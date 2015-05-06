Lunchin.Views.SearchForm = Backbone.View.extend({
  events: {'submit form.search-bar': 'submit'},

  template: JST['businesses/search_form'],

  initialize: function(options) {
    if(options.input) {
      this.input = options.input;
    } else {
      this.input = '';
    }
  },

  render: function() {
    var content = this.template({input: this.input});
    this.$el.html(content);
    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var searchQuery = $(event.target).serializeJSON().query + ', San Francisco';
    Backbone.history.navigate('search/' + searchQuery, {trigger: true});
  }
});
