// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.attractions'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })

    .state('app.cities', {
      url: '/cities',
      views: {
        'menuContent': {
          templateUrl: 'templates/cities.html'
        }
      }
    })

    .state('app.tm', {
      url: '/tm',
      views: {
        'menuContent': {
          templateUrl: 'templates/tm.html'        
        }
      }
    })

    .state('app.attractions', {
      url: '/tm/attractions',
      views: {
        'menuContent': {
          templateUrl: 'templates/attractions.html'       
        }
      }
    })

    .state('app.attractionsSub', {
      url: '/tm/attractions/:attractionId',
      views: {
        'menuContent': {
          templateUrl: 'templates/attractions-subcat.html',
          controller: 'AttractionNameCtrl'       
        }
      }
    })

    .state('app.places', {
      url: '/tm/places',
      views: {
        'menuContent': {
          templateUrl: 'templates/places.html'        
        }
      }
    })

    .state('app.info', {
      url: '/tm/info',
      views: {
        'menuContent': {
          templateUrl: 'templates/info.html'        
        }
      }
    })

    .state('app.cj', {
      url: '/cj',
      views: {
        'menuContent': {
          templateUrl: 'templates/cj.html'
        }
      }
    })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/cities');
});





