import db, { auth, provider, storage } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { GET_ARTICLES, SET_LOADING_STATUS, SET_USER } from "./actionType";
import {
  ref,
  StorageReference,
  uploadBytesResumable,
  UploadTaskSnapshot,
  getDownloadURL,
} from "firebase/storage";
import {
  collection,
  doc,
  DocumentReference,
  setDoc,
  getDocs,
  query,
  QuerySnapshot,
  orderBy,
} from "firebase/firestore";
import { Dispatch } from "redux";

export const setUser = (payload: any) => ({
  type: SET_USER,
  user: payload,
});

export function signInAPI() {
  return (dispatch: Dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload: any) => dispatch(setUser(payload.user)))
      .catch((e: any) => alert(e.message));
  };
}

export function getUserAuth() {
  return (dispatch: Dispatch) => {
    auth.onAuthStateChanged(async (user: any) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signOutAPI() {
  return (dispatch: Dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((e: any) => console.log(e.message));
  };
}

export function postArticleAPI(payload: any) {
  return (dispatch: Dispatch) => {
    dispatch(setLoading(true));
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
          dispatch(setLoading(false));
        }
      );
      dispatch(setLoading(false));
    } else if (payload.video !== "") {
      const articleRef: DocumentReference = doc(collection(db, "articles"));
      setDoc(articleRef, {
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImg: "",
        comments: 0,
        description: payload.description,
      });
      dispatch(setLoading(false));
    } else {
      const articleRef: DocumentReference = doc(collection(db, "articles"));
      setDoc(articleRef, {
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: "",
        sharedImg: "",
        comments: 0,
        description: payload.description,
      });
      dispatch(setLoading(false));
    }
  };
}

export const setLoading = (status: any) => ({
  type: SET_LOADING_STATUS,
  status: status,
});

export const getArticles = (articles: any) => ({
  type: GET_ARTICLES,
  articles: articles,
});

export const getArticlesAPI = () => {
  return async (dispatch: Dispatch) => {
    const docSnap: QuerySnapshot = await getDocs(
      query(collection(db, "articles"), orderBy("actor.date", "desc"))
    );
    const articles: any = docSnap.docs.map((doc) => doc.data());
    dispatch(getArticles(articles));
  };
};
