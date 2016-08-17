define(["jquery","js/swiper-3.3.1.jquery.min","js/swiper.animate1.0.2.min"],function($){
 if(window.location.href.indexOf('index.html') == -1) return;
 var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', //horizontal 水平  vertical 垂直
        loop: true,//无缝
        
        // 如果需要分页器
        pagination: '.swiper-pagination',
       
        //自动播的时间设置
        autoplay: 1000,
        //手指离开后  继续自动播
        autoplayDisableOnInteraction : false
      
      })   
      $("#login-pa").on("click",function(){
      	 window.location.href="pages/login.html";
      })     
})