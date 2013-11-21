BasicBackboneExample.Views.PhotosIndex = Backbone.View.extend({

  tagName: 'ul',

  template = _template( $('#photo-index-template').html() ),

  appendPhoto: function(photo){
    console.log("appending photo");
    photo_view = new BasicBackboneExample.Views.Photo({ model: photo });
    $('#photos').append(photo_view.render().el);
  },

  render: function(){
    this.$el.html(this.template());
    this.collection.each(this.appendPhoto, this);
    console.log("leaving render");
    return this;
  }

});
