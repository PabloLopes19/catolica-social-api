import express from "express";
import FirestoreService from "../services/firestoreService";

const UserRouter = express.Router();

const userService = new FirestoreService("users");

UserRouter.get("/user/:userId", async (req, res) => {
  const userData = await userService.getDocumentById(req.params.userId);

  res.status(200).json(userData);
});

UserRouter.post("/user/create", async (req, res) => {
  const userData = await userService.createUser(req.body);

  if (userData == "Invalid Slug") {
    res.status(400).json({ error: userData });
    return;
  }

  if (!userData) {
    res.status(201).json({ Error: `Nome de usuário indisponível` });
  } else {
    const data = await userService.getDocumentById(req.body.username);
    res.status(200).json(data);
    console.log(req.body.username);
  }
});

export default UserRouter;
