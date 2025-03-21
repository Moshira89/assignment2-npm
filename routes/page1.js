import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('page1', {
    title: 'Page 1',
    content: 'This is Page 1.',
  });
});

router.get('/subpage1', (req, res) => {
  res.render('subpage1', {
    title: 'Subpage 1',
    content: 'This is Subpage 1 under Page 1.',
  });
});

router.get('/subpage2', (req, res) => {
  res.render('subpage2', {
    title: 'Subpage 2',
    content: 'This is Subpage 2 under Page 1.',
  });
});

export default router;








