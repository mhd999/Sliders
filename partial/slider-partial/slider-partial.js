(function() {
	'use strict';
/**
* @ngdoc function
* @name VascularApp.controller:categoriesCtrl
* @description
* # categoriesCtrl
* Controller of the VascularApp
*/
angular
	.module('sliderModule')
	.controller('SliderPartialCtrl', SliderPartialCtrl);
	SliderPartialCtrl.$inject = ['$scope'];
	function SliderPartialCtrl($scope) {
		$(document).ready(function () {

		    $("ul").itemslide({
		        one_item: true //Set this for proper full screen navigation
		    }); //initialize itemslide

		    $(window).resize(function () {
		        $("ul").reload();

		    }); //Recalculate width and center positions and sizes when window is resized
		});
	};
})();