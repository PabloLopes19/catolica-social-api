import express from "express";
import FirestoreService from "../services/firestoreService";

const UserRouter = express.Router();

const userService = new FirestoreService("users");

UserRouter.get("/user/:userId", async (req, res) => {
  const userData = await userService.getDocumentById(req.params.userId);

  if (!userData) res.status(400).json({ error: "Não foi possível achar" });

  res.status(200).json(userData);
});

UserRouter.post("/user/create", async (req, res) => {});

export default UserRouter;
