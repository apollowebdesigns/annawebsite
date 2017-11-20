(function () {
    angular
        .module('app')
        .controller('ContactController', ContactController);

    ContactController.$inject = ['$scope'];

    function ContactController($scope) {
        var vm = this;

        // function to submit the form after all validation has occurred
        vm.submitForm = function(isValid) {

            // check to make sure the form is completely valid
            if (isValid) {
                alert('our form is amazing' + $scope.user + ' is this!!!!');
            }

        };
    }
})();