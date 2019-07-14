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
        // 两张大图
        if(scrollTop>=50){
            left_img.style="left:0px";
            left_img.style.opacity="1";
            right_img.style="right:0";
            right_img.style.opacity="1";
        }
        // 限时促销
        if(scrollTop>=914){
            left_img_djs.style="left:0px";
            left_img_djs.style.opacity="1";
            right_img_djs.style="right:0";
            right_img_djs.style.opacity="1";
        }
        // 今日上新
        if(scrollTop>=460){
            for(var img of left_huayi_1){
                img.style="top:0px";
                img.style.opacity="1";
        }
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
