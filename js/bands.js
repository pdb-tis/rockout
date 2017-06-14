var jsonData = []

$.get( "js/database.json", function(data) {
    jsonData = data;
});   

    function loadBands() {
        var saida = '';

        //for(j = 0; j < 3; j++){
            for (i = 0; i < jsonData.length; i++) {
            saida += '<div class="row">';
            saida += '<div class="col-lg-4 band-img">';
            saida += '<img src="' + bands[i].picture + '" alt="' + bands[i].name + '" title="' + bands[i].name + '">';
            saida += '</div>';
            saida += '</div>';
            };
        //};

        document.getElementById ('tela').innerHTML = saida;
    }