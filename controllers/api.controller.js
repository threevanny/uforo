const apiCtrl = {};
const User = require('../models/User');
const Question = require('../models/Question');
const Reply = require('../models/Reply');
const Avatar = require('../models/Avatar');

apiCtrl.getUser = (req, res,) => {
    res.send("Hola")
};

apiCtrl.getUsers = (req, res,) => {
    res.send("Hola")
};

apiCtrl.getQuestion = (req, res,) => {
    //..
};

apiCtrl.getQuestions = (req, res,) => {
    //..
};

apiCtrl.getReply = (req, res,) => {
    //..
};

apiCtrl.getReplies = (req, res,) => {
    //..
};

apiCtrl.getAvatar = (req, res,) => {
    //..
};

apiCtrl.getAvatars = (req, res,) => {
    //..
};

module.exports = apiCtrl;