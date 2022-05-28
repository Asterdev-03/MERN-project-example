import express from 'express';

const router = express.Router();

// http://localhost:5000/posts

router.get('/', (req, resp) => {
    resp.send('THIS WORKS!!!');
});

export default router;