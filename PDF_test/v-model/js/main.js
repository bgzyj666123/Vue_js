/*
var app =new Vue({
    el:'#app1',
    data: {
        message:'',
        picked:'js',
        checked:['js','html']
    },
    /!*method:{
      handleInput:function (e) {
          this.message=e.target.value;

      }
    }*!/
})*/

var app2=new Vue({
        el:"#app2",
        data:{
            selected:'html',
            options:[{
                text:'HTML',
                value:'html',
            },
                {
                    text:'JavaScript',
                    value:'js'
                },
                {
                    text:'CSS',
                    value:'css'
                },
            ]
        }
    })
