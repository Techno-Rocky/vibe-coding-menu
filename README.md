# ロッキー食堂のメニュー（練習用）

バイブコーディング入門（2026年11月26日）で使う、練習用のアプリです。架空の店「ロッキー食堂」のメニュー表を、Next.jsで作っています。実習の手順は[HANDS-ON.md](HANDS-ON.md)にあります。

## 自分のGitHubにコピーして公開する

下のボタンを押すと、このアプリがあなたのGitHubにコピーされ、Vercelで公開されます。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FTechno-Rocky%2Fvibe-coding-menu&project-name=menu-app&repository-name=menu-app)

## 手元で動かす

```
npm install
npm run dev
```

ブラウザで<http://localhost:3000>を開きます。ふだんはClaude Codeに「動かして見せて」と頼めば、この2つを打ってくれます。

## お題

このアプリには、わざとバラバラなところを残しています。AIに頼んで直してみましょう。

1. 店名と一言を、架空の店に変える（実在の店の名前は使わない）
2. 品目を1つ足す
3. ドリンクの見た目を、フードにそろえる（見出し・カード・値段・ボタン）
4. お客様の画面から［削除］ボタンを隠す
5. 売り切れの品は、［注文する］を灰色にして押せないようにする
6. スマホの幅では、［注文する］をカードの横いっぱいにする
7. フードとドリンクを、それぞれ値段の安い順に並べる

## 決まり

Claude Codeへの決まりは`CLAUDE.md`に書いてあります。`main`に直接コミットせず、ブランチを作ってからPull Requestで入れます。
