Lunchin.Views.SearchForm = Backbone.View.extend({
  events: {'submit form.search-bar': 'submit'},

  template: JST['search/form'],

  render: function() {
    this.$el.html(this.template);
    return this;
  },

  submit: function(event) {
    debugger
    event.preventDefault();
    Backbone.history.navigate('businesses', {trigger: true});
  }

});
