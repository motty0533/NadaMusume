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
  $('#work').each(function () {

    // タブの各要素を jQuery オブジェクト化
    var $tabList    = $(this).find('.tabs-nav'),   // タブのリスト
        $tabAnchors = $tabList.find('a'),          // タブ (リンク)
        $tabPanels  = $(this).find('.tabs-panel'); // パネル

    // タブがクリックされたときの処理
    // 引数としてイベントオブジェクトを受け取る
    $tabList.on('click', 'a', function (event) {

        // リンクのクリックに対するデフォルトの動作をキャンセル
        event.preventDefault();

        // クリックされたタブを jQuery オブジェクト化
        var $this = $(this);

        // もしすでに選択されたタブならなにもせず処理を中止
        if ($this.hasClass('active')) {
            return;
        }

        // すべてのタブの選択状態をいったん解除し、
        // クリックされたタブを選択状態に
        $tabAnchors.removeClass('active');
        $this.addClass('active');

        // すべてのパネルをいったん非表示にし、
        // クリックされたタブに対応するパネルを表示
        $tabPanels.hide();
        $($this.attr('href')).show();
    });
    // 最初のタブを選択状態に
    $tabAnchors.eq(0).trigger('click');
})
});
// ドラッグアンドドロップ
jQuery(function ($) {
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
        obj.$el.css("display", "none");
        let target = obj.activeDropRegions[0].children(".box-sin");
        if (!target.hasClass("dropped-sin")) {
          target.addClass("dropped-sin");
        }
        if (target.hasClass("-1")) {
          target.removeClass("-1");
        }
        target.css("display","block");
        if (obj.$el.hasClass("1-1")) {
          target.css({
            "background-image": "url(img/horse1.jpg)",
            "background-size": "50px auto",
            "background-position": "top left"
          });
          target.addClass("1");
          if (target.hasClass("2")) {
            target.removeClass("2");
            $(".1-2").css("display", "block");
          }
          if (target.hasClass("3")) {
            target.removeClass("3");
            $(".1-3").css("display", "block");
          }
          if (target.hasClass("4")) {
            target.removeClass("4");
            $(".1-4").css("display", "block");
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
            $(".1-1").css("display", "block");
          }
          if (target.hasClass("3")) {
            target.removeClass("3");
            $(".1-3").css("display", "block");
          }
          if (target.hasClass("4")) {
            target.removeClass("4");
            $(".1-4").css("display", "block");
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
            $(".1-2").css("display", "block");
          }
          if (target.hasClass("1")) {
            target.removeClass("1");
            $(".1-1").css("display", "block");
          }
          if (target.hasClass("4")) {
            target.removeClass("4");
            $(".1-4").css("display", "block");
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
            $(".1-2").css("display", "block");
          }
          if (target.hasClass("3")) {
            target.removeClass("3");
            $(".1-3").css("display", "block");
          }
          if (target.hasClass("1")) {
            target.removeClass("1");
            $(".1-1").css("display", "block");
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
        object.$el.css("display", "none");
        object.$el.css({
          "background-color": "transparent",
          "background-image": "url()",
        });
        object.$el.addClass("-1");
        if (object.$el.hasClass("1")) {
          $(".1-1").css("display", "block");
          object.$el.removeClass("1");
        }
        if (object.$el.hasClass("2")) {
          $(".1-2").css("display", "block");
          object.$el.removeClass("2");
        }
        if (object.$el.hasClass("3")) {
          $(".1-3").css("display", "block");
          object.$el.removeClass("3");
        }
        if (object.$el.hasClass("4")) {
          $(".1-4").css("display", "block");
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
        obj.$el.css("display", "none");
        let target = obj.activeDropRegions[0].children(".box-tri");
        if (!target.hasClass("dropped-tri")) {
          target.addClass("dropped-tri");
        }
        target.css("display", "block");
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
            $(".2-2").css("display", "block");
          }
          if (target.hasClass("3")) {
            target.removeClass("3");
            $(".2-3").css("display", "block");
          }
          if (target.hasClass("4")) {
            target.removeClass("4");
            $(".2-4").css("display", "block");
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
            $(".2-1").css("display", "block");
          }
          if (target.hasClass("3")) {
            target.removeClass("3");
            $(".2-3").css("display", "block");
          }
          if (target.hasClass("4")) {
            target.removeClass("4");
            $(".2-4").css("display", "block");
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
            $(".2-2").css("display", "block");
          }
          if (target.hasClass("1")) {
            target.removeClass("1");
            $(".2-1").css("display", "block");
          }
          if (target.hasClass("4")) {
            target.removeClass("4");
            $(".2-4").css("display", "block");
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
            $(".2-2").css("display", "block");
          }
          if (target.hasClass("3")) {
            target.removeClass("3");
            $(".2-3").css("display", "block");
          }
          if (target.hasClass("1")) {
            target.removeClass("1");
            $(".2-1").css("display", "block");
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
        object.$el.css("display", "none");
        object.$el.css({
          "background-color": "transparent",
          "background-image": "url()",
        });
        object.$el.addClass("-1");
        if (object.$el.hasClass("1")) {
          $(".2-1").css("display", "block");
          object.$el.removeClass("1");
        }
        if (object.$el.hasClass("2")) {
          $(".2-2").css("display", "block");
          object.$el.removeClass("2");
        }
        if (object.$el.hasClass("3")) {
          $(".2-3").css("display", "block");
          object.$el.removeClass("3");
        }
        if (object.$el.hasClass("4")) {
          $(".2-4").css("display", "block");
          object.$el.removeClass("4");
        }
      }
      else {
        let target_tri = object.activeDropRegions[0].children(".box-tri");
        let tmp = "-1";
        if (target_tri.hasClass("-1")) {
          tmp = "-1";
          target_tri.removeClass("-1");
          object.$el.css("display", "none");
          object.$el.css({
            "background-color": "transparent",
            "background-image": "url()",
          });
        }
        for (let i = 1; i <= 4; i++) {
          let j = String(i);
          if (target_tri.hasClass(j)) {
            tmp = j;
            target_tri.removeClass(j);
            object.$el.css("display", "block");
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
          target_tri.css("display", "none");
          target_tri.css({
            "background-color": "transparent",
            "background-image": "url()",
          });
        }
        for (let i = 1; i <= 4; i++) {
          let j = String(i);
          if (object.$el.hasClass(j)) {
            target_tri.addClass(j);
            object.$el.removeClass(j);
            target_tri.css("display", "block");
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
