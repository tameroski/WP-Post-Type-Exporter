(function($) {
	'use strict';

	$(document).ready(function() {

		// Showing the export form for each CPT
		for (var i = 0; i < data.post_types.length; i++) {
			$($('.edit-php.post-type-' + data.post_types[i] + ' .wrap .page-title-action')[0]).after('<div id="pte-export"><labels class="screen-reader-text" for="pte-export-start">' + data.labels.start + '</labels><input id="pte-export-start" class="datepicker start" placeholder="' + data.labels.start_short + '"/><labels class="screen-reader-text" for="pte-export-end">' + data.labels.end + '</labels><input id="pte-export-end" class="datepicker end" placeholder="' + data.labels.end_short + '"/><a href="#" class="button" data-post-type="' + data.post_types[i] + '">' + data.labels.export_button + '</a><div class="message"></div></div>');
		}

		// Date picker init
		$('.datepicker').pickadate({
			format: 'dd/mm/yyyy',
		});

		// Submit
		$('#pte-export a').click(function(e) {
			e.preventDefault();

			var start = $('#pte-export .start').val();
			var end = $('#pte-export .end').val();
			var post_type = $(this).data('post-type');
			var $message = $('#pte-export .message');

			$message.text('');

			if (start.length == 0) {
				$message.text(data.labels.error_start);
			} else if (end.length == 0) {
				$message.text(data.labels.error_end);
			} else if (post_type.length == 0) {
				$message.text(data.labels.error_cpt);
			} else {
				document.location = data.link + "?post_type=" + post_type + "&start=" + start + "&end=" + end;
			}
		});
	});

})(jQuery);
