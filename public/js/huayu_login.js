function check_uname (){
    var $uname=uname.value;
    if($uname==""){
        msg1.innerHTML="用户名不能为空！";
    }else if($uname.length>=6 && $uname.length<=12){
        msg1.innerHTML="格式正确！";
    }else{
        msg1.innerHTML="格式错误！";
    }
}

function check_pwd(){
    var $upwd=upwd.value;
    if ($upwd==""){
        msg2.innerHTML="用户密码不能为空";
    }else if($upwd.length>=6 && $upwd.length<=12){
        msg2.innerHTML="格式正确！";
    }else{
        msg2.innerHTML="格式错误！";
    }
}
// 登录验证
