import express from 'express';
import playlistRoutes from './routes/playListRoute.js';

const app = express();
app.use(express.json());
app.use('/api', playlistRoutes);

export default app;
