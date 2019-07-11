window.onload=function(){
// // 大图右侧样式
// 大图左侧样式
    var left_img=document.getElementById("left_img");
    var right_img=document.getElementById("right_img");
    // 限时促销左右效果
    var left_img_djs=document.getElementById("left_img_djs");
    var right_img_djs=document.getElementById("right_img_djs");
    // 今日上新效果
    var left_huayi_1=document.getElementsByClassName("left_huayi_1");
    window.onscroll=function(){
        var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
        if(scrollTop>=50){
            left_img.style="left:0px";
            left_img.style.opacity="1";
            right_img.style="right:0";
            right_img.style.opacity="1";
        }
        if(scrollTop>=914){
            left_img_djs.style="left:0px";
            left_img_djs.style.opacity="1";
            right_img_djs.style="right:0";
            right_img_djs.style.opacity="1";
        }
        if(scrollTop>=460){
            
            left_huayi_1.style="top:0px";
            left_huayi_1.style.opacity="1";
        }
    }
}
