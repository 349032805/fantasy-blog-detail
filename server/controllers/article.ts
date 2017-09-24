import Article from '../models/article';
import BaseCtrl from './base';

export default class ArticleCtrl extends BaseCtrl {
  model = Article;

  addScanNumber = (req, res) => {
    console.log("addScanNumber")
    console.log(req.params.id)
    this.model.findOneAndUpdate({ _id: req.params.id }, {
      $inc: {
        "scanNum": 1
      }
    }, { new: true }, (err) => {
      if (err) { return console.error(err); }
      res.sendStatus(200);
    });
  }
}
