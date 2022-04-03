export const getLocalStorage = (key) => {
  const localDataStr = localStorage.getItem(key);
  if (localDataStr === null) {
    return null;
  } else {
    const localDataObj = JSON.parse(localDataStr);
    return localDataObj;
  }
};
export const setLocalStorage = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val));
  const localData = JSON.parse(localStorage.getItem(key));
  return localData;
};
