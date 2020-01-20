var $ = require('jquery');

$(document).ready(() => {
	/* hover effects over ShishaDot for header*/
	$('h4#forHeader').mouseover(() => {
		$('body').css('background', 'whitesmoke');
		$('h4#forHeader').css('color', '#00022f', 'transform', 'scale(0.8)', 'opacity', '0.8');
	});

	$('h4#forHeader').mouseout(() => {
		$('body').css('background', '#00022f');
		$('h4#forHeader').css('color', 'whitesmoke', 'transform', 'scale(1)', 'opacity', '1');
	});

	$('h4#forHeader').click(() => {
		$('body').css('background', 'whitesmoke');
		$('h4#forHeader').css('color', '#00022f', 'transform', 'scale(0.8)', 'opacity', '0.8');
	});

	$('h4#forHeader').mouseout(() => {
		$('body').css('background', '#00022f');
		$('h4#forHeader').css('color', 'whitesmoke', 'transform', 'scale(1)', 'opacity', '1');
	});
	/* end of hover over Shisha Dot header */

	/*hover effect of ShishaDot with header */
	$('h3#withHeader').mouseover(() => {
		$('.locations').removeClass('bg-light');
		$('h3#withHeader').css('color', 'whitesmoke');
		$('h4.withSubHeader').css('color', 'whitesmoke');
		$('p.withParagraph').css('color', 'whitesmoke');
	});

	$('h3#withHeader').mouseout(() => {
		$('.locations').addClass('bg-light');
		$('h3#withHeader').css('color', '#00022f');
		$('h4.withSubHeader').css('color', '#00022f');
		$('p.withParagraph').css('color', '#00022f');
	});
	/* end of hover ShishaDot with header */


	/* Show me/Hide me button clicked effect */
	$('button#showDescr').click(() => {
		let action = document.getElementById('showDescr');

		switch(action.innerHTML) {
			case 'Show Me':
			{
				$('.description').fadeIn();
				action.innerHTML = 'Hide Me';
				break;
			}
			case 'Hide Me':
			{
				$('.description').fadeOut();
				action.innerHTML = 'Show Me';
				break;
			}
			default:
			{
				alert('Error occured. Please refresh page.');
				break;
			}
		}
	});
	/*end of Show me/Hide me button clicked effect */
});