import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import { connect } from "./app/config/mongoose";

import { authRoutes } from "./app/routes/auth.route";
import { commentRoutes } from "./app/routes/comment.route";
import { postRoutes } from "./app/routes/post.route";
import { userRoutes } from "./app/routes/user.route";

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());

app.use(authRoutes);
app.use(userRoutes);
app.use(postRoutes);
app.use(commentRoutes);

connect(process.env.MONGODB_URL);

app.listen(process.env.PORT || port);
