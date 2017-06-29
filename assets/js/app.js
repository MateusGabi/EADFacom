var app = angular.module("EADFacom", ["ngRoute"]);
app.config(function($routeProvider) {

    $routeProvider
    .when("/inicio", {
        templateUrl : "views/inicio.html",
        controller: "IndexController"
    })
    .when("/erro", {
        templateUrl : "views/erro.html"
    })
    .when("/cursos", {
        templateUrl : "views/cursos/cursos.meus.html",
        controller: "CursosController"
    })
    .when("/cursos/adicionar", {
        templateUrl: "views/cursos/cursos.adicionar.html",
        controller: "CursosController"
    })
    
    // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/erro' });
});

app.controller("IndexController", ['$scope', function ($scope) {

    $scope.app_name = "EAD Facom";

}]);

app.controller("CursosController", ['$scope', '$timeout', function ($scope, $timeout) {
    
    $scope.showPopUpSenha = function () {
        
        //
        // TODO Método que mostra popup pedindo senha
        //

        $("#dialog").showModal();
    };

}]);