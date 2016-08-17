define(["jquery"],function($){
 if(window.location.href.indexOf('playlist.html') == -1) return;

	init();
	//跳转页面
	$('.css-main-one').on('click', '.css-banner', function() {
		window.location.href = 'news-first.html'
	})
	function init(){
		//播放函数
		playSong();
		//暂停函数
		pauseSong();
		//选中函数
		cekSong();
		//点亮函数
		clickLight();
		//接收数据函数
		receiveData();
		//渲染数据函数
		renderData();
        
		//默认状态
		//$(".css-main-one").show();
		    //歌曲图列表实现左右滑动
	  // var myscroll=new iScroll("css-banner-three",{hScroll:true, vScrollbar:true});
	}

//播放函数
function playSong(){
	//当点击暂停按钮时，显示播放页面
	$("#css-btns-pause").on("click",function(){		  
		  $(".css-main-three").hide(800);//暂停页面		  
		  $(".css-main-two").show(800);//播放页面
	})
};

//暂停函数
function pauseSong(){
	//当点击播放按钮时，显示暂停页面
	$("#css-btns-play").on("click",function(){
		  $(".css-main-two").hide(800);//播放页面
          $(".css-main-three").show(800);//暂停页面
	})
};

//选中函数
function cekSong(){
	$(".css-menu").on("click","li",function(){
              $(this).addClass("css-menu-bg").siblings().removeClass()
	})
	$(".css-list").on("click","li",function(){
              $(this).addClass("css-list-bg").siblings().removeClass()
              $(".css-main-two").show(800); //播放页面
              $(".css-main-one").hide(800);//列表页面
	})
};

//点亮函数
function clickLight(){
	//点击声音、循环按钮时，变亮
	light(".fa-random","lp-bg");
	light(".fa-retweet","lp-bg");

	function light(parentele,style){
		$(parentele).on("click",function(){
		     $(this).toggleClass(style);
	    })
	}
};

//接收数据函数
function receiveData(){
	$.ajax({
		url:"../data/songlist.json",
		success:function(data){
          //  console.log(data);
           renderData(data);
		}
	})
};

//渲染数据函数
function renderData(data){
    var songlist=data,
        liststr="<ul>",
        menustr='<ul>';	    
	for(var i=0;i<songlist.length;i++){
		liststr+="<li><h2>"+songlist[i].name+"</h2><span>"+songlist[i].alltime+"</span></li>";
        menustr+='<li><i class="fa fa-star"></i><h3>'+songlist[i].name+'</h3><span>'+songlist[i].alltime+'</span></li>';           		   		  
	}
	liststr+="</ul>";
	menustr+='</ul>';
	//追加至页面  列表渲染
	$(".css-list").html(liststr);
	//追加至页面  歌单渲染
	$(".css-menu").html(menustr);
}
	
	
})