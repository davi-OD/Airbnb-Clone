import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import getCenter from "geolib/es/getCenter";


function Map({ searchResults }) {

    //Transform the search result object into the {latitude:..., longitude:....} object
    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }))
    // The latitude and longitude if the center of locations coordinates
    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.latitude,
        zoom: 11,
    });


    return (
        <ReactMapGL 
        mapStyle="mapbox://styles/davi-od/cks5q4gs57dw217qoti7dwtz9"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewChange={(nextViewport) => setViewport(nextViewport)}
        ></ReactMapGL>      
    );  
}

export default Map;
