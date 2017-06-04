const bands = [];
const events = [];

(() => $.getJSON("js/database.json", function(data) {
		$.each(data, function(key, val) {
			(key == 'bands' && val.forEach(band => bands.push(band)));
			(key == 'events' && val.forEach(band => events.push(band)));
		});
	})
)();