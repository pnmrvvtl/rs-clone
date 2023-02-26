import { getUserLocation } from './../helpers/getUserLocation';

const mockGeolocation = {
  getCurrentPosition: jest
    .fn()
    .mockImplementationOnce((success, reject) =>
      Promise.resolve(
        success({
          coords: {
            latitude: 51.1,
            longitude: 45.3,
          },
        }),
      ),
    )
    .mockImplementationOnce((success, reject) => Promise.resolve(reject())),
};
// @ts-ignore
global.navigator = {
  geolocation: mockGeolocation as unknown as Geolocation,
};
test('get user location success', () => {
  expect(getUserLocation()).resolves.toEqual({ lat: 51.1, lng: 45.3 });
});

test('user location failed', () => {
  const result = { lat: 50.450001, lng: 30.523333 };
  expect(getUserLocation()).rejects.toEqual(result);
});
