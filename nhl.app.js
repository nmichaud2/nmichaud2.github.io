angular.module('app', ['ngMaterial','ngResource','player.svc'] )
	.config(function($mdThemingProvider, $mdIconProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('indigo', {
				'default': '500',
					'hue-1': '100',
					'hue-2': '500',
					'hue-3': '900'
			})
			.accentPalette('pink', {
					'default': 'A200',
					'hue-1': 'A100',
					'hue-2': 'A200',
					'hue-3': 'A400'
			});

			$mdIconProvider
				.iconSet('action', 'material-design-icons/svg-sprite-action.svg', 24)
				.iconSet('alert', 'material-design-icons/svg-sprite-alert.svg', 24)
				.iconSet('av', 'material-design-icons/svg-sprite-av.svg', 24)
				.iconSet('communication', 'material-design-icons/svg-sprite-communication.svg', 24)
				.iconSet('content', 'material-design-icons/svg-sprite-content.svg', 24)
				.iconSet('device', 'material-design-icons/svg-sprite-device.svg', 24)
				.iconSet('editor', 'material-design-icons/svg-sprite-editor.svg', 24)
				.iconSet('file', 'material-design-icons/svg-sprite-file.svg', 24)
				.iconSet('hardware', 'material-design-icons/svg-sprite-hardware.svg', 24)
				.iconSet('image', 'material-design-icons/svg-sprite-image.svg', 24)
				.iconSet('maps', 'material-design-icons/svg-sprite-maps.svg', 24)
				.iconSet('navigation', 'material-design-icons/svg-sprite-navigation.svg', 24)
				.iconSet('notification', 'material-design-icons/svg-sprite-notification.svg', 24)
				.iconSet('social', 'material-design-icons/svg-sprite-social.svg', 24)
				.iconSet('toggle', 'material-design-icons/svg-sprite-toggle.svg', 24)
				.defaultIconSet('action', 'static/assets/lib/material-design-icons/svg-sprite-action.svg', 24);
	})
