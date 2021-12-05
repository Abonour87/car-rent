$('.carousel').carousel(
	{
		interval : 600000000
	}
)

$(function(){
	$(".header-nav .header-lins ul>li a").click(function(e){
		e.preventDefault();
		$(".header-nav .header-lins ul>li a").removeClass("active")
		$(this).addClass("active")
	
	})
$(".header-nav .header-lins ul>li a").on("click",function(){
	$("html, body").animate({
		scrollTop : $($(this).data("target")).offset().top
	},1000)
	})
$(".header-nav .togg-sm i").click(function(){
	$(".header-nav .header-lins").animate({
		left:"0"
	},1000)
})
$(".header-nav .header-lins i").click(function(){
	$(this).parent(".header-lins").animate({
		left:"-100%"
	},1000)
})
})

