//most of the code taken from resources from google maps api and help from stackoverflow and the udacity discussion forum
var marker;
var new1=[]
var map;
var mallsLength=malls.length;
//function takes from google javascript API
function MarkerInsertion(mall) {
    marker = new google.maps.Marker({
        map: map,
        position: mall.location,
        animation: google.maps.Animation.DROP
    });
        if (self.marker) {

        self.markersArray().push([mall.location,
            self.marker]);
        google.maps.event.addListener(marker, 'click', function() {
            stopBounce();
            self.toggleBounce(this);
            FourSquareInformation(mall);
            viewModel1.shouldShowMessage(true);
            });

    }
    return marker;
}

//init function to load the map and markers
function initMap() {
    var pavilion = {lat: 3.149111199999999, lng: 101.71349959999998};
    map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: pavilion
      });
    for(var i=0; i<mallsLength; i++){
        MarkerInsertion(malls[i]);
        malls[i].marker=self.marker;

    };
          //adding the bounds for all the markers to fit on the screen
          bounds = new google.maps.LatLngBounds();
          google.maps.event.addDomListener(window, 'load', withBounds);
    google.maps.event.addDomListener(window, 'resize', withBounds);
          function withBounds() {
              map.setCenter({lat: 3.149111199999999, lng: 101.71349959999998});
              for (var i = 0; i < self.markersArray().length; i++) {
                  self.markersArray()[i][1].setMap(map);
                  bounds.extend(markersArray()[i][1].position);
              }


              map.fitBounds(bounds);
          }

}


//error message which gets displayed when the google maps fail to load onscreen
var googleError = function(){
    alert('Google Maps API fails')
};
var ErrorFourSquare=function(){
    alert('FourSquare API fails')
}
//function to toggle the marker and get the animation on marker to work
//function taken from stackoverflow
var toggleBounce=function(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function(){
        marker.setAnimation(null);
    }, 60000);
}
var stopBounce = function(){
    for(var i=0; i<self.markersArray().length; i++ ){
        self.markersArray()[i][1].setAnimation(null);
    }
}

//apply binding
ko.applyBindings(viewModel);

