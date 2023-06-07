// 初期化をしていく
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDERzGd58lKbljPzM_HukbMbH99fgAt0u4",
  authDomain: "image-uploader-app-df053.firebaseapp.com",
  projectId: "image-uploader-app-df053",
  storageBucket: "image-uploader-app-df053.appspot.com",
  messagingSenderId: "846486928704",
  appId: "1:846486928704:web:bcc9f84ba7ce9addc44ea5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
