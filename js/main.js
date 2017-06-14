const bands = []
const events = []

// Array of functions that may need to be executed after the database is fetched.
// Add functions pushing it inside your own custom js file to keep things organized.
const functionOnLoadPage = []
const getDataBase = () => $.getJSON("js/database.json", function(data) {
	    $.each(data, function(key, val) {
	        (key == 'bands' && val.forEach(band => bands.push(band)));
	        (key == 'events' && val.forEach(event => events.push(event)));
	    })
	}).fail(function () { console.log(arguments) })

// Temporary
const showEvent = () => {}

$(document).ready(() => getDataBase().then(() => functionOnLoadPage.forEach(fn => fn())))
functionOnLoadPage.push(loadBands);