BasicBackboneExample.Views.Photo = Backbone.View.extend ({

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove); 
    },
  
  template: _.template("<h1>hi</h1>"),

  className: 'photo_list_item',

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});