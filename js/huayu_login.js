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