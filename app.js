import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import page1Router from './routes/page1.js';
import page2Router from './routes/page2.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page',
    content: 'This is the content for the home page.',
    pageClass: 'home-bg'
  });
});

app.use('/page1', page1Router);
app.use('/page2', page2Router);

export default app;
















