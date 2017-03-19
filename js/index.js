import { NativeEventEmitter, NativeModules } from 'react-native';

if (!NativeModules.RNRadar) {
  throw new Error('NativeModules.RNRadar is undefined');
}

const eventEmitter = new NativeEventEmitter(NativeModules.RNRadar);

const setUserId = (userId) => {
  NativeModules.RNRadar.setUserId(userId);
};

const setDescription = (description) => {
  NativeModules.RNRadar.setDescription(description);
};

const getPermissionsStatus = () => (
  NativeModules.RNRadar.getPermissionsStatus()
);

const requestPermissions = (background) => {
  NativeModules.RNRadar.requestPermissions(background);
};

const startTracking = () => {
  NativeModules.RNRadar.startTracking();
};

const stopTracking = () => {
  NativeModules.RNRadar.stopTracking();
};

const trackOnce = () => (
  NativeModules.RNRadar.trackOnce()
);

const updateLocation = location => (
  NativeModules.RNRadar.updateLocation(location)
);

const on = (event, callback) => (
  eventEmitter.addListener(event, callback)
);

const off = (event, callback) => {
  if (callback) {
    eventEmitter.removeListener(event, callback);
  } else {
    eventEmitter.removeAllListeners(event);
  }
};

const Radar = {
  setUserId,
  setDescription,
  getPermissionsStatus,
  requestPermissions,
  startTracking,
  stopTracking,
  trackOnce,
  updateLocation,
  on,
  off,
};

export default Radar;
