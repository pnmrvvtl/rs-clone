import React, { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import styles from "../../pages/results-page/results-page.module.scss";
import { getUserLocation, Location } from "../../helpers/getUserLocation";
import Map from "./map";


const defaultCenter = { lat: 50.450001, lng: 30.523333 };

let service: google.maps.places.PlacesService;

export default function GymMap() {
  const [center, setCenter] = useState(defaultCenter);
  const [coords, setCoordGym] = useState<google.maps.places.PlaceResult[]>([]);

  useEffect(() => {
    getUserLocation()
      .then((userLocation) => setCenter(userLocation as Location))
      .catch(() => {
        console.log('location blocked');
      });
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
    libraries: ["places"],
  });

  useEffect(() => {
    if (!window.google) {
      return;
    }

    const request = {
      location: center,
      radius: 12000,
      type: "gym",
    };

    service = new google.maps.places.PlacesService(
      document.createElement("div")
    );
    service.nearbySearch(request, (results, status) => {
      if (
        status === google.maps.places.PlacesServiceStatus.OK &&
        results !== null &&
        results !== undefined
      ) {
        setCoordGym(results);
        console.log(center, results);
      }
    });
  }, [window.google, center]);

  if (!isLoaded) {
    return <p>loading...</p>;
  }

  return (
    <div className={styles["gym-map"]}>
      <h3 className={styles["map-title"]}>
        Get more active and burn more calories.
      </h3>
      <h5 className={styles["map-subtitle"]}>Find the nearest gym and just do it!</h5>
      <Map center={center} coords={coords} />
    </div>
  );
}
