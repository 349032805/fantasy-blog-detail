import * as mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    content: String,
    // createTime: {
    //     type: Number,
    //     default: new Date().getTime
    // },
    createTime: Number,
    response: String,
    responseTime: Number,
    ip: String
});

const Message = mongoose.model('Message', messageSchema, 'message');
// const Message = mongoose.model('Message', messageSchema);

export default Message;
