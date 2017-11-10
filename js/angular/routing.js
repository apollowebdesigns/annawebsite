angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider) {
        var homeState = {
            name: 'home',
            url: '/',
            templateUrl: 'templates/home.html'
        };

        var gallery = {
            name: 'gallery',
            url: '/gallery',
            templateUrl: 'components/gallery/gallery.html'
        };

        var aboutState = {
            name: 'about',
            url: '/about',
            templateUrl: 'components/about/about.html'
        };

        $urlRouterProvider.when('', '/');
        $stateProvider.state(homeState);
        $stateProvider.state(gallery);
        $stateProvider.state(aboutState);
    });