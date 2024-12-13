$(function () {
  $("nav#gnb ul li a,#sitemap ul li a,.go-to-top a").click(function () {
    // console.log($(this.hash).offset().top);
    var thisElem = $(this.hash);
    $("html,body").stop();
    $("html,body").animate({ scrollTop: thisElem.offset().top }, 1500);
  });

  $(window).scroll(function () {
    // if(조건식){실행문}
    /*배가 고프다 ? 먹는다 : 먹지않는다; 삼항조건식*/
    // console.log($(this).scrollTop());
    $(this).scrollTop() > 0
      ? $(".go-to-top").addClass("on")
      : $(".go-to-top").removeClass("on");
  });

  var wHeight = $(window).height();
  $(window).scroll(function () {
    var thisScrollTop = $(this).scrollTop();
    $("section").each(function () {
      var thisOffset = $(this).offset();
      if (
        thisOffset.top <= thisScrollTop + 150 &&
        thisScrollTop < thisOffset.top + wHeight
      ) {
        $(this).addClass("active");
      }
    });
  });
});
