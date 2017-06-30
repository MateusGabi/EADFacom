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
    .when("/cursos/material", {
        templateUrl: "views/cursos/cursos.material.html",
        controller: "CursosController"
    })
    .when("/tarefas", {
        templateUrl: "views/tarefas/tarefas.listagem.html",
        controller: "TarefasController"
    })
    .when("/tarefas/submeter", {
        templateUrl: "views/tarefas/tarefas.submeter.html",
        controller: "TarefasController"
    })
    
    // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/erro' });
});

app.controller("IndexController", ['$scope', function ($scope) {

    $scope.app_name = "EAD Facom";

}]);

app.controller("CursosController", ['$scope', function ($scope) {

}]);

app.controller("TarefasController", ['$scope', function ($scope) {

}]);