var mainApp = angular.module('mainApp',['ngRoute','mainLayoutApp']);
mainApp.controller('mainAppController',function(){
    alert("Hi")
});


var mainLayoutApp = angular.module("mainLayoutApp", ["ngRoute"]);
mainLayoutApp.controller("mainLayoutAppController", function($scope) {
    alert("load mainLayoutAppController");
});
