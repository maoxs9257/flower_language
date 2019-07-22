// 引入页头,css及js
$(function(){
    $.ajax({
        url:"html_top.html",
        type:"get",
        success:function(result){
            $(result).replaceAll("#header_top");
            $(`<link rel="stylesheet" href="../css/花语_top.css">`).appendTo("head");
            $(`<script src="../js/huayu_top.js"></script>`).appendTo("body");
        }
    })
})
// 引入页脚，css
$(function(){
    $.ajax({
        url:"html_bottom.html",
        type:"get",
        success:function(result){
            $(result).replaceAll("#footer_bottom");
            $(`<link rel="stylesheet" href="../css/花语_bottom.css">`).appendTo("head");
        }
    })
})
// 引入购物车（右边）
$(function(){
    $.ajax({
        url:"shopping_car.html",
        type:"get",
        success:function(result){
            $(result).replaceAll("#shopping_c");
            $(`<link rel="stylesheet" href="../css/shopping.css">`).appendTo("head");
            $(`<script src="../js/shopping_cart.js"></script>`).appendTo("body");
        }
    })
})