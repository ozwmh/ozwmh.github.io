
// 画面ロード
$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});


// 筆記体ロゴ
var st0 = document.querySelectorAll('.st0');
var anime = function(){
	new Vivus('svg-animation', {type: 'scenario-sync',duration: 8, forceRender: false ,animTimingFunction:Vivus.EASE},function(){
		setTimeout(function(){

			for(var i =0;i < st0.length; i ++)
				st0[i].removeAttribute('style');
			anime();
		},10000)
	});
}
setTimeout(function(){

	anime();
},800)


// コンテンツのフェードイン
$(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});

window.onload = function() {
	scroll_effect();

	$(window).scroll(function(){
		scroll_effect();
	});

	function scroll_effect(){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight){
				$(this).addClass('scrollin');
			}
		});
	}
};


// ページ遷移時
$(function(){
  $('a[href^="#"]').click(function(){
    //スクロールのスピード
    var speed = 500;
    //リンク元を取得
    var href= $(this).attr("href");
    //リンク先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    //リンク先までの距離を取得
    var position = target.offset().top;
    //スムーススクロール
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// window.onload = function() {
//   const spinner = document.getElementById('loading');
//   spinner.classList.add('loaded');
// }




// var st0 = document.querySelectorAll('.st0');
// var anime = function(){
// 	new Vivus('svg-animation', {type: 'scenario-sync',duration: 8, forceRender: false ,animTimingFunction:Vivus.EASE},function(){
// 		setTimeout(function(){

// 			for(var i =0;i < st0.length; i ++)
// 				st0[i].removeAttribute('style');
// 			anime();
// 		},3000)
// 	});
// }
// anime();
