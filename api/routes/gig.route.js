import express from 'express'
import { verifyToken } from "../middleware/jwt.js";
import {createGig,deleteGig,getGig,getGigs,mygigs} from '../controller/gig.controller.js'

const router = express.Router();

router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
router.get("/single/:id", verifyToken, getGig);
router.get("/", verifyToken, getGigs);
router.get('/mygigs',verifyToken,mygigs)

export default router;