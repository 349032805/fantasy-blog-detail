import WebConfig from '../models/webConfig';
import BaseCtrl from './base';

export default class WebConfigCtrl extends BaseCtrl {
  model = WebConfig;

  getOnlyOne = (req, res) => {
    console.log("webconfig get")
    this.model.findOne({}, (err, obj) => {
      if (err) { return console.error(err); }
      res.json(obj);
    });
  }
}
