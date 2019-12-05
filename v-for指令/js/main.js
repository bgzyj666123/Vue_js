var app =new Vue({
    el:'#app',  //element:去页面中去绑定元素
    data:{      // 所有的元素变量写进data中
      // foodlist:['葱','姜','蒜'],
        foodlist:[
            {
                name:'葱',
                price:5,
                discount:0.8,
            },
            {
                name:'姜',
                price: 10,
                discount:0.7,
            },
            {
                name:'蒜',
                price:8,
                discount:1,
            },


        ]
    }


})