"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const models_1 = require("./models");
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use('/', routes_1.default);
models_1.sequelize.sync()
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
    res.send('Hello World!');
});
// POST request
app.post('/collections', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    try {
        const collection = yield models_1.Collection.create({ name });
        res.status(201).json(collection);
    }
    catch (error) {
        console.error('Error creating collection:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// GET request by ID
app.get('/collections/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const collection = yield models_1.Collection.findByPk(id);
        if (!collection) {
            res.status(404).json({ error: 'Collection not found' });
            return;
        }
        if (name) {
            collection.name = name;
        }
        yield collection.save();
        res.status(200).json(collection);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// PATCH request by ID
app.patch('/collections/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const collection = yield models_1.Collection.findByPk(id);
        if (!collection) {
            res.status(404).json({ error: 'Collection not found' });
            return;
        }
        collection.name = name;
        yield collection.save();
        res.status(200).json(collection);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// DELETE request by ID
app.delete('/collections/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const collection = yield models_1.Collection.findByPk(id);
        if (!collection) {
            res.status(404).json({ error: 'Collection not found' });
            return;
        }
        yield collection.destroy();
        res.status(200).json({ message: 'Collection successfully deleted' });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// general GET request to get entire API db
app.get('/collections', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collections = yield models_1.Collection.findAll();
        if (collections.length === 0) {
            res.send('No collections available 1');
        }
        else {
            res.json(collections);
        }
    }
    catch (error) {
        console.error('Error fetching collections:', error);
        res.status(500).send('Error fetching collections');
    }
}));
// POST /:collection (done)
// GET /:collection/:id (done)
// POST /:collection/:id (done)
// DELETE /:collection/:id (done)
