// 注册电话正则验证
function check_phone(){
    var msg=phone.value;
    var reg=/^1[3-8]\d{9}$/;
    var str=new RegExp(reg);
    if(reg.test(msg)===true){
        msg1.innerHTML="电话号码可用！"
    }else{
        msg1.innerHTML="电话号码格式错误！"
    }
}

// 邮箱正则验证
function check_email(){
    var msg=email.value;
    var reg=/^\w+@\w+\.com(\.cn)?$/;
    var str=new RegExp(reg);
    if(reg.test(msg)===true){
        msg3.innerHTML="邮箱可用！";
    }else{
        msg3.innerHTML="邮箱格式错误！";
    }
}

// 密码正则验证
function check_pwd(){
    var msg=upwd.value;
    var reg=/^\w{6,12}$/;
    var str=new RegExp(reg);
    if(reg.test(msg)===true){
        msg2.innerHTML="密码可用！";
    }else{
        msg2.innerHTML="密码格式错误！";
    }
}

// 确认密码验证
function check_dupwd(){
    var dmsg=dupwd.value;
    var msg=upwd.value;
    if(dmsg===""){
        msg4.innerHTML="密码为空！";
    }else if(dmsg===msg){
        msg4.innerHTML="密码相同！";
    }else{
        msg4.innerHTML="密码不相同，请重新输入！";
    }
}