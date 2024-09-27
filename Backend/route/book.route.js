import express from "express";
import { addBook, getBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);

router.post("/", addBook)

export default router;