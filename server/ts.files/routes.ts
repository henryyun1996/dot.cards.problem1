import express from 'express';
import {
    postCollection,
    getCollectionById,
    patchCollectionById,
    deleteCollectionById,
    getCollection
} from './controllers';

const router = express.Router();

router.post('/collection', postCollection);
router.get('/collection/:id', getCollectionById);
router.patch('/collection/:id', patchCollectionById);
router.delete('/collection/:id', deleteCollectionById);
router.get('/collection', getCollection)

export default router;