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
	.controller('SliderPartialIscrollCtrl', SliderPartialIscrollCtrl);
	SliderPartialIscrollCtrl.$inject = ['$scope'];
	function SliderPartialIscrollCtrl($scope) {
		loaded();
		var myScroll;
		function loaded () {
			myScroll = new IScroll('#wrapper', {
				scrollX: true,
				scrollY: false,
				momentum: false,
				snap: true,
				snapSpeed: 400,
				keyBindings: true,
				indicators: {
					el: document.getElementById('indicator'),
					resize: false
				}
			});
		}
	};
})();