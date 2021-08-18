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

