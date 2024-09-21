import express from 'express';
import getPlaylist from '../controllers/playListController';

const router = express.Router();

router.get('/playlist', getPlaylist);

module.exports = router;
