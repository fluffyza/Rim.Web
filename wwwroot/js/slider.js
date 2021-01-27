function InitializeSlider() {
	$('.activate-slider').each(function () {
		$(this).on('click', function () {
			$(this).parentsUntil(".container-slider").parent().find('.overlay-slider').css('width', '100%');
			$(this).parentsUntil(".container-slider").parent().find('.container-slider-inner').css('overflow', 'hidden');
			$(this).parentsUntil(".container-slider").parent().find('.container-slider-inner').css('width', '0%');
			$(this).parentsUntil(".container-slider").parent().find('.container-slider-inner').css('min-height', '35vh');
			$(this).parentsUntil(".container-slider").parent().find('.container-slider-inner').css('max-height', '100vh');
		});
	});

	$('.de-activate-slider').each(function () {
		$(this).on('click', function () {
			$(this).parentsUntil(".container-slider").parent().find('.overlay-slider').css('width', '0%');
			$(this).parentsUntil(".container-slider").parent().find('.container-slider-inner').css('width', '100%');
			$(this).parentsUntil(".container-slider").parent().find('.container-slider-inner').css('height', 'initial');
		});
	});
}

function ManualCloseSlider(divToActivate) {
	$("#" + divToActivate).parentsUntil(".container-slider").parent().find('.overlay-slider').css('width', '0%');
	$("#" + divToActivate).parentsUntil(".container-slider").parent().find('.container-slider-inner').css('width', '100%');
	$(this).parentsUntil(".container-slider").parent().find('.container-slider-inner').css('height', 'initial');
}

function ManualOpenSlider(divToActivate) {
	$("#" + divToActivate).parentsUntil(".container-slider").parent().find('.overlay-slider').css('width', '100%');
	$("#" + divToActivate).parentsUntil(".container-slider").parent().find('.container-slider-inner').css('width', '0%');
	$(this).parentsUntil(".container-slider").parent().find('.container-slider-inner').css('overflow', 'hidden');
	$(this).parentsUntil(".container-slider").parent().find('.container-slider-inner').css('min-height', '35vh');
	$(this).parentsUntil(".container-slider").parent().find('.container-slider-inner').css('max-height', '100vh');
}