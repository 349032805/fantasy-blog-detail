import * as express from 'express';

import ArticleCtrl from './controllers/article';
import WebConfigCtrl from './controllers/webConfig';
import MessageCtrl from './controllers/message';

export default function setRoutes(app) {

  const router = express.Router();

  const articleCtrl = new ArticleCtrl();
  const webConfigCtrl = new WebConfigCtrl();
  const messageCtrl = new MessageCtrl();

  router.route('/getBlogDetail/:id').get(articleCtrl.get);
  router.route('/getMainDomainName').get(webConfigCtrl.getOnlyOne);
  router.route('/getAllMessages').get(messageCtrl.getAllOrderByTime);
  router.route('/addScanNumber/:id').put(articleCtrl.addScanNumber);
  router.route('/addMessage').post(messageCtrl.insertMessage);
  router.route('/countMessagesByIP').post(messageCtrl.countMessagesByIP);

  // Apply the routes to our application with the prefix /detail
  app.use('/detail', router);

}
