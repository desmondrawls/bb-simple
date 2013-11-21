BasicBackboneExample.Views.PhotosIndex = Backbone.View.extend({

  tagName: 'ul',
  id: 'photos',



  appendPhoto: function(photo){
    console.log("appending photo");
    photo_view = new BasicBackboneExample.Views.Photo({ model: photo });
    $('#photos').append(photo_view.render().el);
  },

  render: function(){
    debugger;
    this.collection.each(this.appendPhoto, this);
    console.log("leaving render");
    return this;
  }

});
