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
      obj.$el.css("z-index", "30");
    },
    stop: function (ev, obj) {
      obj.$el.css("z-index", "auto");
      if (obj.activeDropRegions.length > 0) {
        obj.$el.css("display", "none");
        var target = obj.activeDropRegions[0].children(".box-sin");
        if (!target.hasClass("dropped-sin")) {
          target.addClass("dropped-sin");
          $(target).pep({
            shouldEase: false,
            place: false,
            droppable: '.box',        // dropを許可する要素
            revert: true,
            start: function (event, object) {
              $('#sin-first').css("display", "inline");
            },
            drag: function (event, object) {
              object.$el.css("z-index", "30");
            },
            stop: function (event, object) {
              object.$el.css("z-index", "auto");
              if (object.activeDropRegions.length == 0) {
                object.$el.removeClass("dropped-sin");
                object.$el.css({
                  "background-color": "transparent",
                  "background-image": "url()",
                });
                if (object.$el.hasClass("1")) {
                  $(".first1").css("display", "block");
                }
                if (object.$el.hasClass("2")) {
                  $(".second1").css("display", "block");
                }
                if (object.$el.hasClass("3")) {
                  $(".third1").css("display", "block");
                }
                if (object.$el.hasClass("4")) {
                  $(".fourth1").css("display", "block");
                }
              }
              else{
                $('#sin-first').css("display", "none");
              }
            }
          });
        }
        $("#sin-first").css("display", "none");
        if (obj.$el.hasClass("first1")) {
          target.css({
            "background-image": "url(img/horse1.jpg)",
            "background-size": "50px auto",
            "background-position": "top left"
          });
          target.addClass("1");
          if (target.hasClass("2")) {
            target.removeClass("2");
            $(".second1").css("display", "block");
          }
          if (target.hasClass("3")) {
            target.removeClass("3");
            $(".third1").css("display", "block");
          }
          if (target.hasClass("4")) {
            target.removeClass("4");
            $(".fourth1").css("display", "block");
          }
        }
        if (obj.$el.hasClass("second1")) {
          target.css({
            "background-image": "url(img/horse2.jpg)",
            "background-size": "50px auto",
            "background-position": "top left"
          });
          target.addClass("2");
          if (target.hasClass("1")) {
            target.removeClass("1");
            $(".first1").css("display", "block");
          }
          if (target.hasClass("3")) {
            target.removeClass("3");
            $(".third1").css("display", "block");
          }
          if (target.hasClass("4")) {
            target.removeClass("4");
            $(".fourth1").css("display", "block");
          }
        }
        if (obj.$el.hasClass("third1")) {
          target.css({
            "background-image": "url(img/horse3.jpg)",
            "background-size": "50px auto",
            "background-position": "top left"
          });
          target.addClass("3");
          if (target.hasClass("2")) {
            target.removeClass("2");
            $(".second1").css("display", "block");
          }
          if (target.hasClass("1")) {
            target.removeClass("1");
            $(".first1").css("display", "block");
          }
          if (target.hasClass("4")) {
            target.removeClass("4");
            $(".fourth1").css("display", "block");
          }
        }
        if (obj.$el.hasClass("fourth1")) {
          target.css({
            "background-image": "url(img/horse4.jpg)",
            "background-size": "50px auto",
            "background-position": "top left"
          });
          target.addClass("4");
          if (target.hasClass("2")) {
            target.removeClass("2");
            $(".second1").css("display", "block");
          }
          if (target.hasClass("3")) {
            target.removeClass("3");
            $(".third1").css("display", "block");
          }
          if (target.hasClass("1")) {
            target.removeClass("1");
            $(".first1").css("display", "block");
          }
        }
      }
    }
  });
  $('.horse-tri').pep({
    shouldEase: false,
    place: false,
    droppable: '.box-tri',        // dropを許可する要素
    revert: true,
    start: function (ev, obj) {

    },
    drag: function (ev, obj) {

    },
    stop: function (ev, obj) {
    }
  });
  /*$('.horse-sin').on('MSPointerDown touchstart mousedown', function (e) {
    $(this).pep({
      shouldEase: false,
      place: false,
      droppable: '.vote-sin',        // dropを許可する要素
      revert: true,
      start: function (ev, obj) {

      },
      drag: function (ev, obj) {
        obj.$el.css("z-index","30");
      },
      stop: function (ev, obj) {
        obj.$el.css("z-index", "auto");
        if (obj.activeDropRegions.length > 0) {
          obj.$el.css("display", "none");
          var target = obj.activeDropRegions[0].children(".box-sin");
          if (!target.hasClass("dropped-sin")) {
            target.addClass("dropped-sin");
          }
          $("#sin-first").css("display", "none");
          if (obj.$el.hasClass("first1")) {
            target.css({
              "background-image": "url(img/horse1.jpg)",
              "background-size": "50px auto",
              "background-position": "top left"
            });
            target.addClass("1");
            if (target.hasClass("2")) {
              target.removeClass("2");
              $(".second1").css("display", "block");
            }
            if (target.hasClass("3")) {
              target.removeClass("3");
              $(".third1").css("display", "block");
            }
            if (target.hasClass("4")) {
              target.removeClass("4");
              $(".fourth1").css("display", "block");
            }
          }
          if (obj.$el.hasClass("second1")) {
            target.css({
              "background-image": "url(img/horse2.jpg)",
              "background-size": "50px auto",
              "background-position": "top left"
            });
            target.addClass("2");
            if (target.hasClass("1")) {
              target.removeClass("1");
              $(".first1").css("display", "block");
            }
            if (target.hasClass("3")) {
              target.removeClass("3");
              $(".third1").css("display", "block");
            }
            if (target.hasClass("4")) {
              target.removeClass("4");
              $(".fourth1").css("display", "block");
            }
          }
          if (obj.$el.hasClass("third1")) {
            target.css({
              "background-image": "url(img/horse3.jpg)",
              "background-size": "50px auto",
              "background-position": "top left"
            });
            target.addClass("3");
            if (target.hasClass("2")) {
              target.removeClass("2");
              $(".second1").css("display", "block");
            }
            if (target.hasClass("1")) {
              target.removeClass("1");
              $(".first1").css("display", "block");
            }
            if (target.hasClass("4")) {
              target.removeClass("4");
              $(".fourth1").css("display", "block");
            }
          }
          if (obj.$el.hasClass("fourth1")) {
            target.css({
              "background-image": "url(img/horse4.jpg)",
              "background-size": "50px auto",
              "background-position": "top left"
            });
            target.addClass("4");
            if (target.hasClass("2")) {
              target.removeClass("2");
              $(".second1").css("display", "block");
            }
            if (target.hasClass("3")) {
              target.removeClass("3");
              $(".third1").css("display", "block");
            }
            if (target.hasClass("1")) {
              target.removeClass("1");
              $(".first1").css("display", "block");
            }
          }
        }
      }
    });
  });
  $('.horse-tri').on('MSPointerDown touchstart mousedown', function (e) {
    $(this).pep({
      shouldEase: false,
      place: false,
      droppable: '.box-tri',        // dropを許可する要素
      revert: true,
      start: function (ev, obj) {

      },
      drag: function (ev, obj) {

      },
      stop: function (ev, obj) {
      }
    });
  });
  $('document').on('MSPointerDown touchstart mousedown', '.dropped-sin' ,function (e) {
      $(this).pep({
        shouldEase: false,
        place: false,
        droppable: '.single .box',        // dropを許可する要素
        revert: true,
        start: function (ev, obj) {

        },
        drag: function (ev, obj) {

        },
        stop: function (ev, obj) {
          if (obj.activeDropRegions.length > 0) {
            if (obj.activeDropRegions[0].hasClass("single")) {
              obj.$el.removeClass("dropped-sin");
              obj.$el.css("background-color", transparent);
              $('#sin-first').css("display", "inline");
              if (obj.$el.hasClass("1")) {
                $(".first1").css("display", "block");
              }
              if (obj.$el.hasClass("2")) {
                $(".second1").css("display", "block");
              }
              if (obj.$el.hasClass("3")) {
                $(".third1").css("display", "block");
              }
              if (obj.$el.hasClass("4")) {
                $(".fourth1").css("display", "block");
              }
            }
          }
        }
      });
    });*/
});
