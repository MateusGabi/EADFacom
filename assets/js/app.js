var app = angular.module("EADFacom", ["ngRoute"]);
app.config(function($routeProvider) {

    $routeProvider
    .when("/", {
        templateUrl : "views/main.html"
    })
    .when("/entrar", {
        templateUrl : "views/loggin.html"
    })
    .when("/erro", {
        templateUrl : "views/erro.html"
    })
    .when("/cursos", {
        templateUrl : "views/cursos.html"
    })
    
    // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/erro' });
});

app.controller("IndexController", ['$scope', function ($scope) {

    $scope.app_name = "EAD Facom";

}]);