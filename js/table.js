/**
 * 行追加
 */
function insertRow(id) {
    // テーブル取得
    var table = document.getElementById(id);
    // 行を行末に追加
    var row = table.insertRow(-1);
    // セルの挿入
    var cell1 = row.insertCell(-1);
    var cell2 = row.insertCell(-1);
    var cell3 = row.insertCell(-1);
    var cell4 = row.insertCell(-1);

    // 行数取得
    var row_len = table.rows.length;

    // セルの内容入力
    cell1.innerHTML = row_len + "-" + 1;
    cell2.innerHTML = row_len + "-" + 2;
    cell3.innerHTML = row_len + "-" + 3;
    cell4.innerHTML = row_len + "-" + 4;
}

/**
 * 行削除
 */
function deleteRow(obj) {
    // 削除ボタンを押下された行を取得
    tr = obj.parentNode.parentNode;
    // trのインデックスを取得して行を削除する
    tr.parentNode.deleteRow(tr.sectionRowIndex);
}

/**
 * 列追加
 */
function insertColumn(id) {
    // テーブル取得
    var table = document.getElementById(id);
    // 行数取得
    var rows = table.rows.length;

    // 各行末尾にセルを追加
    for ( var i = 0; i < rows; i++) {
        var cell = table.rows[i].insertCell(-1);
        var cols = table.rows[i].cells.length;

        cell.innerHTML = (i + 1) + '-' + (cols - 1);
    }
}

/**
 * 列削除
 */
function deleteColumn(id) {
    // テーブル取得
    var table = document.getElementById(id);
    // 行数取得
    var rows = table.rows.length;

    // 各行末のセルを削除
    for ( var i = 0; i < rows; i++) {
        var cols = table.rows[i].cells.length;

        table.rows[i].deleteCell(-1);
    }
}
