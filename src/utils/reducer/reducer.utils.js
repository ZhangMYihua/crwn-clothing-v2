export const createAction = (type, payload) => {
  console.log("trying to create an action");

  console.log({ type, payload });

  return {
    type,
    payload
  };
};
