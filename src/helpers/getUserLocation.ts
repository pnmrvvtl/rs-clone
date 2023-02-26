const center: Location = { lat: 50.450001, lng: 30.523333 };
export type Location = {
  lat: number;
  lng: number
}

export const getUserLocation = () :Promise<Location> => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude: lat, longitude: lng } = pos.coords;
          resolve({ lat, lng });
        },
        () => {
          reject(center);
        }
      );
    } else {
      reject(center);
    }
  });
};

