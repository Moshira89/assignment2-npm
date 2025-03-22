import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import homeRouter from './routes/home.js';
import page1Router from './routes/page1.js';
import page2Router from './routes/page2.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/page1', page1Router);
app.use('/page2', page2Router);

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



















