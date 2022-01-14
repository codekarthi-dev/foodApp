const types = {
  SET_IS_APPLOADING: "SET_IS_APPLOADING",
  SET_TOKEN: "SET_TOKEN",
};

const setIsAppLoading = (isAppLoading) => {
  return {
    type: types.SET_IS_APPLOADING,
    payload: isAppLoading,
  };
};

const setToken = (token) => {
  return {
    type: types.SET_TOKEN,
    payload: token,
  };
};

export default { setToken, setIsAppLoading, types };
