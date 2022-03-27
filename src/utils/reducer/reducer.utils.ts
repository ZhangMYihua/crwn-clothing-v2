export type Action<T, P = void> = {
  type: T;
  payload?: P;
};

export const createAction = <T extends string, P = void>(
  type: T,
  payload?: P
): Action<T, P> => ({ type, payload });
