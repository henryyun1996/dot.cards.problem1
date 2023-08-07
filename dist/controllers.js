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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCollectionById = exports.patchCollectionById = exports.getCollectionById = exports.postCollection = void 0;
const models_1 = require("./models");
//post new Collection
const postCollection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    try {
        const collection = yield models_1.Collection.create({ name });
        res.status(201).json(collection);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.postCollection = postCollection;
//get Collection by ID
const getCollectionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.getCollectionById = getCollectionById;
// patch Collection by ID
const patchCollectionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.patchCollectionById = patchCollectionById;
// delete Collection by ID
const deleteCollectionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.deleteCollectionById = deleteCollectionById;
// POST /:collection (done)
// GET /:collection/:id (done)
// POST /:collection/:id (done)
// DELETE /:collection/:id (done)
