import * as dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  const environment = process.env.NODE_ENV || 'development';
  dotenv.config({ path: `.env.${environment}` });
}

import app from './app';

const BACKEND_PORT = process.env.BACKEND_PORT || 4000;

app.listen(BACKEND_PORT, () => {
  console.log(`🚀 Server running on port ${BACKEND_PORT}`);
});