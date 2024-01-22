$(function() {
    $(".select-box").on("change", function() {
//セレクトボックス内のどれか一つの項目(選択肢）をクリックするとイベントを実行
    const a =$(this).val(),b=$(".food-list li");
//セレクトボックス内の項目(選択肢）の中のすべての値を取得
    "all" === a ? b.show() :
//「全て」の項目は、各項目の中の全ての値と等しいので、「全て」がクリックされれば、すべての値が表示されるが、
//「全て」の項目以外の別の項目がクリックされた場合は、
    $.each(b, function(index,c) {
//各食べ物(値)に繰り返し処理し、クリックされた項目と共通する値だけを抽出して表示
    const d = $(c).data("category-type");
//各食べ物(値)をすべて取得
    a === d ? $(c).show() : $(c).hide()
//「全て」の項目は、各項目の中の全ての値と各食べ物(値)とも等しいので、「全て」がクリックされれば、すべての値が表示されるが、
//「全て」の項目以外の別の項目がクリックされた場合は、すべて表示されていた値は非表示になる
    });
    });
});