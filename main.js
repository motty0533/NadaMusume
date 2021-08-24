// 残りポイント表示
$(function(){
  
  var single_point = 0;
  var triple_point = 0;
  var remaining_point = 100;
  $('.singleform').on('input',function(){
    single_point = $('.singleform').val();
    remaining_point = 100 - single_point - triple_point;
    if(remaining_point<0){
      remaining_point = 0;
    }
    $('.button1 span').text("残り"+remaining_point+"pt");
  })
  $('.tripleform').on('input',function(){
    triple_point = $('.tripleform').val();
    remaining_point = 100 - single_point - triple_point;
    if(remaining_point<0){
      remaining_point = 0;
    }
    $('.button1 span').text("残り"+remaining_point+"pt");
  })
  $('#form1').submit(function(){
    single_point = $('.singleform').val();
    triple_point = $('.tripleform').val();
    if(Number(single_point)+Number(triple_point)>100){
      alert('合計で100pt以下になるようにしてください！');
      return false;
    }
    if(Number(single_point)+Number(triple_point)==0){
      alert('ポイントを入力してください！')
    }
  });
  // タブ機能
    // タブの各要素を jQuery オブジェクト化
    var border = $("#border div");
    $('#work').tabs({
      hide:{duration:250},
      show:{duration:125},
    });
    $('.uitab').on('click',function(){
      $('.uitab').removeClass('active');
      $(this).addClass('active');
    });
    $("#work").bind('tabsactivate', function(event, ui) {
      // クリックされたタブのインデックス
      // インデックスは 0 から始まるので + 1
      var selected = ui.newTab.index() + 1;
      console.log(selected);
      if(selected==1){
        (border).animate({left:'0%'},10,'linear');
      }else if(selected==2){
        (border).animate({left:'50%'},10,'linear');
      }else{
        console.log("error");
      }
    });

    //下スクロール中はボタンを消す機構
    var startPos = 0,winScrollTop = 0;
    $(window).on('scroll',function(){
      winScrollTop = $(this).scrollTop();
      if(winScrollTop>startPos){
        $('.button1').addClass('hide');
      } else {
        $('.button1').removeClass('hide');
      }
      startPos = winScrollTop;
    });
    //モーダルウィンドウ
    var winScrollTop;
    $('.js-modal-open').each(function(){
        $(this).on('click',function(){
            //スクロール位置を取得
            winScrollTop = $(window).scrollTop();
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $(modal).fadeIn();
            return false;
        });
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        $('body,html').stop().animate({scrollTop:winScrollTop}, 100);
        return false;
    });
    
    // トップページであと何日かを取得
    var today = new Date();
    var festival = new Date("2021/9/26")
    var countdown = Math.ceil((festival.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    if(countdown>=0){
      $('.remaindays span').text(+countdown+"日");
    } else{
      $('.remaindays').text("2021年度体育祭は終了いたしました。")
    }    
    //トップページのマーカーのアニメーション
    $('.remaindays').markerAnimation()
  });

// ドラッグアンドドロップ
jQuery(function ($) {
  var num=4;
  $('.horse-sin').pep({
    shouldEase: false,
    place: false,
    droppable: '.vote-sin',        // dropを許可する要素
    revert: true,
    start: function (ev, obj) {

    },
    drag: function (ev, obj) {
      obj.$el.css("z-index", "31");
    },
    stop: function (ev, obj) {
      obj.$el.css("z-index", "auto");
      if (obj.activeDropRegions.length > 0) {
        obj.$el.css("visibility", "hidden");
        let target = obj.activeDropRegions[0].children(".box-sin");
        if (!target.hasClass("dropped-sin")) {
          target.addClass("dropped-sin");
        }
        if (target.hasClass("-1")) {
          target.removeClass("-1");
        }
        target.css("visibility","visible");
        if (obj.$el.hasClass("1-1")) {
          target.css({
            "background-image": "url(img/horse1.jpg)",
            "background-size": "50px auto",
            "background-position": "top left"
          });
          target.addClass("1");
          if (target.hasClass("2")) {
            target.removeClass("2");
            $(".1-2").css("visibility", "visible");
          }
          if (target.hasClass("3")) {
            target.removeClass("3");
            $(".1-3").css("visibility", "visible");
          }
          if (target.hasClass("4")) {
            target.removeClass("4");
            $(".1-4").css("visibility", "visible");
          }
        }
        if (obj.$el.hasClass("1-2")) {
          target.css({
            "background-image": "url(img/horse2.jpg)",
            "background-size": "50px auto",
            "background-position": "top left"
          });
          target.addClass("2");
          if (target.hasClass("1")) {
            target.removeClass("1");
            $(".1-1").css("visibility", "visible");
          }
          if (target.hasClass("3")) {
            target.removeClass("3");
            $(".1-3").css("visibility", "visible");
          }
          if (target.hasClass("4")) {
            target.removeClass("4");
            $(".1-4").css("visibility", "visible");
          }
        }
        if (obj.$el.hasClass("1-3")) {
          target.css({
            "background-image": "url(img/horse3.jpg)",
            "background-size": "50px auto",
            "background-position": "top left"
          });
          target.addClass("3");
          if (target.hasClass("2")) {
            target.removeClass("2");
            $(".1-2").css("visibility", "visible");
          }
          if (target.hasClass("1")) {
            target.removeClass("1");
            $(".1-1").css("visibility", "visible");
          }
          if (target.hasClass("4")) {
            target.removeClass("4");
            $(".1-4").css("visibility", "visible");
          }
        }
        if (obj.$el.hasClass("1-4")) {
          target.css({
            "background-image": "url(img/horse4.jpg)",
            "background-size": "50px auto",
            "background-position": "top left"
          });
          target.addClass("4");
          if (target.hasClass("2")) {
            target.removeClass("2");
            $(".1-2").css("visibility", "visible");
          }
          if (target.hasClass("3")) {
            target.removeClass("3");
            $(".1-3").css("visibility", "visible");
          }
          if (target.hasClass("1")) {
            target.removeClass("1");
            $(".1-1").css("visibility", "visible");
          }
        }
      }
    }
  });
  $('.box-sin').pep({
    shouldEase: false,
    place: false,
    droppable: '.vote-sin',        // dropを許可する要素
    revert: true,
    start: function (event, object) {

    },
    drag: function (event, object) {

    },
    stop: function (event, object) {
      if (object.activeDropRegions.length == 0) {
        object.$el.removeClass("dropped-sin");
        object.$el.css("visibility", "hidden");
        object.$el.css({
          "background-color": "transparent",
          "background-image": "url()",
        });
        object.$el.addClass("-1");
        if (object.$el.hasClass("1")) {
          $(".1-1").css("visibility", "visible");
          object.$el.removeClass("1");
        }
        if (object.$el.hasClass("2")) {
          $(".1-2").css("visibility", "visible");
          object.$el.removeClass("2");
        }
        if (object.$el.hasClass("3")) {
          $(".1-3").css("visibility", "visible");
          object.$el.removeClass("3");
        }
        if (object.$el.hasClass("4")) {
          $(".1-4").css("visibility", "visible");
          object.$el.removeClass("4");
        }
      }
    }
  });
  $('.horse-tri').pep({
    shouldEase: false,
    place: false,
    droppable: '.vote-tri',        // dropを許可する要素
    revert: true,
    start: function (ev, obj) {

    },
    drag: function (ev, obj) {
      obj.$el.css("z-index", "30");
    },
    stop: function (ev, obj) {
      obj.$el.css("z-index", "auto");
      if (obj.activeDropRegions.length > 0) {
        obj.$el.css("visibility", "hidden");
        let target = obj.activeDropRegions[0].children(".box-tri");
        if (!target.hasClass("dropped-tri")) {
          target.addClass("dropped-tri");
        }
        target.css("visibility", "visible");
        if(target.hasClass("-1")){
          target.removeClass("-1");
        }
        if (obj.$el.hasClass("2-1")) {
          target.css({
            "background-image": "url(img/horse1.jpg)",
            "background-size": "50px auto",
            "background-position": "top left"
          });
          target.addClass("1");
          if (target.hasClass("2")) {
            target.removeClass("2");
            $(".2-2").css("visibility", "visible");
          }
          if (target.hasClass("3")) {
            target.removeClass("3");
            $(".2-3").css("visibility", "visible");
          }
          if (target.hasClass("4")) {
            target.removeClass("4");
            $(".2-4").css("visibility", "visible");
          }
        }
        if (obj.$el.hasClass("2-2")) {
          target.css({
            "background-image": "url(img/horse2.jpg)",
            "background-size": "50px auto",
            "background-position": "top left"
          });
          target.addClass("2");
          if (target.hasClass("1")) {
            target.removeClass("1");
            $(".2-1").css("visibility", "visible");
          }
          if (target.hasClass("3")) {
            target.removeClass("3");
            $(".2-3").css("visibility", "visible");
          }
          if (target.hasClass("4")) {
            target.removeClass("4");
            $(".2-4").css("visibility", "visible");
          }
        }
        if (obj.$el.hasClass("2-3")) {
          target.css({
            "background-image": "url(img/horse3.jpg)",
            "background-size": "50px auto",
            "background-position": "top left"
          });
          target.addClass("3");
          if (target.hasClass("2")) {
            target.removeClass("2");
            $(".2-2").css("visibility", "visible");
          }
          if (target.hasClass("1")) {
            target.removeClass("1");
            $(".2-1").css("visibility", "visible");
          }
          if (target.hasClass("4")) {
            target.removeClass("4");
            $(".2-4").css("visibility", "visible");
          }
        }
        if (obj.$el.hasClass("2-4")) {
          target.css({
            "background-image": "url(img/horse4.jpg)",
            "background-size": "50px auto",
            "background-position": "top left"
          });
          target.addClass("4");
          if (target.hasClass("2")) {
            target.removeClass("2");
            $(".2-2").css("visibility", "visible");
          }
          if (target.hasClass("3")) {
            target.removeClass("3");
            $(".2-3").css("visibility", "visible");
          }
          if (target.hasClass("1")) {
            target.removeClass("1");
            $(".2-1").css("visibility", "visible");
          }
        }
      }
    }
  });
  $('.box-tri').pep({
    shouldEase: false,
    place: false,
    droppable: '.vote-tri',        // dropを許可する要素
    revert: true,
    start: function (event, object) {

    },
    drag: function (event, object) {
      object.$el.css("z-index", "31");
    },
    stop: function (event, object) {
      object.$el.css("z-index", "30");
      if (object.activeDropRegions.length == 0) {
        object.$el.removeClass("dropped-sin");
        object.$el.css("visibility", "hidden");
        object.$el.css({
          "background-color": "transparent",
          "background-image": "url()",
        });
        object.$el.addClass("-1");
        for(let i=1;i<=num;i++){
          let j=String(i);
          if (object.$el.hasClass(j)) {
            $(".2-"+j).css("visibility", "visible");
            object.$el.removeClass(j);
          }
        }
      }
      else {
        let target_tri = object.activeDropRegions[0].children(".box-tri");
        let tmp = "-1";
        if (target_tri.hasClass("-1")) {
          tmp = "-1";
          target_tri.removeClass("-1");
          object.$el.css("visibility", "hidden");
          object.$el.css({
            "background-color": "transparent",
            "background-image": "url()",
          });
        }
        for (let i = 1; i <= num; i++) {
          let j = String(i);
          if (target_tri.hasClass(j)) {
            tmp = j;
            target_tri.removeClass(j);
            object.$el.css("visibility", "visible");
            object.$el.css({
              "background-image": "url(img/horse" + j + ".jpg)",
              "background-size": "50px auto",
              "background-position": "top left"
            });
          }
        }
        if (object.$el.hasClass("-1")) {
          target_tri.addClass("-1");
          object.$el.removeClass("-1");
          target_tri.css("visibility", "hidden");
          target_tri.css({
            "background-color": "transparent",
            "background-image": "url()",
          });
        }
        for (let i = 1; i <= num; i++) {
          let j = String(i);
          if (object.$el.hasClass(j)) {
            target_tri.addClass(j);
            object.$el.removeClass(j);
            target_tri.css("visibility", "visible");
            target_tri.css({
              "background-image": "url(img/horse" + j + ".jpg)",
              "background-size": "50px auto",
              "background-position": "top left"
            });
          }
        }
        object.$el.addClass(tmp);
      }
    }
  });
});
