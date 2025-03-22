import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('page2', {
    title: 'Page 2',
    content: 'This is Page 2.',
  });
});

router.get('/subpage3', (req, res) => {
  res.render('subpage3', {
    title: 'Subpage 3',
    content: 'This is Subpage 1 under Page 2.',
  });
});

router.get('/subpage4', (req, res) => {
  res.render('subpage4', {
    title: 'Subpage 4',
    content: 'This is Subpage 2 under Page 2.',
  });
});

export default router;








