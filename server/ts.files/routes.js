"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers");
const router = express_1.default.Router();
router.post('/collection', controllers_1.postCollection);
router.get('/collection/:id', controllers_1.getCollectionById);
router.patch('/collection/:id', controllers_1.patchCollectionById);
router.delete('/collection/:id', controllers_1.deleteCollectionById);
router.get('/collection', controllers_1.getCollection);
exports.default = router;
