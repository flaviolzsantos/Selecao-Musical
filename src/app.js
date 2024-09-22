import express from 'express';
import { errorHandler } from './middlewares/errorMiddleware.js';
import playlistRoutes from './routes/playListRoute.js';

const app = express();
app.use(express.json());
app.use('/api', playlistRoutes);

app.use(errorHandler);

export default app;
