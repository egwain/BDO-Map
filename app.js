angular.module('BDO-Map', [])
  .controller('IndexController', function() {
    var ctrl = this;
    ctrl.header = "BDO Map";
    console.log("Index controller loaded.");

    var mymap = L.map('BDO-Map').setView([0, 0], 3);
    L.tileLayer('img/{x}_{y}.jpg', {
      attribution: 'Map borrowed from :) --- <a href="http://www.somethinglovely.net/bdo/">http://www.somethinglovely.net/bdo/</a>',
      zoomReverse: false,
      minZoom: 0,
      maxZoom: 18
    }).addTo(mymap);
    mymap.fitWorld();
    L.marker([50, 30.5], 3).addTo(mymap);
  });
