import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const initialization = () => {
  const app = initializeApp(firebaseConfig);
  return app;
};

export default initialization;
