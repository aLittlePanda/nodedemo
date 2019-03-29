var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/list', {useNewUrlParser:true}, function(err){
　　if(err){
　　　　console.log('Connection Error:' + err)
　　}else{
　　　　console.log('Connection success!')}
});

var db = mongoose.connection;
db.on('error', function callback() { //监听是否有异常
  console.log("Connection error");
});
db.once('open', function callback() { //监听一次打开
  //在这里创建你的模式和模型
  console.log('connected!');
});
var ListSchema = new mongoose.Schema({
  user_id: String,
  content: String,
  update_at: Date
});
mongoose.model('user', ListSchema);
module.exports = mongoose;