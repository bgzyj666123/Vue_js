var app =new Vue({
    el:'#app',
    data:{
        type:'name',
    },
    methods:{
        handleToggle:function () {
            this.type= this.type==='name'?'mail':'name';
            /*？:是三元运算符,？前面都是条件,则this.type==='name'是条件 ===是完全相等则返回布尔型true，在点击一次就相反*/
            console.log(this.type==='name')

        }
    }
})