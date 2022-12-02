import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { SET_USER } from "./actionType";

export const setUser = (payload: any) => ({
  type: SET_USER,
  user: payload,
});

export function signInAPI() {
  return (dispatch: any) => {
    signInWithPopup(auth, provider)
      .then((payload: any) => dispatch(setUser(payload.user)))
      .catch((e: any) => alert(e.message));
  };
}

export function getUserAuth() {
  return (dispatch: any) => {
    auth.onAuthStateChanged(async (user: any) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signOutAPI() {
  return (dispatch: any) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((e: any) => console.log(e.message));
  };
}
