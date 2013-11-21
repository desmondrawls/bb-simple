BasicBackboneExample.Views.PhotosIndex = Backbone.View.extend({

  tagName: 'ul',

  appendPhoto: function(photo){
    console.log("appending photo");
    photo_view = new BasicBackboneExample.Views.Photo({ model: photo });
    this.$el.append(photo_view.render().el);
  },

  render: function(){
    this.collection.each(this.appendPhoto, this);
    console.log("leaving render");
    return this;
  }

});
