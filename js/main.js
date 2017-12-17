;(function($) {
	"use strict";
	var info = $('.ba-content__information'),
		ratings = $('.ba-content__ratings'),
		buy = $('.ba-content__buy'),
		clickInfo = $('.ba-information'),
		clickRatings = $('.ba-ratings'),
		clickBuy = $('.ba-buy'),
		item = $('.ba-slider__part');


		item.on('click', function(e){
			$(this).siblings().removeClass('ba-active');
			$(this).addClass('ba-active');
		});

		buy.hide();
		ratings.hide();

		clickRatings.on('click', function (e){
			ratings.show();
			$(ratings).siblings().hide();
		});

		clickBuy.on('click', function (e){
			buy.show();
			$(buy).siblings().hide();
		});

		clickInfo.on('click', function (e){
			info.show();
			$(info).siblings().hide();
		});


})(jQuery);

