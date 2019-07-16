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
    // 浪漫你我左右效果
    var le_ri_low=document.getElementById("le_ri_low");
    var le_ri_right=document.getElementById("le_ri_right");
    // 装点家园效果
    var bottom_top=document.getElementsByClassName("bottom_top");
    // 底部大图和文字
    var left_ove=document.getElementById("left_ove");
    var right_ove=document.getElementById("right_ove");
    // 底部商品服务
    var foot_d1=document.getElementById("foot_d1");
    var foot_d2=document.getElementById("foot_d2");
    var foot_d3=document.getElementById("foot_d3");
    var foot_d4=document.getElementById("foot_d4");
    // 侧边导航栏
    var right_cb_lan=document.getElementById("right_cb_lan");
    window.onscroll=function(){
        var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
        // 两张大图
        if(scrollTop>=300){
            left_img.style="left:0px";
            left_img.style.opacity="1";
            right_img.style="right:0";
            right_img.style.opacity="1";
        }
        // 限时促销
        if(scrollTop>=1200){
            left_img_djs.style="left:0px";
            left_img_djs.style.opacity="1";
            right_img_djs.style="right:0";
            right_img_djs.style.opacity="1";
        }
        // 今日上新
        if(scrollTop>=600){
            for(var img of left_huayi_1){
                img.style="top:0px";
                img.style.opacity="1";
            }
        }
        // 浪漫你我
        if(scrollTop>=1800){
            le_ri_low.style="left:0px";
            le_ri_low.style.opacity="1";
            le_ri_right.style="right:0px";
            le_ri_right.style.opacity="1";
        }
        // 装点家园
        if(scrollTop>=2100){
            for(var top of bottom_top){
                top.style.transform="translateY(0)";
            }
        }
        // 底部大图和文字
        if(scrollTop>=3000){
            left_ove.style.transform="translateX(0)";
            right_ove.style.transform="translateX(0)";
        }
        // 底部商品服务
        if(scrollTop>=3300){
            foot_d1.style.transform="translateY(0)";
            foot_d2.style.transform="translateY(0)";
            foot_d3.style.transform="translateY(0)";
            foot_d4.style.transform="translateY(0)";
        }
        // 侧边导航栏
        if(scrollTop<700){
            right_cb_lan.style="opacity:0 ;";
        }else if(scrollTop>=700){
            right_cb_lan.style="opacity:1 ;";
        }
    }
}

// 倒计时
var intDiff = parseInt(60*60*24);//倒计时总秒数量
	function timer(intDiff){
		window.setInterval(function(){
			var day=0,
				hour=0,
				minute=0,
				second=0;//时间默认值		
			if(intDiff > 0){
				day = Math.floor(intDiff / (60 * 60 * 24));
				hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
				minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
				second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
			}
			if (minute <= 9) minute = '0' + minute;
			if (second <= 9) second = '0' + second;
			$('.day_show').html(day+"天");
			$('.hour_show').html('<s id="h"></s>'+hour+'时');
			$('.minute_show').html('<s></s>'+minute+'分');
			$('.second_show').html('<s></s>'+second+'秒');
			intDiff--;
			}, 1000);
		} 

		$(function(){
			timer(intDiff);
		});
