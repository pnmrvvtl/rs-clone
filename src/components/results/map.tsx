import React from "react";
import { MarkerF, GoogleMap } from "@react-google-maps/api";
import styles from "../../pages/results-page/results-page.module.scss";
type Location = {
  lat: number;
  lng: number;
};

export default function Map(props: {
  center: Location;
  coords: google.maps.places.PlaceResult[];
}): JSX.Element {
  const { center, coords } = props;
  return (
    <GoogleMap
      center={center}
      zoom={15}
      key={Date.now()}
      mapContainerClassName={styles.map}
      options={{
        mapTypeControl: false,
        streetViewControl: false,
      }}
    >
      <MarkerF position={center} label={"You"}/>
      {coords.map((result: google.maps.places.PlaceResult, i: number) => (
        <MarkerF
          key={i}
          title={result.name}
          position={{
            lat: result.geometry?.location?.lat() as number,
            lng: result.geometry?.location?.lng() as number,
          }}
        />
      ))}
    </GoogleMap>
  );
}
