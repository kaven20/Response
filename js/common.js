$(document).ready(function(e) {
	$(".k_header_ico_search").click(function(){
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$(".k_header_searchbox").hide();
		}else{
			$(this).addClass("on");
			$(".k_nav_cot").hide();
			$(".k_header_ico_nav").removeClass("on");
			$(".k_header_searchbox").show();	
		}
		
	});
	$(".k_header_ico_nav").click(function(){
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$(".k_nav_cot").hide();
		}else{
			$(this).addClass("on");
			$(".k_header_ico_search").removeClass("on");
			$(".k_header_searchbox").hide();
			$(".k_nav_cot").show();	
		}
		
	});
	$(".k_box_line span").click(function(){
		$(this).hide();
		$(this).parent().find(".k_box_line_hide").show();	
	});
 /* if($("#sloop").length>0){
	   if($(window).width()>790){
				var lwidth=$("#sloop").width()/4;  
		  }else if($(window).width()<=790 &&$(window).width()>440){
				var lwidth=$("#sloop").width()/2;  
		  }else{
			   var lwidth=$("#sloop").width();
		 }
	   $("#sloop li").width(lwidth);
	   var sloop = new Swiper('#sloop',{
			pagination: '#sdot',
			paginationClickable: true,
			slidesPerView: 'auto',
			calculateHeight: true,
			loop: true
	  });
	  $(window).resize(function(){
		  if($(window).width()>790){
				var lwidth=$("#sloop").width()/4;  
		  }else if($(window).width()<=790 &&$(window).width()>440){
				var lwidth=$("#sloop").width()/2;  
		  }else{
			   var lwidth=$("#sloop").width();
		 }
		   
		   $("#sloop li").width(lwidth);
	  });
   }*/
	if($("#spLoop").length>0){
		 var spLoop = new Swiper('#spLoop',{
			loop:true,
			paginationClickable: true,
			calculateHeight: true,
			pagination:"#loopDot"
	   });
	  
	}
	
	$(".k_top_nav").mouseover(function(){
		var i=$(this).index();
		$(".k_top_menu_show").hide().eq(i).show();
		$("#kTop").addClass("open");
		$(".k_top_nav").removeClass("on");
		$(this).addClass("on");	
	});
	$("#kTop").mouseleave(function(){
		$("#kTop").removeClass("open");
		$(".k_top_nav").removeClass("on");	
	});
	$(".jsAddBtn").click(function(){
		var addhtml="<div>"+$('.JsAddCot').eq(0).html()+"<span class='k_vclose' onclick='$(this).parent().remove();'></span></div>";	
		$('.JsCanAdd').eq(0).append(addhtml);
	});
});
