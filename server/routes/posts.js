import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Works Fine!');
});

export default router;
