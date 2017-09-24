import Message from '../models/message';
import BaseCtrl from './base';

export default class MessageCtrl extends BaseCtrl {
  model = Message;
  getAllOrderByTime = (req, res) => {
    this.model.find({}, (err, docs) => {
      if (err) { return console.error(err); }
      res.json(docs);
    }).sort({ 'createTime': -1 });
  }

  //根据ip查询当天累计的留言数
  countMessagesByIP = (req, res) => {
    let startTimeNum = this.getTimeStartAndEnd().startTimeNum;
    let endTimeNum = this.getTimeStartAndEnd().endTimeNum;

    this.model.count({ ip: req._remoteAddress, createTime: { '$gte': startTimeNum, '$lte': endTimeNum } }, (err, docs) => {
      if (err) { return console.error(err); }
      res.json(docs);
    });
  }

  //保存IP每次提交查询判断,防止频繁提交
  insertMessage = (req, res) => {
    console.log("req:" + req._remoteAddress);
    req.body.ip = req._remoteAddress;
    console.log(req.body);
    if (req.body.content == "") {
      res.sendStatus(400);
      return;
    }

    const obj = new this.model(req.body);
    obj.save((err, item) => {
      // 11000 is the code for duplicate key error
      if (err && err.code === 11000) {
        res.sendStatus(400);
      }
      if (err) {
        return console.error(err);
      }
      res.status(200).json(item);
    });
  }

  //获取今天开始的时间戳和结束的时间戳
  getTimeStartAndEnd() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let monthStr;
    if (month < 10) {
      monthStr = "0" + month;
    }else{
      monthStr = month;
    }
    let day = date.getDate();
    let dayStr;
    if (day < 10) {
      dayStr = "0" + day;
    }else{
      dayStr = day;
    }
    let today = year + "-" + monthStr + "-" + dayStr;
    let startTime = today + ' 00:00:00';
    let endTime = today + ' 23:59:59';
    let time = {
      startTimeNum: new Date(startTime).getTime(),
      endTimeNum: new Date(endTime).getTime()
    }

    return time;
  }
}
