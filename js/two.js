define(["jquery"],function($){
 $('.msgs-top-box').on('click',function(){
        window.location.href = 'news-three.html'
    })


/*  第三页  */
    var num=0,
    list=$('.friends-msg .list-friends-msg');
    $('.nav-top').on('click','a',function(){//点击加上边框
        $(this).addClass('on').siblings('a').removeClass('on');
    })

loadData(list,num)
var Lists=$('.friends-msg');
Lists.on('scroll',function(){//监听滚动条事件
  if(Lists.scrollTop()>200){
    $('.headers-top').addClass('hide');
    $('.nav-top').css({
      'position':'fixed',
      'top':0,
      'z-index':222,
      'background':'#1B1720',
      'border-top':'none'
    })
    $('.back').addClass('on');
  }else{
    $('.headers-top').removeClass('hide');
      $('.nav-top').css({
         'position':'static'
    })
    $('.back').removeClass('on');
  }
      
//console.log(Lists.scrollTop())
//console.log(Lists.find('li').length)
  if(Lists.scrollTop()>=$(document).height()){
     if(++num<4){
        loadData(list,num)
     }else{
        console.log('no data!'+Lists.find('li').length)
     }
  }
})

//返回顶部
$('.back').on('click',function(){
  Lists.scrollTop(0);
})

function loadData(ele,num){
  $('.loading').removeClass('on');
  
  //渲染列表
  $.ajax({
    url:'../data/data-'+num+'.json',
    dataType:'json',
    success:function(e){
      var data = e;
       render(data);
       setTimeout(function(){
          $('.loading').addClass('on');
       },1000)
    },error:function(e){
       console.log('请求失败')
    }
  }) 
          function render(data){ 
              var str = '';
              $.each(data,function(k,v){
                  str+=[' <li style="background:url('+v.bgs+');background-size: contain;">',
                                   ' <div class="friend-msg-title">',
                                      '<p><b>'+v.msgtitle+'</b></p>',
                                      '<p><b>'+v.productText+'</b></p>',
                                     '<div class="friend-msg-pics">',
                                         '<span class="headPic"><img src="'+v.imageUrl+'" alt="" /><i>'+v.productI+'</i></span>',
                                       '</div>',
                                  '</div>',
                              '</li>'].join('');
              })

              $('.list-friends-msg').append(str)
        }
}


})