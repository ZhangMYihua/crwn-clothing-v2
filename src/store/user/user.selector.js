// this will give our React component access to this piece of state from the Redux store
export const selectCurrentUser = (state) => state.user.currentUser;
