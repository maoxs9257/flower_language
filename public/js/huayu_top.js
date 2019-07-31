// 搜索框事件
// 查找要事件触发的元素
var imgs=document.getElementById("imgs_one");
// 绑定事件处理函数
// console.log(imgs);
imgs.onclick=function(){
    // 查找要修改的元素
    var btn_one=document.getElementsByClassName("sousuo")[0];
    // console.log(btn_one);
    // 修改元素
    btn_one.style.display="block";
};
// 点击取消关闭class 为sousuo的div
// 查找事件触发元素
var btn_btn=document.getElementById("btn_btn");
// 绑定事件处理函数
btn_btn.onclick=function(){
    // 查找要修改的元素
    var btn_one=document.getElementsByClassName("sousuo")[0];
    // 修改元素
    btn_one.style.display="none";
}
// 点击显示个人资料框
// 查找事件触发元素
var imgs_two=document.getElementById("imgs_two");
// 绑定事件处理函数
imgs_two.onclick=function(){
    // 查找要修改的元素
    var zl_dd=document.getElementsByClassName("zl_dd")[0];
    // 修改元素
    // zl_dd.style="height:100px;"
    if(zl_dd.classList.contains("active_top")){
        zl_dd.classList.remove("active_top");
    }else{
        zl_dd.classList.add("active_top");
    }
}
    
