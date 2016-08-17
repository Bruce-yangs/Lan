define(['jquery',"js/swiper-3.3.1.jquery.min","js/swiper.animate1.0.2.min"],function($,swiper){
	if(window.location.href.indexOf('news-first.html') == -1) return;
  var swiper = new Swiper('.swiper-container', {
	    pagination: '.swiper-pagination',
	  	slidesPerView: 2,
	    centeredSlides: true,
	    paginationClickable: true,
	   // spaceBetween: 30
	});
  /*  console.log(Is)*/
 /*   var roll=new IS('.main');*/
/*  var homeS = new iScroll("main",{
    onBeforeScrollStart: function(e) {
      //除了input select textarea button a 其他的阻止 
      var e_Target = e.target.nodeName.toLowerCase(); //获取节点标签名称转换成小写
      if (e_Target != "input" && e_Target != "select" && e_Target != "textarea" && e_Target != "button" && e_Target != "a") {
        e.preventDefault();
      }
      console.log(e_Target);
    }
  });*/


        $.when($.ajax('../data/news.json'))
          .done(function(e){
           var data = e.news;
             render(data);
         })
         .fail(function(e){
           console.log('请求失败')
         })
        function render(data){ 
            var str = '';
            var strs = '';
            var imgs = '<div class="swiper-container">';
                str+='<h3 class="titles-msg">'+data[0].Newtitle+'</h3>';
                
                $(data[0].Newmsg).each(function(key,val){
                   strs+= '<p>'+val+'</p>'
                })
               str+=strs;
            $('.main-center-box').html(str)
      }
    $('.main-center').on('click','span',function(){
        window.location.href = 'news-twos.html'
    })
    
    $('.msgs-top-box').on('click',function(){
        window.location.href = 'news-three.html'
    })


/*  第三页  */
   /* var num=0,
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
      
console.log(Lists.scrollTop())
console.log(Lists.find('li').length)
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
})*/





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
       },500)
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
	
