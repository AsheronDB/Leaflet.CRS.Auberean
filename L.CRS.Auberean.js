/*
 * @namespace CRS
 * @crs L.CRS.Auberean
 */

import L from 'leaflet';

export var Auberean = L.Util.extend({}, L.CRS.Earth, {
    code: 'Auberean',
	projection: L.Projection.LonLat,
	transformation: L.transformation(1 / 180, 1, -1 / 180, 0.5),
    // Auberean radius in meters, overwrites Earth radius
    R: 398962
});

export default Auberean;
