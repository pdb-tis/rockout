function submitForm() {
    var band = {
        url: 'js/database.json',
        data: {
            name: document.getElementById('bandInput').value
        },
        success: function(data) {
            var id = data.results[0].match('id');
			var name = data.results[0].match('name');
			var email = data.results[0].match('email');
			var phone = data.results[0].match('phone');
			var description = data.results[0].match('description');
			var web_site = data.results[0].match('web_site');
			var picture = data.results[0].match('picture');
        }
    };
    $.ajax(band);
}
