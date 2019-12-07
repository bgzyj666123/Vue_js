var app =new Vue({
    el:document.getElementById("app"),
    data:{
        data:new Date()
    },
    mounted:function () {
        var _this=this;
        _this.timer=setInterval(function () {
            _this.date=new Date();
        },1000)
    },
    brforeDestroy:function () {
        if (this.timer){
            clearInterval(this.timer);
        }

    }




})
