var app = angular.module("GabTV", ["ngRoute"]);
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
    
    // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/erro' });
});