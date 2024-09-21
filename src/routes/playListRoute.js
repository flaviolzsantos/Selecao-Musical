import express from 'express';
import getPlaylist from '../controllers/playListController.js';

const router = express.Router();

router.get('/playlist', getPlaylist);

export default router;
