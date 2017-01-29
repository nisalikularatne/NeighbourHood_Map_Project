/**
 * Created by Nisali Kularatne on 26/01/2017.
 */

//viewModel of the whole project
    //help taken from the knockout.js documentation
var viewModel=function() {

    var self = this;
    this.query = ko.observable('');
    this.locations = ko.observable(malls);
    this.location_image = ko.observable();
    this.marker='';
    this.location_name = ko.observable();
    this.review = ko.observable();
    this.markersArray = ko.observableArray([]);
    this.apiError = ko.observable(false);
    this.error_message = ko.observable();

    this.filteredQuery = ko.computed(function () {
       var q = self.query().toLowerCase();
        if(!q){
            for (var i = 0; i < self.markersArray().length; i++) {
         self.markersArray()[i][1].setVisible(true);
    }
            return malls;
        }
        else{

            return ko.utils.arrayFilter(malls, function(mall) {
                if(mall.name.toLowerCase().indexOf(q) >= 0) {
                   mall.marker.setVisible(true)
                    return mall;
                }
                else{
                     mall.marker.setVisible(false)
                }
            });
        }
    });

    this.displayWindow = function (mall) {
        for (var i = 0; i < malls.length; i++) {
            if (mall.name == malls[i].name) {
                FourSquareInformation(mall);
                var newMarker1 = markersArray()[i][1];
                stopBounce();
                toggleBounce(newMarker1);
                viewModel1.shouldShowMessage(true);


            };
        }
    }

};
