import express from 'express';
import path from 'path';
import page1Router from './routes/page1.js';
import page2Router from './routes/page2.js';

const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views')); // Path for views

// Serve static files (like stylesheets, images)
app.use(express.static(path.join(process.cwd(), 'public')));

// Define routes
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page',
    content: 'This is the content for the home page.'
  });
});

app.get('/', (req, res) => {
  res.render('home', { pageClass: 'home-bg' });
});


app.use('/page1', page1Router);
app.use('/page2', page2Router);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
















