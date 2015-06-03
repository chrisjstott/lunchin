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
    $('.datetimepicker').datetimepicker();
    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var moment = $('.datetimepicker').data("DateTimePicker").date();
    var time;
    if (!!moment) {
      time = moment.format('X');
    } else {
      time = 'now';
    }
    
    var location = $(event.target).serializeJSON().location || 'San Francisco';
    Backbone.history.navigate('search/' + location + '/' + time, {trigger: true});
  }
});
