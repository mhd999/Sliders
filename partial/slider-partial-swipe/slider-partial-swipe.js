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
	.controller('SliderPartialSwipeCtrl', SliderPartialSwipeCtrl);
	SliderPartialSwipeCtrl.$inject = ['$scope'];
	function SliderPartialSwipeCtrl($scope) {
		// pure JS
var elem = document.getElementById('mySwipe');
window.mySwipe = Swipe(elem, {
  // startSlide: 4,
  // auto: 3000,
  // continuous: true,
  // disableScroll: true,
  // stopPropagation: true,
  // callback: function(index, element) {},
  // transitionEnd: function(index, element) {}
});
	};
})();