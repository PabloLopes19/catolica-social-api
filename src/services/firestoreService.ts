import { db } from "../config/firebase";

class FirestoreService {
  private collectionName: string;

  constructor(collectionName: string) {
    this.collectionName = collectionName;
  }

  async addDocument(data: any) {
    const docRef = await db.collection(this.collectionName).add(data);
    return docRef.id;
  }

  async getDocumentById(id: string) {
    const doc = await db.collection(this.collectionName).doc(id).get();
    if (!doc.exists) {
      throw new Error("No such document!");
    }
    return doc.data();
  }
}

export default FirestoreService;
