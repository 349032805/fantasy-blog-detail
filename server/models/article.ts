import * as mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  title: String,
  belong: String,
  content: String,
  evaluate: String,
  createTime: Number,
  updateTime: Number,
  isUp: Number,
  isHide: Number,
  scanNum: Number
});

const Article = mongoose.model('Article', articleSchema,'article');
// const Article = mongoose.model('Article', articleSchema);

export default Article;
