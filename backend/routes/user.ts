import express from 'express';
 
//controllers
import {store} from '../controllers/User';

const router = express.Router();

router.get('/create', store);

export default router;