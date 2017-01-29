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
       q = self.query();
        if(!q){
            MarkersDisplay();
            return malls;
        }
        else{
            MarkersDeletion();
            return ko.utils.arrayFilter(malls, function(mall) {
                if(mall.name.toLowerCase().indexOf(q) >= 0) {
                    AddMarker(mall);
                    return mall;
                }
            });
        }
    });

    this.displayWindow = function (mall) {
        for (var i = 0; i < malls.length; i++) {
            if (mall.name == malls[i].name) {
                var newMarker1 = markersArray()[i][1];
                stopBounce();
                toggleBounce(newMarker1);
                FourSquareInformation(mall);
                viewModel1.shouldShowMessage(true);


            };
        }
    }

};
