import * as mongoose from 'mongoose';

const webConfigSchema = new mongoose.Schema({
  mainDomainName: String,
  detailDomainName: String,
  adminDomainName: String
});

const WebConfig = mongoose.model('WebConfig', webConfigSchema,'webConfig');

export default WebConfig;
