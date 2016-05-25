//$(document).ready(function(){


var laty = 0;
var long = 0;
var map;
var marker;

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: laty, lng: long},
            scrollwheel: false,
            zoom: 12
        });

        marker = new google.maps.Marker({
          position: myLatLng,
          map: map
        });
    }

$("#submitName").on("click", function(){

    $(".animalInfo").empty();

    var name = $("#animalName").val().trim();

    var breedType = $("#breedName").val().trim();

    var zip = $("#zip").val().trim();

    var apiMap = "https://maps.googleapis.com/maps/api/geocode/json?address=postal_code:" + zip + "&key=AIzaSyC1mvi9WJalAJi7wOxXsYjqtwbDU3h6C5s";

    $.ajax({
        url: apiMap,
        method: 'GET'
    }).done(function(mapData) {
        laty = mapData.results[0].geometry.location.lat;
        long = mapData.results[0].geometry.location.lng;
        var cityName = ("<div>" + mapData.results[0].formatted_address + "</div>");
        $(".mapTitle").html(cityName)
        console.log(mapData);
        initMap();
        });

    var apiBreed = "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" + breedType + "&callback=?";
 
    $.ajax({
        type: "GET",
        url: apiBreed,
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {

            console.log('Wiki Data retrieved!')
            console.log(data);
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
 
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
            // remove any references
            blurb.find('sup').remove();
 
            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            $('.result').html($(blurb).find('p'));
 
        },

        error: function (errorMessage) {
        }

    })

    $.getJSON('http://api.petfinder.com/breed.list?format=json&key=542589b85677d309b9e508711958b27a&animal=' + name + '&callback=?'
            ).done(function(breedData) { 

            console.log('Breed Data retrieved!')
            console.log(breedData);
             
            });

    $.getJSON('http://api.petfinder.com/shelter.find?format=json&key=542589b85677d309b9e508711958b27a&location=' + zip + '&callback=?'
            ).done(function(shelterData) { 

            console.log('Shelter Data retrieved!')
            console.log(shelterData);
             
            });

    $.getJSON('http://api.petfinder.com/pet.find?format=json&key=542589b85677d309b9e508711958b27a&breed=' + breedType + '&location=' + zip + '&count=10&output=full&callback=?'
            ).done(function(petData) { 

            console.log('Pet Data retrieved!')
            console.log(petData);

            for (var i = 0; i < petData.petfinder.pets.pet.length; i++){
                var animalDiv = $("<div class='petDiv'>");
                animalDiv.attr({
                    height: '25%',
                    width: '100%'
                })

                var animalInfo = $("<div class='petInfo'>"
                    + "<div class='title'>Name: </div>" + "  " + petData.petfinder.pets.pet[i].name.$t + " "
                    + "<div class='title'>Gender: </div>" + "  " + petData.petfinder.pets.pet[i].sex.$t + " "
                    + "<div class='title'>Age: </div>" + "  " + petData.petfinder.pets.pet[i].age.$t + " "
                    + "<div class='title'>Mix: </div>" + "  " + petData.petfinder.pets.pet[i].mix.$t + " "
                    + "<div class='title'>Size: </div>" + "  " + petData.petfinder.pets.pet[i].size.$t + " "
                    + "<div class='title'>About Me: </div>" + "  " + petData.petfinder.pets.pet[i].description.$t + " "
                    + "</div>");

                var animalImg = $("<img class='petPic'>");
                animalImg.attr({
                    src: petData.petfinder.pets.pet[i].media.photos.photo[2].$t,
                    height: '200px',
                    width: '200px'
               });

                animalDiv.append(animalImg);
                animalDiv.append(animalInfo)


                $(".animalInfo").append(animalDiv); 
            }
             
            });  

   return false;
});



//});
