import React from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import {compose, withProps} from "recompose";


const MapComponentReport = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?v=weekly&key=AIzaSyBIHu3UtN5LFuO9rEQuFLaSAiStv6VB3Qs",

        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: (
            <div
                style={{
                    position: `absolute`,
                    width: `390px`,
                    height: `115px`,
                    left: `24px`,
                    top: `88px`
                }}
            />
        ),
        mapElement: <div style={{height: `100%`}}/>,
    }),
    withScriptjs,
    withGoogleMap
)((props) => (

    <GoogleMap
        zoom={8}
        defaultCenter={{lat: 49.990159, lng: 36.233081}}
    >

        {props.position ? <Marker
            position={{lat: props.position.lat, lng: props.position.lng}}
            icon={{url: require("../../assets/icon/basemarker.png")}}/> : null
        }

    </GoogleMap>
));
export default MapComponentReport;