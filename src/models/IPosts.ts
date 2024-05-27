import { IUser } from "./IUsers";

export interface IPost {
  owner: IUser;
  text: string;
  likes: number;
  comments: number;
  id: number;
  photos: string[];
  date: string;
}
