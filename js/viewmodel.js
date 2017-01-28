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
     for (var i = 0; i < malls.length; i++) {
      malls[i].marker = marker;
    }
    this.filteredQuery = ko.computed(function () {
       var q = self.query().toLowerCase();

            return ko.utils.arrayFilter(self.locations(), function (mall) {
                var match = mall.name.toLowerCase().indexOf(q) > -1;
                  for (var i = 0; i < malls.length; i++) {
                      if (mall.name == malls[i].name) {
                          var newMarker = markersArray()[i][1];
                          newMarker.setVisible(match);

                      }


                  }
                    return match;
            });
    },this);

    this.displayWindow = function (mall) {
        for (var i = 0; i < malls.length; i++) {
            if (mall.name == malls[i].name) {
                var newMarker = markersArray()[i][1];
                stopBounce();
                toggleBounce(newMarker);
                FourSquareInformation(mall);
                viewModel1.shouldShowMessage(true);


            };
        }
    }

};
