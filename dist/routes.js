"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers");
const router = express_1.default.Router();
const path = router.get;
path('/collection', controllers_1.postCollection);
path('/collection/:id', controllers_1.getCollectionById);
path('/collection/:id', controllers_1.patchCollectionById);
path('/collection/:id', controllers_1.deleteCollectionById);
exports.default = router;
