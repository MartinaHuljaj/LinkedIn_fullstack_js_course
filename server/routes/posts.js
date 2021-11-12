import  express  from "express";
import { getPosts, createPost } from "../controllers/post.js"; //uvik triba dodat.js inace nece radit

const router =express.Router();
router.get('/',getPosts )

export default router