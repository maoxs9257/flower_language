// // 用户资料
// // 点击左侧选项，右侧页面元素变化
// // 查找事件触发元素
// // 事件委托
// var ul=document.getElementsByTagName("ul")[0];
// console.log(ul);
// // 绑定事件处理函数
// ul.onclick=function(e){
//     var my_btn=e.target;
//     console.log(my_btn.className=="my_ofg");
//     if(my_btn.className=="my_ofg"){
//         var my_det=document.getElementsByClassName("my_det")[0];
//         my_det.style.display="block";
//     }else if(my_btn.className=="my_coupon"){
//         var my_youhui=document.getElementsByClassName("my_youhui")[0];
//         my_youhui.style.display="block";
//     }
// }
//     // 查找要改变的元素
//     // 修改元素
$("ul").on("click","li a",function(e){
    e.preventDefault();
    $(this).parent().addClass("active").siblings().removeClass("active");
    var href=$(this).attr("href");
    $(href).show().siblings().hide();    
})