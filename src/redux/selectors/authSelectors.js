const getAuth = (state) => state.auth.isAuth;
const getName = (state) => state.auth.email;
const getLocalId = (state) => state.auth.localId;
const loading = (state) => state.auth.isLoading;
const getError = (state) => state.auth.error;

export { getAuth, getName, getLocalId, loading, getError };