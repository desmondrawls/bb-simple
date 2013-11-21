class BasicBackboneExample.Routers.Photos extends Backbone.Router
  routes:
    '': 'main'

  initialize: ->
    console.log("in initialize")
    @photos = new BasicBackboneExample.Collections.Photos()

  main: ->
    console.log("in main")
    @photos.fetch success: =>
      indexview = new BasicBackboneExample.PhotosIndex(collection: @photos)
      $('#container').html(indexview.render().el)