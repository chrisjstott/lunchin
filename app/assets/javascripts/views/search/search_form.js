Lunchin.Views.SearchForm = Backbone.View.extend({
  events: {'submit form.search-bar': 'submit'},

  template: JST['search/search_form'],

  initialize: function(options) {
    this.location = options.location;
    this.time = options.time;
  },

  render: function() {
    var content = this.template({
      location: this.location,
      time: this.time
    });
    this.$el.html(content);
    $('.datetimepicker').datetimepicker({
      format: 'MMMM Do, h:mm A',
    });
    if(!!this.time && this.time !== 'now') {
      $('.datetimepicker').data("DateTimePicker").defaultDate(moment.unix(this.time));
    }
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
