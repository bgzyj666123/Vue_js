var app =new Vue({
    el:'#app',
    data: {
        message:'',
    },
    method:{
      handleInput:function (e) {
          this.message=e.target.value;

      }
    }
})