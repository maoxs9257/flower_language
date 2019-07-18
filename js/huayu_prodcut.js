// 商品列表页点击加入购物车，从右侧弹出购物车窗口
// 查询事件触发元素
// 因为触发事件相同，所以查找所有元素的父元素，并且给父元素绑定事件处理函数
var body_top_pro=document.getElementsByClassName("body_top_pro")[0];
console.log(body_top_pro);
// 绑定事件处理函数
body_top_pro.onclick=function(e){
    var btn=e.target;
    console.log(btn.className=="jiaru_gw");
    if(btn.className=="jiaru_gw"){
        // 查询要修改的元素
    var gouwu_right=document.getElementsByClassName("gouwu_right")[0];
    
    // 修改元素
    gouwu_right.style.transform="translateX(0)";
    } 
};
// 单击购物车X关闭购物车侧边栏
// 查找事件触发元素
var back_img=document.getElementsByClassName("back_img")[0];
// 绑定事件处理函数
back_img.onclick=function(){
    // 查找要修改的元素
    var gouwu_right=document.getElementsByClassName("gouwu_right")[0];
    // 修改元素
    gouwu_right.style.transform="translateX(400px)";
}
    
    