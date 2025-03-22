import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page',
    content: 'Welcome to the homepage!',
  });
});

export default router;







