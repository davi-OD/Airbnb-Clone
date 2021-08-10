import { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import getCenter from "geolib/es/getCenter";


function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({})

    //Transform the search result object into the {latitude:..., longitude:....} object
    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));
    // The latitude and longitude if the center of locations coordinates
    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });


    return (
        <ReactMapGL 
            mapStyle="mapbox://styles/davi-od/cks5q4gs57dw217qoti7dwtz9"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >

            {searchResults.map((result) => (
                <div key={result.long}>
                    <Marker 
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p className="cursor-pointer text-2xl animate-bounce">📌</p>
                    </Marker>
                </div>
            ))};

        </ReactMapGL>      
    );  
}

export default Map;
