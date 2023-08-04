import { Component, invalidate } from "ivi";

export const useState2 =
  <S>(component: Component, state: S) =>
  (next?: S) => {
    if (next !== void 0 && next !== state) {
      state = next;
      invalidate(component);
    }
    return state;
  };
