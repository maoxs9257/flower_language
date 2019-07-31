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
