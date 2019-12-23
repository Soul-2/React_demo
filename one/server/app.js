
// const http = require("http");
 
// //第一步：创建一个服务器http.Server对象（有监听端口和监听request方法）
// let server = http.createServer();
 
// //监听端口
// server.listen(8080, (req, resp) => {
//     console.log("服务器80端口已经监听...");
// })
 
// //监听request请求，如果请求，那么response响应数据返回到浏览器显示！
// server.on("request", (request, response) => {
//     //request请求数据和response响应数据都是以流的方式操作，查看官方文档！
//     response.write("<p><span>响应到浏览器的第一条数据helloword！！！</span></p>", encoding = "utf8");
//     //流的写入最后必须结束！
//     response.end();

// })
const express = require('express');

//2.创建服务器对象
let server = express();

//3.创建一个路由对象
let router = express.Router();
var path = require('path'); //系统路径模块
var fs = require('fs'); //文件模块
var bodyParser = require('body-parser'); //对post请求的请求体进行解析模块
//4.设置路由
//5.监听端口
server.listen(8888,(req,res)=>{
    console.log('Server running at http://127.0.0.1:8888/')
});
router.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
      res.sendStatus(200);
    }
    else {
      next();
    }
  });
router.get('/login',(req,res)=>{
    var file = path.join(__dirname, 'data/user.json'); //文件路径，__dirname为当前运行js文件的目录
    //var file = 'f:\\nodejs\\data\\test.json'; //也可以用这种方式指定路径

    //读取json文件
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) {
            res.send('文件读取失败');
        } else {

            res.send(data);
        }
    })

    // res.send('这是登录页面');
}).get('/register',(req,res)=>{
    res.send('这是注册页面');
});
var multer=require('multer');
//生成的图片放入uploads文件夹下
var upload=multer({dest:'uploads/'})
router.post('/img',upload.single('test'),(req,res)=>{
    //读取文件路径
    console.log(req.file,'+++++++++++++++++')
    fs.readFile(req.file.path,(err,data)=>{
        //如果读取失败
    if(err){return res.send('上传失败')}
  
    //如果读取成功
    //声明图片名字为时间戳和随机数拼接成的，尽量确保唯一性
    let time=Date.now()+parseInt(Math.random()*999)+parseInt(Math.random()*2222);
    //拓展名
    let extname=req.file.mimetype.split('/')[1]
    //拼接成图片名
    let keepname=time+'.'+extname
    //三个参数
    //1.图片的绝对路径
    //2.写入的内容
    //3.回调函数
    // fs.writeFile(path.join(__dirname,'../../static/img/'+keepname),data,(err)=>{
    //     if(err){return res.send('写入失败')}
    //     res.send({err:0,msg:'上传ok'})
    // });
    fs.writeFile(path.join(__dirname,'/imgs/'+req.file.originalname),data,(err)=>{
        if(err){return res.send('写入失败')}
        res.send({code:200,msg:"图片上传成功！"})
    })
 });
})
server.use(router);

