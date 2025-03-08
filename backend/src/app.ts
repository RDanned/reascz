import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import leadRoutes from '@/routes/leadRoutes';
import cors from '@koa/cors';
const app = new Koa();

mongoose.connect(process.env.MONGO_URI || '')
  .then(() => console.log('✅ DB connected'))
  .catch((err) => console.error(err));

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(bodyParser());
app.use(leadRoutes.routes()).use(leadRoutes.allowedMethods());

export default app;
