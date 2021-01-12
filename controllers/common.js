const async = require("async");
const constant = require("../constant/constant");
const exportObj = {
    checkParams,
}
module.exports = exportObj;
/**
 * 检查参数全局方法
 *params 请求的参数集
 *checkArr 需要验证的参数
 *cb 回调
 */
function checkParams (params, checkArr, cb){
    let flag = true;
    checkArr.forEach(v => {
    if (!params[v]){
        flag = false;
    }
    });
    if (flag) {
        cb(null);
    }else{
        cb(constant.LACK);
    }
}
function autoFn (tasks, res, resObj) {
    async.auto(tasks, function (err){
        if (!!err) {
            console.log (JSON.stringify(err));
            res.json({
                code: err.code || Constant.DEFAULT_ERROR.code,
                msg: err.msg || JSON.stringify(err)
            });
        } else {
            res.json(resObj);
        }
    });
}