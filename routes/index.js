// routes/page1.js
import express from 'express';
const router = express.Router();

// Page 1 main route
router.get('/', (req, res) => {
  res.render('page1', {
    title: 'Page 1',
    content: 'This is the content for Page 1.'
  });
});

// Subpage 1 route
router.get('/subpage1', (req, res) => {
  res.render('subpage1', {
    title: 'Subpage 1',
    content: 'This is Subpage 1 under Page 1.'
  });
});

// Subpage 2 route
router.get('/subpage2', (req, res) => {
  res.render('subpage2', {
    title: 'Subpage 2',
    content: 'This is Subpage 2 under Page 1.'
  });
});

export default router

