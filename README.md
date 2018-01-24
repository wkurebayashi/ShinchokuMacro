# 進捗マクロ

このJavaScriptプログラムは、Googleスプレッドシート上に記録した日々の進捗の記録の簡易的に可視化するためのものです。
プログラムはGoogleスプレッドシートのマクロとして登録し、Googleスプレッドシートでメニューをクリックすることにより実行されます。

こちらに閲覧のみ可能、サンプルのシートをご用意しています:
[https://goo.gl/oVDrr2](https://goo.gl/oVDrr2)

## 準備

まず、Googleスプレッドシートで"Record"および"Graph"という名前の2つのシートを用意して下さい。
そして、Googleスプレッドシートのマニューから"ツール" -> "スクリプトエディタ"を選択し、
このレポジトリの"Shinchokumacro.js"をそのままコピーして下さい。
なお、初めてマクロを実行する場合には、警告が表示され、実行の許可を行う必要があります
(もしバグがあって問題が起きたとしても、私は責任をとれませんので自己責任でお願いします)。

## 使い方

まず、"Record"シートに、以下のように日々の進捗を記録します。1列目は日付、2列目はタスクのカテゴリ番号、
3列目はタスクにかけたコスト(例えば所用時間など)、4列目はタスクの内容に関するメモ(任意)です。

![record](fig/record.png)

そして、Googleスプレッドシートのメニューから"進捗マクロ" -> "進捗を可視化"を選択すれば、
以下のように、"Graph"シート上で進捗が簡易的に可視化されます。

![graph](fig/graph.png)

ここで各カテゴリを表す文字は、"ShinchokuMacro.js"の14行目、"category"という配列で指定していますので、
こちらを書き換えてカスタマイズして下さい。

`
    var category = ['🐱','🐶','🐧','🐰','🐤','🐹']; // バー表示に使う文字の配列
`



