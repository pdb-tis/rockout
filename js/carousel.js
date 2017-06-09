const populateCarousel = function () {
    let carouselInner = $(".carousel-inner");
    carouselInner.empty();
    
    events.forEach(e => {
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
        carouselInner.append(div);
    });
    
    carouselInner.find(".item").first().addClass("active");
    $('.carousel').carousel();
}

functionOnLoadPage.push(populateCarousel);