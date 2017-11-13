angular
    .module('app', ['ui.router'])
    .controller('AppController', AppController);

function AppController() {
    var vm = this;

    vm.loadStyle = loadStyle;

    function loadStyle() {
        $(document).ready(function(){
            console.log('hit');
            $('.carousel').carousel();
        });
    }
}