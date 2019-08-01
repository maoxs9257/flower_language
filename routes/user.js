const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
//2.用户登录
router.post("/login",function(req,res){
	//2.1获取数据
	var obj=req.body;
	if (!obj.uname){
		res.send({code:401,msg:"uname required"});
		return;
	}
	if (!obj.upwd){
		res.send({code:402,msg:"upwd required"});
		return;
	}
	//2.3执行sql语句
	pool.query("SELECT * FROM hy_login WHERE lname=? AND lpwd=?",[obj.lname,obj.lpwd],function(err,result){
		if (err) throw err;
		console.log(result);
		//判断数组长度是否大于0，大于0说明登录成功
		if (result.length>0){
			res.send({code:200,msg:"login success"});
		}else{
			res.send({code:301,msg:"login error"});
		}

	});
	//console.log(obj);
	//res.send("登录成功");
});


module.exports=router;