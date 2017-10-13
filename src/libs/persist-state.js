/* eslint no-undef: 0 */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('react-leaflet-state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('react-leaflet-state', serializedState);
    return true;
  } catch (err) {
    return undefined;
  }
};
