/**
 * Created by Nisali Kularatne on 26/01/2017.
 */
var FourSquareInformation = function(mall){
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth()+1;
    var year = today.getFullYear();

    if(day<10){
        day='0'+day
    }
    if(month<10){
        month='0'+month
    }
    var today = ""+year+month+day+"";

    var venue_id = mall.venue_id;
    var client_id = "SX0M00Y43GJFMFPEYBAFAETWJ14251WYFCEIPO2KCO4LRK3Z";
    var client_secret = "EPHQUG3PY5IHF0205RV00LDT33B13XVWCXRUQ0A5P40WXDSZ";
    var FoursquareUrl = "https://api.foursquare.com/v2/venues/"+venue_id+"?client_id="+client_id+"&client_secret="+client_secret+"&v="+today+"" ;

    $.ajax({
        url:FoursquareUrl,
        dataType:"json",
        async:true
    }).success(function(data){
            self.location_name(data.response.venue.name);

            var image_prefix = data.response.venue.bestPhoto.prefix;
            var image_suffix = data.response.venue.bestPhoto.suffix;
            self.location_image(image_prefix +"320x200"+ image_suffix);
            if(data.response.venue.tips.groups[0].items[0].text){
                self.review(data.response.venue.tips.groups[0].items[0].text);
            }

    }).error(function(data){
      ErrorFourSquare();
    })

};
