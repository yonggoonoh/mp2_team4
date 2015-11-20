var wishbox = [];

$(document).on('ready page:load', function() {
	// Make wishbox contents
	$(".recommend #lecture-container-body").on('click', '.lecture_select', function() {
		if ($(this).data('checked') == '0') {
			$.ajax({
				url: window.location.origin + '/recommend/update_wishbox',
				dataType: "script",
				data: {
					lecture_id: $(this).prop('id')
				}
			});
		} else {
			wishbox.splice(jQuery.inArray($(this).prop('id'),wishbox),1);

			$(this).data('checked','0');
			$(this).css('background-color','');
			$('.'+$(this).prop('id')).remove();
		}
	});

	$('#wishlist').on('click', '.xbtn', function() {
		var lecture_id = parseInt($(this).parent().prop('class'))	;

		wishbox.splice(jQuery.inArray(lecture_id,wishbox), 1);
		
		$('#' + lecture_id).data('checked','0');
		$('.' + lecture_id).remove();
		$('#' + lecture_id).css('background-color','');
	});
});