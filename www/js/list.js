angular.module('starter.attractions', [])
 
.factory('Attractions', function() {

	var attractions = [
			{id: 0 , name: 'Monuments', icon: '', 
				subCat: [
					{subId: 0, subName: "Catedrala", subImage: "" },
					{subId: 1, subName: "Bastion", subImage: "" }
				]},
			{id: 1 , name: 'Parks&Gardens', icon: ''},
			{id: 2 , name: 'Squares', icon: ''},
			{id: 3 , name: 'Statues', icon: ''}
		];	

  return {
    all: function() {
      return attractions;
    },
    remove: function(attraction) {
      attractions.splice(attractions.indexOf(attraction), 1);
    },
    get: function(attractionId) {
      for (var i = 0; i < attractions.length; i++) {
        if (attractions[i].id === parseInt(attractionId)) {
          return attractions[i];
        }
      }
      return null;
    }
  };
});