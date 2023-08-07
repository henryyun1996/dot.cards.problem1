import express from 'express';
import bodyParser from 'body-parser';
import { Collection, sequelize } from './models';
import router from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

sequelize.sync()
    .then(() => {
        console.log('Database synchronized.');
        app.listen(PORT, () => {
            console.log('Server online at http://localhost:3000');
        });
    })
    .catch((error) => {
        console.error('Error synchronizing models with the database:', error);
    });

// general GET request to get api started
app.get('/', (req, res) => {
    res.send('Hello Jeffrey and Alfonso! Hope you are having a great day! I am excited to hear what you think and listen to any feedback you may have!');
});

// POST request
app.post('/collections', async (req, res) => {
    const { name } = req.body;
    try {
        const collection = await Collection.create({ name });
        res.status(201).json(collection);
    } catch (error) {
        console.error('Error creating collection:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET request by ID
app.get('/collections/:id', async (req, res) => {
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
})

// PATCH request by ID
app.patch('/collections/:id', async (req, res) => {
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
})

// DELETE request by ID
app.delete('/collections/:id', async (req, res) => {
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
})

// general GET request to get entire API db
app.get('/collections', async (req, res) => {
    try {
        const collections = await Collection.findAll();

        if (collections.length === 0) {
            res.send('No collections available 1');
        } else {
            res.json(collections);
        }
    } catch (error) {
        console.error('Error fetching collections:', error);
        res.status(500).send('Error fetching collections');
    }
});


// POST /:collection (done)
// GET /:collection/:id (done)
// POST /:collection/:id (done)
// DELETE /:collection/:id (done)