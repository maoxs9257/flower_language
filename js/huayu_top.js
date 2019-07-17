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
    
