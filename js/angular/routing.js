angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider) {
        var homeState = {
            name: 'home',
            url: '/',
            templateUrl: 'templates/home.html'
        };

        var aboutState = {
            name: 'about',
            url: '/about',
            templateUrl: 'components/about/about.html'
        };

        $urlRouterProvider.when('', '/');
        $stateProvider.state(homeState);
        $stateProvider.state(aboutState);
    });