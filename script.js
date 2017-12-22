(function($) {
    "use strict";

    function previewLeftImage(){
        var getLeftImage = $(".swiper-slide-prev").html();
        if ($(".swiper-slide-prev")[0]){
            $(".swiper-button-prev").after("<div class='left-prev'>" + getLeftImage + "</div>");
        }
    }

    function previewRightImage(){
        var getRightImage = $(".swiper-slide-next").html();
        if ($(".swiper-slide-next")[0]){
            $(".swiper-button-next").after("<div class='right-prev'>" + getRightImage + "</div>")
        }
    }

    $(window).on('load',function(){
        previewRightImage();
        $(".swiper-button-next").on('click',function(){
            $(".right-prev").remove();
            $(".left-prev").remove();
            setTimeout(function(){
                previewRightImage();
                previewLeftImage();
            });
        });
        $(".swiper-button-prev").on('click',function(){
            $(".right-prev").remove();
            $(".left-prev").remove();
            setTimeout(function(){ 
                previewRightImage();
                previewLeftImage();
            });
        });
    });

    $(document).ready(function(){
        $(".collection-button").on("click",function(){
            $(this).addClass("page-active");
            $(".home-button").removeClass("page-active");
            $(".about-button").removeClass("page-active");
            var homeLeft = $(".home-page").css('margin-left');
            var homeLeftInt = parseInt(homeLeft, 10);
            if ( homeLeftInt == 0 ){
                $(".home-page").css( 'margin-top', '-100vh');
                $(".header-wrapper").css('bottom', 'calc( 100vh - 58px)');
            }else{
                $(".about-page").css('right', '-100vw');
                $(".home-page").css('margin-left',0);
                setTimeout(function(){ 
                    $(".home-page").css('margin-top', '-100vh');
                    $(".header-wrapper").css('bottom', 'calc( 100vh - 58px)');
                },500);
            }
        });
        $(".home-button").on("click",function(){
            $(this).addClass("page-active");
            $(".collection-button").removeClass("page-active");
            $(".about-button").removeClass("page-active");
            var aboutRight = $(".about-page").css('right');
            var aboutRightInt = parseInt(aboutRight, 10);
            if( aboutRightInt != 0 ){
                $(".home-page").css( 'margin-top', 0 );
                $(".header-wrapper").css( 'bottom', 0 );
            }else{
                $(".about-page").css('right', '-100vw');
                $(".home-page").css('margin-left', 0);
            }
        });
        $(".about-button").on("click",function(){
            $(this).addClass("page-active");
            $(".home-button").removeClass("page-active");
            $(".collection-button").removeClass("page-active");
            var homeTop = $(".home-page").css("margin-top");
            var homeTopInt = parseInt( homeTop, 10 );
            if ( homeTopInt < 0){
                $(".home-page").css( 'margin-top', 0 );
                $(".header-wrapper").css( 'bottom', 0 );
                setTimeout(function(){ 
                    $(".home-page").css('margin-left', '-100vw');
                    $(".about-page").css('right', 0);
                },500);
            }else{
                $(".home-page").css('margin-left', '-100vw');
                $(".about-page").css('right', 0);
            }
        });
       
        var elementnb = $('.image-holder').length;
        var colonnb = elementnb/4;
        var wholenb = Math.floor(colonnb);
        var remainder = elementnb % 4;

        if( remainder == 0 ){
            var maxMargin = (wholenb - 1) * -467;
        }else{
            var maxMargin = wholenb * -467;
        }

        var numOfHoverU  = 1;
        var numOfHoverD = 1;


        
        $(".arrow-up").mouseenter(function(){
            var currentlyMargin = $(".collectio-page-wrapper").css('margin-top');
            var currentlyMarginInt = parseInt(currentlyMargin, 10);
            if( currentlyMarginInt > maxMargin ){
                var marginTopUp = currentlyMarginInt - 525;
                $(".collectio-page-wrapper").css('margin-top', marginTopUp);
                numOfHoverU++;
            }
        });

        $(".arrow-down").mouseenter(function(){
            var currentlyMargin = $(".collectio-page-wrapper").css('margin-top');
            var currentlyMarginInt = parseInt(currentlyMargin, 10);
            if( currentlyMarginInt < 0 ){
                var marginTopD = currentlyMarginInt + 525;
                $(".collectio-page-wrapper").css('margin-top', marginTopD);
                numOfHoverD++;
            }
        });

    });//  $(document).ready(function(){

    

    $(window).resize(function(){
        location.reload();
      })
})(jQuery);