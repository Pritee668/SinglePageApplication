var myApp = angular.module('myApp', ['ngRoute'])


myApp.config(["$routeProvider" , function($routeProvider)
{
	$routeProvider.
	when('/BegumHajaratMahal',{
		templateUrl : "views/begumHajarat.html",
		
	}).
	when('/ChandraShekharAzad',{
		templateUrl : "views/ChandraShekharAzad.html",
	}).
	when('/Lakshmibai',{
		templateUrl : "views/lakshmibai.html",
		
	}).   
	when('/TatyaTope',{
		templateUrl : "views/tatya.html",
		
	}).
	otherwise({
		redirectTo:"indext.html"
	});
}]);


myApp.controller('ctrl', function($scope){

});





