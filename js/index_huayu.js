// 大图左侧样式
window.onload=function(){
    var left_img=document.getElementById("left_img");
    window.onscroll=function(){
        var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
        if(scrollTop>=50){
            left_img.style="left:0px";
            left_img.style.opacity="1";
        }
    }
}
// 大图右侧样式
window.onload=function(){
    var right_img=document.getElementById("right_img");
    window.onscroll=function(){
        var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
        if(scrollTop>=50){
            right_img.style="right:0";
            right_img.style.opacity="1";
        }
    }
}
