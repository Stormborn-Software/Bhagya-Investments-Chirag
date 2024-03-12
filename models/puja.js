const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pujaSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    descriptionMain: String,
    image: {
        url: String,
    }
});

const Puja = mongoose.model("Puja", pujaSchema);
module.exports = Puja;