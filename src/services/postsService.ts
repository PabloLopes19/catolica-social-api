import { db } from "../config/firebase";
import { IPost } from "../models/IPosts";

class PostsService {
  private collectionName: string;

  constructor(collectionName: string) {
    this.collectionName = collectionName;
  }

  async getPosts() {}

  async createPos(Post: IPost) {
    const collection = db.collection(this.collectionName);
    await collection.add(Post);

    const doc = await collection.get();

    console.log(doc);

    return doc;
  }
}

export default PostsService;
