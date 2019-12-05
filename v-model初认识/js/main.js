var app =new Vue({
    el:'#app',  //element:去页面中去绑定元素
    data:{      // 所有的元素变量写进data中
        name:null,
        age:null,
        sex:null, //如果前面设置了变量后面没有进行传参则不会显示这个元素的值
        // 在控制台可以直接利用域进行域内值的变量修改  比如：app.age=18
    }


})