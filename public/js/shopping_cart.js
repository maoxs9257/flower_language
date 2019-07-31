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

// 点击+ - 改变数量
// 事件委托给父元素p.p_bibn
// 查找事件触发元素
var p_bibns=document.getElementsByClassName("p_bibn");
// console.log(p_bibns);
// 绑定事件处理函数
for(var p_bibn of p_bibns){
p_bibn.onclick=function(e){
    var p=e.target;
    // console.log(p);
    // 查找要修改的元素
    var inp=p.parentNode.children[1];
    var span=p.parentNode.children[4];
    var n=parseInt(inp.innerHTML);
    // console.log(span);
    // 修改元素
    if(p.className=="btn_one"&&n>1){
        n--;
    }else if(p.className=="btn_two"){
        n++;
    }
    inp.innerHTML=n;
    var sprice=p.parentNode.children[4].getAttribute("data-sprice").slice(2);//从下标为2的开始截取￥：344，得到344整数
    span.innerHTML=`￥:${n*sprice}`;//计算每个商品小计
    // 计算总价
    // 查找整个最外层的元素
    var ul_product=document.getElementsByClassName("ul_product")[0];
    // 查找所有小计
    var spans=ul_product.querySelectorAll(".sp_last");
    // 查找出总计
    var all_plice=ul_product.querySelector(".all_plice");
    //先定义变量total=0,准备接汇总的总价
    var total=0;
    // 遍历spans
    for (var span of spans){
        total+=parseFloat(
            span.innerHTML.slice(2));
        }
        all_plice.innerHTML=`￥:${total.toFixed(2)}`;
    }
}
// 单击商品上的X，删除选中的商品,同时计算新的总价
// 查找事件触发元素
var product_li_sp=document.getElementsByClassName("product_li_sp")[0];
// console.log(product_li_sp);
// 绑定事件处理函数
product_li_sp.onclick=function(e){
    // 查找要修改的元素
    var btn_1=e.target;
    if(btn_1.className=="guanbi_img"){
    // 删除选中的列表元素
    var s1=btn_1.parentNode.parentNode;
    s1.parentNode.removeChild(s1);
    // 减去删除的列表小计(计算剩下的小计之和)
    // 查找要删除的小计
    var sp_last=document.getElementsByClassName("sp_last");
    // console.log(sp_last);
    var total_1=0;
    for(var sp of sp_last){
        total_1+=parseFloat(
            sp.innerHTML.slice(2));
        }
        // 查找总价元素
        var all_plice=document.getElementsByClassName("all_plice")[0];
        // 再将新值返回
        all_plice.innerHTML=`￥:${total_1.toFixed(2)}`;
    }   
}   