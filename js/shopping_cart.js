// 商品列表页点击加入购物车，从右侧弹出购物车窗口
// 查询事件触发元素
// 因为触发事件相同，所以查找所有元素的父元素，并且给父元素绑定事件处理函数
var body_top_pro=document.getElementsByClassName("body_top_pro")[0];
// console.log(body_top_pro);
// 绑定事件处理函数
body_top_pro.onclick=function(e){
    var btn=e.target;
    // console.log(btn.className=="jiaru_gw");
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
// 单击商品上的X，删除选中的商品
// 查找事件触发元素
    var product_li_sp=document.getElementsByClassName("product_li_sp")[0];
    // console.log(product_li_sp);
// 绑定事件处理函数
    product_li_sp.onclick=function(e){
        // 查找要修改的元素
        var btn_1=e.target;
        if(btn_1.className=="guanbi_img"){
        // 删除元素
        var s1=btn_1.parentNode.parentNode;
        s1.parentNode.removeChild(s1);
        }   
    }
    
    