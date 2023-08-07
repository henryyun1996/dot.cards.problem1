import { Request, Response } from 'express';
import { Collection } from './models';

//post new Collection
export const postCollection = async (req: Request, res: Response): Promise<void> => {
    const { name } = req.body;
    try {
        const collection = await Collection.create({ name });
        res.status(201).json(collection);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

//get Collection by ID
export const getCollectionById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const collection = await Collection.findByPk(id);
        if (!collection) {
            res.status(404).json({ error: 'Collection not found' });
            return;
        }

        if (name) {
            collection.name = name;
        }

        await collection.save();
        res.status(200).json(collection);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// patch Collection by ID
export const patchCollectionById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const collection = await Collection.findByPk(id);
        if (!collection) {
            res.status(404).json({ error: 'Collection not found' });
            return;
        }

        collection.name = name;
        await collection.save();
        res.status(200).json(collection);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// delete Collection by ID
export const deleteCollectionById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const collection = await Collection.findByPk(id);
        if (!collection) {
            res.status(404).json({ error: 'Collection not found' });
            return;
        }

        await collection.destroy();
        res.status(200).json({ message: 'Collection successfully deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// general GET request
export const getCollection = async (req: Request, res: Response): Promise<void> => {
    try {
        const collections = await Collection.findAll();
        if (collections.length === 0) {
            res.status(200).json({ message: 'Nothing in the API yet' })
        } else {
            res.status(200).json(collections);
        }
    } catch (error) {
        res.status(500).json({ error: 'Interal Server Error' })
    }
}

