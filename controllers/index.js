const common = require('./common');
const async = require('async');
const WishModel = require('../models/wish');
const Constant = require('../constant/constant');
let exportObj = {
    getList,
    add
};
module.exports = exportObj;
function getList (req, res) {
    //定义一个async任务
    let tasks = {
        //执行查询方法
        query: cb => {
            //使用sequelize的model的fandall方法查询
            WishModel
                .findAll({
                    limit: 10,
                    order: [['created_at', 'DESC']],

                }).then(function (result) {
                    //查询处理结果i
                    let list = [];
                    result.forEach((v, i) => {
                        let obj = {
                            id: v.id,
                            name: v.name,
                            content: v.content
                        };
                        list.push(obj);
                    });
                    cb(null, list);
            })
                .catch(function (err) {
                    console.log(err);
                    cb(Constant.DEFAULT_ERROR);
                });

        }
    };
    //让async自动控制流程
    async.auto(tasks, function (err, result) {
        if(err){
            console.log (err)
        }else{
            //如果没有错误，则渲染index页面模板，同时将之前query方法获取的结果数组list以变量list渲染到页面上
            res.render('index', {
                list: result['query']
            });
        }
    })
}
function add (req, res) {
//    定义一个async任务
    let tasks = {
        checkParams: cb => {
            common.checkParams(req.body, ['name', 'content'], cb)
        },
        //添加执行方法
        add: ['checkParams', (result, cb) => {
            //使用Sequelize的model的create方法插入
            WishModel
                .create({
                    name: req.body.name,
                    content: req.body.content
                })
                .then(function (result) {
                    cb(null);
                })
                .catch(function (err) {
                    //错误处理
                    console.log(err);
                    //通过async回调，返回数据到下一个async方法
                    cb(Constant.DEFAULT_ERROR);
                });
        }]
    };
    //让async自动控制流程
    async.auto(tasks, function (err, result) {
        if(err){
            console.log (err)
            let result = "失败";
            let msg = "添加失败，出现错误";
            if (err.code === 199) {
                //199代表缺少参数错误，和在constant.js中定义的对应
                msg = "添加失败，姓名和愿望都要填上哦";
            }
            //渲染失败结果的页面，将result和msg渲染到页面上
            res.render ('result', {
                result: result,
                msg: msg
            });
        }else{
            //渲染成功得页面，将result和msg渲染到页面上面
            res.render('result', {
                result: '成功！',
                msg: '添加成功，返回去看一下'
            });
        }
    })
}