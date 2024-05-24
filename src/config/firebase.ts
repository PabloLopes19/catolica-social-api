import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import * as admin from "firebase-admin";
import serviceAccount from "../secrets/serviceAccountKey.json";

const app = initializeApp({
  credential: cert(serviceAccount as admin.ServiceAccount),
});

const db = getFirestore(app);

export { db };
