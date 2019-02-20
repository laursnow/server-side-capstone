'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;




const entrySchema = mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  contentDate: { type: Date },
  postDate: { type: Date, default: Date.now },
  tags: [String] 
});

entrySchema.methods.serialize = function() {
  return {
    id: this._id,
    title: this.title,
    content: this.body,
    contentDate: this.contentDate,
    postDate: this.postDate,
    tags: this.tags,
  };
};

const Entry = mongoose.model('Entry', entrySchema);

module.exports = {Entry};