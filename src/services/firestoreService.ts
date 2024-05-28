import { db } from "../config/firebase";
import { IUser } from "../models/IUsers";

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

  async createUser(User: IUser) {
    console.log(User.username.split(" ").length);

    if (User.username.split(" ").length > 1) {
      return "Invalid Slug";
    }

    const doc = await db
      .collection(this.collectionName)
      .doc(User.username)
      .get();

    if (!doc.exists) {
      const docRef = await db
        .collection(this.collectionName)
        .doc(User.username);
      await docRef.set(User);

      return doc;
    }

    return null;
  }
}

export default FirestoreService;
