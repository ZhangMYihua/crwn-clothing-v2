// this will give our React components access to this piece of state from the Redux store
export const selectCurrentUser = (state) => state.user.currentUser;
