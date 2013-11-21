window.BasicBackboneExample =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  initialize: -> 
    alert 'Hello from Backbone!'
    new BasicBackboneExample.Routers.Photos
    Backbone.history.start(pushState: true)


$(document).ready ->
  debugger
  BasicBackboneExample.initialize()
