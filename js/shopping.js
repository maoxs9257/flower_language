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