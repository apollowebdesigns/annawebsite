angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider) {
        var homeState = {
            name: 'home',
            url: '/',
            templateUrl: 'components/home/home.html'
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

        var inspiration = {
            name: 'inspiration',
            url: '/inspiration',
            templateUrl: 'components/inspiration/inspiration.html'
        };

        var contact = {
            name: 'contact',
            url: '/contact',
            templateUrl: 'components/contact/contact.html'
        };

        $urlRouterProvider.when('', '/');
        $stateProvider.state(homeState);
        $stateProvider.state(gallery);
        $stateProvider.state(aboutState);
        $stateProvider.state(inspiration);
        $stateProvider.state(contact);
    });