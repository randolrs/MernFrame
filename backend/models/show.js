const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShowModel = new Schema({
    title: { type: String },
    slug: { type: String, slug: "title" },
    description: { type: String },
    venueName: { type: String },
    address: { type: String },
    videoPreview: { type: String },
    videoDescription: { type: String },
    reasonRecommend: { type: String },
    eventURL: { type: String },
    image: {type: String}
});

module.exports = mongoose.model("Show", ShowModel);
