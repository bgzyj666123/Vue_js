Vue.directive('pin',function (element,binding) {
    var pinned=binding.value;
    console.log('data:',pinned); // 在js中如果console中的变量错了，就不会执行下面的语句。
    if (pinned==true){
        element.style.position='fixed';   //if(pinned) -- true钉住了就将元素的位置固定
        element.style.top='10px';
        element.style.left='10px';
    }else{
        element.style.position='static';  //if(pinned) --false取消钉住将元素的位置变成静态
        element.style.top='0px';
        element.style.left='0px';
    };

});


new Vue({
    el:"#app",
    data:{
        card1:{
          pinned:false,
        },
        card2:{
            pinned:false,
        },

},
});