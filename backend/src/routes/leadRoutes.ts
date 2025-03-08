import Router from 'koa-router';
import { createLead } from '@/controllers/leadController';

const router = new Router();

router.post('/lead', createLead);

export default router;
