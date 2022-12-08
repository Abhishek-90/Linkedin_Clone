import db, { auth, provider, storage } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { SET_USER } from "./actionType";
import { collection, doc, DocumentReference, setDoc } from "firebase/firestore";
import {
  ref,
  StorageReference,
  uploadBytesResumable,
  UploadTaskSnapshot,
  getDownloadURL,
} from "firebase/storage";

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

export function postArticleAPI(payload: any) {
  return (dispatch: any) => {
    if (payload.image !== "") {
      const storageReference: StorageReference = ref(
        storage,
        `images/${payload.image.name}`
      );
      const upload = uploadBytesResumable(storageReference, payload.image);
      upload.on(
        "state_changed",
        (snapshot: UploadTaskSnapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Progress: ${progress}%`);

          if (snapshot.state === "running") {
            console.log(`Progress: ${progress}%`);
          }
        },
        (error: any) => console.log(error.code),
        async () => {
          const downloadURL: String = await getDownloadURL(storageReference);
          const articleRef: DocumentReference = doc(collection(db, "articles"));
          await setDoc(articleRef, {
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: payload.video,
            sharedImg: downloadURL,
            comments: 0,
            description: payload.description,
          });
        }
      );
    }
  };
}
