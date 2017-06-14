$( function() {
    var bandNames = [
        "Fresno",
        "Riviera",
        "Elizia",
        "Opeth",
        "Thank You Scientist",
        "Ancient Mariners",
        "Anthology - Beatles Cover Brasil",
        "Pink Floyd Collection",
        "Folsoms",
        "Hillbilly Rawhide",
        "Calix",
        "Aeroguns",
        "Ca$h",
        "Lurex",
        "Seu Madruga AC/DC Cover",
        "Velotrol",
        "Singles",
        "Uai Horses",
        "Laranja Mecânica",
        "Banda Led III"
    ];

    $( "#bandInput" ).autocomplete({
        source: bandNames
    });
});

function search() {
    var i;
    var band = document.getElementById('bandInput').value;
    var bandArray = [
        "Fresno",
        "Riviera",
        "Elizia",
        "Opeth",
        "Thank You Scientist",
        "Ancient Mariners",
        "Anthology - Beatles Cover Brasil",
        "Pink Floyd Collection",
        "Folsoms",
        "Hillbilly Rawhide",
        "Calix",
        "Aeroguns",
        "Ca$h",
        "Lurex",
        "Seu Madruga AC/DC Cover",
        "Velotrol",
        "Singles",
        "Uai Horses",
        "Laranja Mecânica",
        "Banda Led III"
    ];
    for(i=0; i<20; i++) {
        if(bandArray[i] == band)
            return loadInfoBand(i);
    }
}
