const populateBandsWall = function () {
    let bandsInner = $(".bands-inner");
    bandsInner.empty();
    
    bands.forEach(e => {
       let div = $("<div>"),
           img = $("<img>"),
           divCaption = $("<div>"),
           h3 = $("<h3>");
        
        div.addClass("item");
        img.attr("src", e.picture);
        divCaption.addClass("carousel-caption");
        h3.text(e.name);
        h3.click(showEvent(e.id));
        
        divCaption.append(h3);
        div.append(img);
        div.append(divCaption);
        bandsInner.append(div);
    });
    
    bandsInner.find(".item").first().addClass("active");
    $('.bands').carousel();
}