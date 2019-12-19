var data={
    counter:0
};
Vue.component('my-component',{
    template: '<button @click="counter++">{{counter}}</button>',
    data:function () {
        return data;
    }
});

var app =new Vue({
    el:'#app',

});