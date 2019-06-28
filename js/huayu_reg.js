function check_email(){
    var msg=email.value;
    var reg=/\w+@\w+\.com(\.cn)?/;
    var str=new RegExp(reg);
    if(reg.test(msg)===true){
        msg3.innerHTML="邮箱可用！";
    }else{
        msg3.innerHTML="邮箱格式错误！";
    }
}