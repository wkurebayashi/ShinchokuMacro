// シートを開いた際に実行される処理
function onOpen(event)
{
  var menuitems = [
    {name:'進捗をグラフ化', functionName:'visualize'}
  ];
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  sheet.addMenu('進捗マクロ', menuitems); // スプレッドシートのメニューにこのマクロを追加
}

// 可視化
function visualize()
{
  var category = ['🐱','🐶','🐧','🐰','🐤','🐹']; // バー表示に使う文字の配列

  var book = SpreadsheetApp.getActiveSpreadsheet();
  var sheet_rec = book.getSheetByName("Record"); // Recordシートを開く
  var data = sheet_rec.getDataRange().getValues(); // Recordシートの内容を配列dataに
  var cost = {};



  // Recordシートの内容を読み込んで連想配列costに記録
  for(var i = 1; i < data.length; i++)
  {
    // シートの最後
    if(data[i][1] == "" || data[i][2] == "") break;

    // シートの内容を読み込み
    var key = data[i][0].toString(); // 日付
    var cat = parseInt(data[i][1]);  // カテゴリ
    var cos = parseInt(data[i][2]);  // コスト

    // 新しい日付の場合: 連想配列の初期化
    if(typeof cost[key] === "undefined")
    {
      cost[key] = {};
      for(var j = 0; j < category.length; j++) cost[key][j] = 0;
    }

    // コストの値を連想配列に加算
    cost[key][cat-1] += cos;
  }

  // Graphシートに集計結果をバーで表示
  var sheet_gra = book.getSheetByName("Graph"); // Graphシートを開く
  var keyset = Object.keys(cost); // 連想配列costのキーを取得
  for(var i = 0; i < keyset.length; i++)
  {
    // バー文字列の作成
    var str = "";
    for(var j = 0; j < category.length; j++)
    {
      for(var k = 0; k < cost[keyset[i]][j]; k++) str = str + category[j];
    }

    // Graphシートへの書き込み
    sheet_gra.getRange(keyset.length-i+1, 1).setValue(new Date(keyset[i]));
    sheet_gra.getRange(keyset.length-i+1, 2).setValue(str);
  }
}
