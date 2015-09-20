angular.module('sliderModule', ['ui.bootstrap','ui.utils','ui.router','ngAnimate'])

.config(function($stateProvider) {
	$stateProvider

    .state('slider', {
 		url: '/slider',
        templateUrl: 'partial/slider-partial/slider-partial.html',
        controller: 'SliderPartialCtrl'
    })
    .state('slider-iscroll', {
 		url: '/slider-iscorll',
        templateUrl: 'partial/slider-partial-iscroll/slider-partial-iscroll.html',
        controller: 'SliderPartialIscrollCtrl'
    })
    .state('slider-swipe', {
 		url: '/slider-swipe',
        templateUrl: 'partial/slider-partial-swipe/slider-partial-swipe.html',
        controller: 'SliderPartialSwipeCtrl'
    });

});

