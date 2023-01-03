import admin from "firebase-admin";
// import { getAuth } from 'firebase-admin/auth';

import serviceAcctKey from "./serviceAcctKey.json" assert { type: "json" };

const firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAcctKey)
});

export default {
    firebase: firebase.auth()
  };