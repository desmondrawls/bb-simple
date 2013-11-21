BasicBackboneExample.Collections.Photos = Backbone.Collection.extend({
  url: '/api/photos',
  model: BasicBackboneExample.Models.Photo
});