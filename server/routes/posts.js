import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);

// router.get('/', (req, res) => {
//   res.send('Works Fine!');
// });

export default router;
