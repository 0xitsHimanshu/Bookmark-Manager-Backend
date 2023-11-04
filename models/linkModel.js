import mongoose from "mongoose";

const BookmarkSchema = new mongoose.Schema({
    url: {type: String, required: true},
    title : {type: String, require: true},
    tags: [String],
}); 
let Bookmark = mongoose.model('Bookmark',BookmarkSchema);
export default Bookmark;