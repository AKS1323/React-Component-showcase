const {Schema, model} = require('../connection');

const myschema = new Schema({
    title:String,
    description:String,
    thumbnail:String,
    code:String,
    developer:String,
});
module.exports = model('component',myschema);
