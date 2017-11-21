(function () {
    angular
        .module('app')
        .controller('ContactController', ContactController);

    ContactController.$inject = ['$scope', '$http'];

    function ContactController($scope, $http) {
        var vm = this;

        // function to submit the form after all validation has occurred
        vm.submitForm = function(isValid) {

            // check to make sure the form is completely valid
            console.log('user form sent successfully');
            console.log($scope.user);

            var url = 'https://uyolovpg91.execute-api.us-west-2.amazonaws.com/prod/contactHandler';

            $http({
                method: 'GET',
                url: url,
                headers:
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                console.log(response);
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

        };
    }
})();