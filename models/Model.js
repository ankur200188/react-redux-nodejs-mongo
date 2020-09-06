import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ModelSchema = new Schema({
    name: String
});

const Model = mongoose.model('Model', ModelSchema, 'models');

module.exports = Model;
