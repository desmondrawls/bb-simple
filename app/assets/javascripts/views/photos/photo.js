BasicBackboneExample.Views.Photo = Backbone.View.extend ({

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove); 
    },
  
  tagName: 'li',

  el: '#photos'.

  className: 'photo_list_item',

  render: function() {
    this.$el.html(this.template(photo: this.model.toJSON()));
    return this;
  }

});