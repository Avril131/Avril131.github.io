Date.prototype.format = function(fmt) { 
    var o = { 
       "M+" : this.getMonth()+1,                 //月份 
       "d+" : this.getDate(),                    //日 
       "h+" : this.getHours(),                   //小时 
       "m+" : this.getMinutes(),                 //分 
       "s+" : this.getSeconds(),                 //秒 
       "q+" : Math.floor((this.getMonth()+3)/3), //季度 
       "S"  : this.getMilliseconds()             //毫秒 
   }; 
   if(/(y+)/.test(fmt)) {
           fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
   }
    for(var k in o) {
       if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
   return fmt; 
}       



function Turn_red() {
    alert("p1");
    document.getElementById("p1").style.color = 'red';
}

function Turn_date() {
    alert("p2");
    var d = new Date().format("yyyy-MM-dd");
    document.getElementsByTagName("H1")[0].innerHTML = d;
}

function Add_class() {
    alert("p3");
    var tmp = document.getElementById("p1");
    var fa = tmp.parentNode;
    var son = fa.children;
    var i;
    for( i = 0;i<son.length;i++){
        if(son[i].tagName == "LI") son[i].classList.add("fn-active");
    }
}

function Delete() {
    alert("p4");
    var de = document.getElementsByTagName("Li")[7];
    de.remove();
}

function New_table() {
    alert("p5");
    window.open("http://www.taobao.com");
}

function Add_Li() {
    alert("p6");
    var T = document.createTextNode("p9");
    var L = document.createElement("li");
    L.appendChild(T);
    var element = document.getElementsByTagName("Ul")[0];
    element.appendChild(L);
}

function Set_width() {
    alert("p7");
    var tmp = document.getElementsByClassName("m-box")[0];
    tmp.style.width = window.innerWidth;
}

function click() {
    alert("p8");
}