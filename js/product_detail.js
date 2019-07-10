// 详情页的物品+  -  dom
// 找到class为product-font的div
var div=document.getElementById("deta-pro");
console.log(div);
// 在div中找到所有input元素
var inputs=div.getElementsByTagName("input");
console.log(inputs);
// 遍历每个input，为当前的input添加一个onclick事件的处理函数
for(var inp of inputs){
    inp.onclick=function(){
    var inp=this;
    var input=inp.parentNode.children[6];
    var n=parseInt(input.value);
    if(inp.value=="+"){
        n++;
    }else if(n>1){
        n--;
    }
    input.value=n;
    }
    }