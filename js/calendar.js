const decideEventClass = e => {
    let start = moment(e.start_date, "MMMM D, YYYY"),
        end = moment(e.end_date, "MMMM D, YYYY"),
        now = moment(),
        toStart = start.diff(now, 'days'),
        toEnd = end.diff(now, 'days')

    if (toStart > 4) return "event-info"
    if (toStart > 4) return "event-important"
    if (toStart < 0 && toEnd > 0) return "event-warning"
    if (toEnd < 0) return "event-success"
    return "event-info"
}

const eventsSource = () => events.map(e => {
    return {
        id: +e.id,
        title: e.name,
        url: "javascript:showEvent(events.find(e => e.id == " + e.id + "))",
        class: decideEventClass(e),
        start: moment(e.start_date, "MMMM D, YYYY").valueOf(),
        end: moment(e.end_date, "MMMM D, YYYY").valueOf()
    }
})

const listEvents = events => {
    let eventsDetailsContainer = $(".events-details-container"),
        mediaListContainer = $("<div>")
    mediaListContainer.appendTo(eventsDetailsContainer)

    events.forEach(e => {
        let media = '' + 
            '<div class="media media-list-events">' +
                '<div class="media-left media-top">' +
                    '<img class="media-object" src="' + e.picture + '" alt="' + e.name + '" data-event-id="' + e.id + '">' +
                '</div>' +
                '<div class="media-body">' +
                    '<h4 class="media-heading">' + e.name + '</h4>' +
                    '<p>Data: ' + e.start_date + ' a ' + e.end_date + '</p>' +
                    '<p>Bandas: ' +
                    bands
                        .filter(b => e.bands.indexOf(b.id) != -1)
                        .map(b => '<a href="' + b.web_site + '" target="_blank">' + b.name + '</a>')
                        .join(', ') + '</p>' +
                '</div>' +
            '</div>'
        
        let mediaEl = $(media)
        mediaEl.appendTo(mediaListContainer)
        mediaEl.find('img').each(function (key, value) {
            $(value).click(() => {
                mediaListContainer.hide()
                showEvent(events.find(e => e.id == $(value).attr("data-event-id")), mediaListContainer)
            })
        })
    })
}

const clarEventsList = () => $(".events-details-container").empty()

const showEvent = (event, eventsList) => {
    if (!eventsList) clarEventsList()
    let bandMedia =
        bands
            .filter(b => event.bands.indexOf(b.id) != -1)
            .map(b => {
                return '' +
                    '<div class="media media-list-bands">' +
                        '<div class="media-left media-top">' +
                            '<a href="' + b.web_site + '" target="_blank">' +
                                '<img class="media-object" src="' + b.picture + '" alt="' + b.name + '">' +
                            '</a>' +
                        '</div>' +
                        '<div class="media-body">' +
                            '<h5 class="media-heading">' + b.name + '</h5>' +
                            '<p><strong>Phone:</strong> ' + b.phone + '</p>' +
                            '<p><strong>Email:</strong> ' + b.email + '</p>' +
                        '</div>' +
                    '</div>'
            })
            .join(""),
        momentDate = moment(event.start_date, "MMMM D, YYYY"),
        media = '' +
            '<button class="btn btn-default btn-back" type="button">' +
                '<span class="glyphicon glyphicon-arrow-left">' +
                    'Voltar' +
                '</span>' +
            '</button>' +
            '<div class="row">' +
                '<div class="col-lg-3">' +
                    '<h1>' + momentDate.date() + '/' + (+momentDate.month() + 1) + '</h1>' +
                '</div>' +
                '<div class="col-lg-9">' +
                    '<h2>' + event.name + '</h2>' +
                '</div>' +
            '</div>' +
            '<img src="' + event.picture + '" alt="' + event.name + '" class="img-rounded media-show-event">' +
            '<p>' + event.description + '</p><br>' +
            '<h3>Bandas</h3>' +
            bandMedia + '<br>' +
            '<p><strong>Faixa etária:</strong> ' + event.age_rating + ' anos</p>' +
            '<p><strong>Endereço:</strong> ' + event.address + '</p>' +
            '<p><strong>Maiores informações:</strong> <a href="' + event.external_link + '" target="_blank">' + event.external_link + '</a>'
        
    let mediaEl = $(media)
    mediaEl.appendTo($(".events-details-container"))
    mediaEl.parent().find('.btn-back').click(() => {
        mediaEl.remove()
        if (eventsList) eventsList.show()
        else clarEventsList()
    })
}

const setupCalendar = () => {
    const calendar = $(".calendar-container").calendar({
        view: 'month',
		tmpl_path: 'bower_components/bootstrap-calendar/tmpls/',
        events_source: eventsSource,
        language: 'pt-BR',
        weekbox: false
    })

    $('*[data-cal-date]').click(function () {
        let date = $(this).attr('data-cal-date'),
            eventsToList = events.filter(e => {
                let momentClickedDay = moment(date),
                    momentStartEvent = moment(e.start_date, "MMMM D, YYYY"),
                    momentEndEvent = moment(e.end_date, "MMMM D, YYYY")

                return momentClickedDay.isBetween(momentStartEvent, momentEndEvent) ||
                    momentClickedDay.valueOf() == momentStartEvent.valueOf() ||
                    momentClickedDay.valueOf() == momentEndEvent.valueOf()
            })
        clarEventsList()
        listEvents(eventsToList)      
    });

    $('.btn-group button[data-calendar-nav]').each(function () {
		$(this).click(() => calendar.navigate($(this).data('calendar-nav')));
	});
}

functionOnLoadPage.push(setupCalendar);