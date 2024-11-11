$(document).ready(function() {

    var currentPage = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1).replace(".html", ""); //isolate page name
    $("#"+currentPage+"_button").css("background-color","#584242");

    console.log($(window).height());
    console.log($(window).scrollTop());

    function elementIsVisible(elem){
        var scrollPos = $(this).scrollTop();
        var scrollPosBottom = scrollPos+$(this).height();

        var elemTopPos = $(elem).offset().top;
        
        return (elemTopPos<=(scrollPosBottom+($(elem).height()/8)));

    }

    if($(".box-large").length){ //make sure element exist ons the current page (no elemnt means length=0=false)
        if(elementIsVisible($(".box-large"))){
            $(".box-large").css({animation:"slideup 0.5s linear 0.3s 1 normal both"});
        }
        if(elementIsVisible($(".box-small"))){
            $(".box-small").css({animation:"slideup 0.5s linear 0.3s 1 normal both"});
        }
    }

    if($(".banner").length){
        $(".banner").each(function(){
            if(elementIsVisible($(this))){
                console.log($(this).hasClass("right"));
                if($(this).hasClass("right")){
                    $(this).css({animation:"slideLeft 1s ease 0.3s 1 normal both"});
                } else{
                    $(this).css({animation:"slideRight 1s ease 0.3s 1 normal both"});
                }
            }
        })
    }

    if($(".services-container").length){
        $(".services-container").each(function(){
            var item = $(this).find(".service-item-container");
            item.each(function(){
                var itemPrev = $(this).find(".item-preview");
                var itemMod = $(this).find(".item-modal");
                itemPrev.click(function(){
                    console.log("item clicked");
                    itemMod.css({display:"initial"});
                })
            })
        })
        $(".close-button").click(function(){
            console.log("item clicked");
            $(".item-modal").css({display:"none"});
        })
    }

    if($(".gallery").length){
        $("[src='"+$(".gallery-main-image>img").attr("src")+"']").css({border:"5px solid #815a5a"});
        $(".gallery-main-image>img").css({border:0});
        $(".img-caption > p").text($("[src='"+$(".gallery-main-image>img").attr("src")+"']").attr("data-caption"));

        $(".scroll-button").click(function(){
            var scrollPos = $(".gallery-thumbnails").scrollLeft();
            console.log(scrollPos);
            if($(this).hasClass("left")){
                console.log("left button clicked");
                $(".gallery-thumbnails").scrollLeft(scrollPos - 300);
            }else{
                console.log("right button clicked");
                $(".gallery-thumbnails").scrollLeft(scrollPos + 300);
            }
        })

        $(".gallery-thumbnails > img").click(function(){
            var currentSrc = $(this).attr("src");
            var prvSrc = $(".gallery-main-image>img").attr("src");
            var caption = $(this).attr("data-caption");
            console.log(prvSrc);

            $("[src='"+prvSrc+"']").css({border:0});//remove broder from prev pic
            $(this).css({border:"5px solid #815a5a"});
            $(".gallery-main-image>img").attr("src",currentSrc);
            console.log($(this).attr("src"));
            $(".img-caption > p").text(caption);
        })
        
    }

    if($(".reviews-container").length){
        $(".review").each(function(){
            if(elementIsVisible($(this))){
                $(this).css({animation:"slideup 0.5s ease 0.3s 1 normal both"});
            }
        })
    }
    

    $(window).on("scroll", function(){

        if($(".content-box").length){
            //debugging for distance checkinh
            /*
            console.log(elementIsVisible($(".content-box")));
            console.log("height:"+$(this).height());
            console.log("width:"+$(this).outerWidth());
            console.log((($(this).outerWidth()*2)/$(this).height()));
            var scrollPos = $(this).scrollTop();
            var scrollPosBottom = scrollPos+$(this).height();
            
            var elemTopPos = $(".content-box").offset().top;
            console.log(scrollPosBottom-elemTopPos); //distance from top of container to bottom of view port
            var buttonHeight = $(".content-box").height();
            console.log(buttonHeight);
            */
            if(elementIsVisible($(".box-large"))){
                $(".box-large").css({animation:"slideup 0.5s ease 0.3s 1 normal both"});
            }
            if(elementIsVisible($(".box-small"))){
                $(".box-small").css({animation:"slideup 0.5s ease 0.3s 1 normal both"});
            }
        }
        
        if($(".banner").length){
            $(".banner").each(function(){
                if(elementIsVisible($(this))){
                    console.log($(this).hasClass("right"));
                    if($(this).hasClass("right")){
                        $(this).css({animation:"slideLeft 1s ease 0.3s 1 normal both"});
                    } else{
                        $(this).css({animation:"slideRight 1s ease 0.3s 1 normal both"});
                    }
                }
            })
        }

        if($(".reviews-container").length){
            $(".review").each(function(){
                if(elementIsVisible($(this))){
                    $(this).css({animation:"slideup 0.5s ease 0.3s 1 normal both"});
                }
            })
        }
    })

 
 });