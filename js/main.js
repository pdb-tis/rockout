const bands = [];
const events = [];
const functionOnLoadPage = [];
const getDataBase = () => $.getJSON("js/database.json", function(data) {
    $.each(data, function(key, val) {
        (key == 'bands' && val.forEach(band => bands.push(band)));
        (key == 'events' && val.forEach(event => events.push(event)));
    });
});

const showEvent = () => {};

$(document).ready(() => getDataBase().then(() => functionOnLoadPage.forEach(fn => fn())));

// --- on load functions --- //
functionOnLoadPage.push(populateCarousel);
//functionOnLoadPage.push(bandSearch);
