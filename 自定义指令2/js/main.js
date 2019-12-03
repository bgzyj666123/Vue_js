Vue.directive('pin',function (element,binding) {
    var pinned=binding.value;
    var position=binding.modifiers;
    var warning=binding.arg;
    console.log('position:',position);
    /*console.log('data:',pinned);*/ // 在js中如果console中的变量错了，就不会执行下面的语句。
    if (pinned==true){
        element.style.position='fixed';   //if(pinned) -- true钉住了就将元素的位置固定
        for(var key in position){
            if(position[key]==true){
                element.style[key]='10px';
            }
        }
        if (warning==='true'){
            element.style.background="yellow";
        }
    }else{
        element.style.position='static';  //if(pinned) --false取消钉住将元素的位置变成静态

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