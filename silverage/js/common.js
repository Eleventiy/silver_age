(function ($) {
	Drupal.behaviors.myModuleBehavior = {
		attach: function (context, settings) {

			// Masonry "Inner pages Gallery"
			$('.inner-gallery').masonry({
				itemSelector: '.views-field',
				columnWidth: 260,
				gutter: 30
			});

		}
	};
})(jQuery);