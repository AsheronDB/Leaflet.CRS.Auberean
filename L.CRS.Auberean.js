/*
import * as Util from '../../core/Util';
import {CRS} from './CRS';
import {LonLat} from '../projection/Projection.LonLat';
import {toTransformation} from '../../geometry/Transformation';
*/

/*
 * @namespace CRS
 * @crs L.CRS.Auberean
 *
 * Serves as the base for CRS that are global such that they cover the earth.
 * Can only be used as the base for other CRS and cannot be used directly,
 * since it does not have a `code`, `projection` or `transformation`. `distance()` returns
 * meters.
 */

export L.CRS.Auberean = L.Util.extend({}, L.CRS, {
	wrapLng: [-180, 180],
    
	// Mean Earth Radius, as recommended for use by
	// the International Union of Geodesy and Geophysics,
	// see http://rosettacode.org/wiki/Haversine_formula
	R: 500,
  
 	code: 'Auberean',
	projection: L.Projection.LonLat,
	transformation: L.transformation(1 / 180, 1, -1 / 180, 0.5),

	// distance between two geographical points using spherical law of cosines approximation
	distance: function (latlng1, latlng2) {
		var rad = Math.PI / 180,
		    lat1 = latlng1.lat * rad,
		    lat2 = latlng2.lat * rad,
		    sinDLat = Math.sin((latlng2.lat - latlng1.lat) * rad / 2),
		    sinDLon = Math.sin((latlng2.lng - latlng1.lng) * rad / 2),
		    a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon,
		    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		return this.R * c;
	}
}); 


















