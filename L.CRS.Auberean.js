/*
 * @namespace CRS
 * @crs L.CRS.Auberean
 */

import L from 'leaflet';

// let Auberean = L.Util.extend({}, L.CRS, {
// 	code: 'Auberean',
//     wrapLng: [-180, 180],
//
//     // Auberean radius in meters
//     R: 398962,
//
//     projection: L.Projection.LonLat,
//     transformation: L.transformation(1 / 180, 1, -1 / 180, 0.5),
//
//     // distance between two geographical points using spherical law of cosines approximation
//     distance: function (latlng1, latlng2) {
//         var rad = Math.PI / 180,
//             lat1 = latlng1.lat * rad,
//             lat2 = latlng2.lat * rad,
//             sinDLat = Math.sin((latlng2.lat - latlng1.lat) * rad / 2),
//             sinDLon = Math.sin((latlng2.lng - latlng1.lng) * rad / 2),
//             a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon,
//             c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//         return this.R * c;
//     }
// });


export var Auberean = Util.extend({}, L.CRS.Earth, {
    code: 'Auberean',
	projection: LonLat,
	transformation: toTransformation(1 / 180, 1, -1 / 180, 0.5),
    R: 398962
});

export default Auberean;
