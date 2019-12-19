
 var Child={
    template:'<div>这个是组件的基础写法</div>>',
}

var app =new Vue({
    el:"#app",
    components:{
        'my-component':Child,
    }

})
