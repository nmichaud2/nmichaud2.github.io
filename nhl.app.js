angular.module('app', ['ngMaterial','ngResource','player.svc'] )
	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('blue', {
				'default': '700',
					'hue-1': '100',
					'hue-2': '700',
					'hue-3': '900'
			})
			.accentPalette('deep-orange', {
					'default': 'A200',
					'hue-1': 'A100',
					'hue-2': 'A200',
					'hue-3': 'A400'
			});
	})
