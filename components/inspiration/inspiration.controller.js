(function () {
    angular
        .module('app')
        .controller('InspirationController', InspirationController);

    function InspirationController() {
        (function () {
            $(document).ready(function(){
                $('.carousel').carousel();
            });
        })();
    }
})();