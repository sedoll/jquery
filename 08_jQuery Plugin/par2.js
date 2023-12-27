(function( $ ){ 
    $.fn.extend({
	par : function (options) {
        //사용법 : $(window).par();
        var sc_pg = parseInt($(window).height());
        $(window).on('mousewheel', function (e) {
            if (e.originalEvent.wheelDelta < 0) {
                $('html, body').not(":animated").animate({
                    scrollTop: '+=' + sc_pg + 'px'
                }, 800);
            } else {
                $('html, body').not(":animated").animate({
                    scrollTop: '-=' + sc_pg + 'px'
                }, 800);
            }
            return false;
        });
	},
	menu : function (options2) {
        //사용법 : $(이벤트리스너).menu({tar : "타켓"});
        var tar = options2.tar;
        var spd = options2.spd;
        //메뉴 애니메이션
        $(this).mouseenter(function () {
            $(this).find(tar).not(":animated").stop().slideDown(spd);
        });
        $(this).mouseleave(function () {
            $(this).find(tar).css("display", "none");
        }); 
    } ,
	slider : function (options3) {
        var wd = parseInt($(window).width());
        var tar1 = options3.tar1;
        var tar2 = options3.tar2;
        var spd2 = options3.spd2;
        if(!spd2 || spd2 == "") {
            spd2 = 800;   //기본값 설정
        }
        function rAni() {
            $(tar1).not(":animated").animate({
                "margin-left": -wd + "px"
            }, spd2, function () {
                $(tar2).eq(0).appendTo($(tar1));
                $(tar1).css("margin-left", "0px");
            });
        };
        var itv = setInterval(function () { rAni(); }, 3000);
	} 

    });
//event.preventDefault();
}) (jQuery);