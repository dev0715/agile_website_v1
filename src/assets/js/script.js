!function(a){"use strict";var e={init:function(){e.AffixMenu(),e.ScrollSpy(),e.SmoothScroll(),e.FitVids(),e.PlaceHolder(),e.Carousel(),e.Lightbox(),e.CounterUp(),e.Parallax(),e.ImgHover(),e.Isotope(),e.Form(),e.Animated()},AffixMenu:function(){var e='<nav id="navigation_affix">';e+='<div class="container">',e+='<div class="navbar-brand">',e+='<a href="/"><img src="images/logo.png" alt="Agiletestware" /></a>',e+="</div>",e+='<ul class="nav navbar-nav">',e+=a("#navigation .nav.navbar-nav").html(),e+="</ul>",e+="</div>",e+="</nav>",a("#header").before(e),a("#navigation").waypoint(function(){a("#navigation_affix").removeClass("show")},{offset:-120}),a("#navigation").waypoint(function(){a("#navigation_affix").addClass("show")},{offset:-121})},ScrollSpy:function(){a("body").scrollspy({target:"#navigation_affix",offset:parseInt(a("#navigation_affix").height(),0)})},SmoothScroll:function(){a("a.smooth-scroll").on("click",function(e){var t=a(this),i="",s=parseInt(a("#navigation_affix").height()-1,0);i=window.Response.band(768)?parseInt(a(t.attr("href")).offset().top-s,0):parseInt(a(t.attr("href")).offset().top,0),a("html, body").stop().animate({scrollTop:i},1500,"easeInOutExpo"),e.preventDefault()})},FitVids:function(){a("body").fitVids()},PlaceHolder:function(){a("input, textarea").placeholder()},Carousel:function(){a(".carousel-slider.gallery-slider").each(function(){a(this).slick({arrows:!1,dots:!0,slidesToShow:4,slidesToScroll:1,draggable:!1,responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2,draggable:!0}},{breakpoint:400,settings:{arrows:!0,dots:!1,slidesToShow:1,slidesToScroll:1}}]})}),a(".carousel-slider.general-slider").each(function(){a(this).slick({dots:!0,speed:300,adaptiveHeight:!0,draggable:!1,responsive:[{breakpoint:768,settings:{draggable:!0}}]})}).on("afterChange",function(){a(window).trigger("resize.px.parallax")})},Lightbox:function(){a(".fancybox").fancybox({loop:!1}),a(".fancybox-media").attr("rel","media-gallery").fancybox({openEffect:"none",closeEffect:"none",prevEffect:"none",nextEffect:"none",arrows:!1,helpers:{media:{},buttons:{}}})},CounterUp:function(){a(".affa-counter > h4 > span").counterUp({delay:10,time:3e3})},Parallax:function(){a(window).resize(function(){setTimeout(function(){a(window).trigger("resize.px.parallax")},100)}),a("#navigation .navbar-toggle").on("click",function(){setTimeout(function(){a(window).trigger("resize.px.parallax")},300)})},ImgHover:function(){a(".img-overlay").hover(function(){var e=a(this);e.find(".overlay-masked").fadeIn(300),setTimeout(function(){e.find(".overlay-masked .overlay-icon").animate({top:"50%",opacity:1},200),e.find(".overlay-masked p").fadeIn(200)},100)},function(){var e=a(this);e.find(".overlay-masked .overlay-icon").animate({top:"25%",opacity:0},200),e.find(".overlay-masked p").fadeOut(200).parents(".overlay-masked").fadeOut(300)})},Isotope:function(){var e=a(".isotope-menu"),t=a(".isotope-row");a(window).load(function(){t.isotope({filter:"*",layoutMode:"fitRows",animationOptions:{duration:400}}).on("arrangeComplete",function(){a(window).trigger("resize.px.parallax")}).on("layoutComplete",function(){a(window).trigger("resize.px.parallax")})}),e.find("a").click(function(){var i=a(this).attr("data-filter");return e.find("a").removeClass("active"),a(this).addClass("active"),t.isotope({filter:i,animationOptions:{animationDuration:400,queue:!1}}),!1})},Form:function(){var e=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;a('.affa-form-contact input[type="text"], .affa-form-contact input[type="email"], .affa-form-contact textarea').on("focus keypress",function(){var e=a(this);e.hasClass("error")&&e.removeClass("error")}),a('.affa-form-subscribe input[type="text"], .affa-form-subscribe input[type="email"]').on("focus keypress",function(){var e=a(this);e.hasClass("error")&&e.val("").removeClass("error"),e.hasClass("success")&&e.val("").removeClass("success")}),a(".affa-form-contact").submit(function(){var t=a(this),i=t.serialize(),s=t.find('input[name="name"]'),o=t.find('input[name="email"]'),r=t.find('textarea[name="message"]'),n=t.find('input[name="submit"]'),l=!0;return(""===o.val()||e.test(o.val())===!1)&&(o.addClass("error"),l=!1),""===r.val()&&(r.addClass("error"),l=!1),l&&(s.attr("disabled","disabled"),o.attr("disabled","disabled"),r.attr("disabled","disabled"),n.attr("disabled","disabled"),a.ajax({type:"POST",url:"process-contact.php",data:i+"&action=add",dataType:"html",success:function(a){if(0!==parseInt(a,0)){var e=a.split("|");"success"===e[0]?(s.val("").removeAttr("disabled").removeClass("error"),o.val("").removeAttr("disabled").removeClass("error"),r.val("").removeAttr("disabled").removeClass("error"),n.removeAttr("disabled"),t.find(".submit-status").html('<div class="submit-status-text"><span class="success"><i class="fa fa-check-circle"></i> '+e[1]+"</span></div>").fadeIn(300).delay(3e3).fadeOut(300)):(s.removeAttr("disabled").removeClass("error"),o.removeAttr("disabled").removeClass("error"),r.removeAttr("disabled").removeClass("error"),n.removeAttr("disabled").removeClass("error"),t.find(".submit-status").html('<div class="submit-status-text"><span class="error"><i class="fa fa-exclamation-circle"></i> '+e[1]+"</span></div>").fadeIn(300).delay(3e3).fadeOut(300))}}})),l=!0,!1}),a(".affa-form-subscribe").submit(function(){var t=a(this).find('input[name="email"]'),i=a(this).find('input[name="submit"]');if(e.test(t.val())===!1)t.val("Please enter a valid email address!").removeClass("success").addClass("error");else{var s=a(this).serialize();t.attr("disabled","disabled"),i.attr("disabled","disabled"),a.ajax({type:"POST",url:"process-subscribe.php",data:s+"&action=add",dataType:"html",success:function(a){if(0!==parseInt(a,0)){var e=a.split("|");"success"===e[0]?(i.removeAttr("disabled"),t.removeAttr("disabled").val(e[1]).removeClass("error").addClass("success")):(i.removeAttr("disabled"),t.removeAttr("disabled").val(e[1]).removeClass("success").addClass("error"))}}})}return!1})},Animated:function(){a(window).on("load",function(){a("img.parallax-slider").imgpreload({all:function(){a("img.parallax-slider").addClass("loaded")}}),a(".animation, .animation-visible").each(function(){var e=a(this);e.waypoint(function(){var a=0;e.attr("data-delay")&&(a=parseInt(e.attr("data-delay"),0)),e.hasClass("animated")||setTimeout(function(){e.addClass("animated "+e.attr("data-animation"))},a),a=0},{offset:"90%"})})})}};a(function(){e.init()})}(window.jQuery);