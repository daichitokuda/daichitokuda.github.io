# Daichi Tokuda — personal website

GitHub Pages向けの静的な個人サイトです。フレームワークやビルド、外部フォント、外部JavaScriptは不要です。

## ローカルで確認

このディレクトリで以下を実行し、<http://localhost:8000> を開きます。

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

`index.html` をブラウザで直接開いても閲覧できます。

## ファイル

- `index.html`: Short Biography、Recent News、研究関心、論文、学歴、研究助成、受賞・招待講演。
- `styles.css`: レイアウト、レスポンシブ表示、丸い写真のトリミング。
- `script.js`: モバイルメニュー、論文の年別フィルター、現在位置のナビゲーション表示。
- `assets/daichi-tokuda.jpg`: 提供された写真のコピー。元画像は変更していません。
- `assets/favicon.svg`: 紫と緑を使ったオリジナルのアイコン。

## 内容の更新

`../curriculum-vitae-main/main.tex` をもとに掲載内容を作成しています。更新は `index.html` を編集します。

現在の所属は本人の指定により `1st year PhD Student` としています。修士学位は2026年9月取得で、在籍期間を `Apr 2024 — Sep 2026` と表記しています。博士課程の開始年月は未確認のため、学歴では `Present` としています。

研究関心はCVの3項目をそのまま掲載しています。Recent Newsには採択・講演・発表を短く記載しています。採択・発表の年月はCVまたは本人の指定に基づき、未確認の場合は年のみの表記です。本人の指定により、ICS 2026の採択通知は2月、ISCA 2026は3月としています。両本会議でのClutch・PuDGhostの発表と、それぞれに併催されたMCCSysでのトークも掲載しています。

職務経験、GPA、CVのPDF・LaTeXソースは掲載しません。ダブルブラインド査読中の論文も公開一覧から除外しています。2027年に開始予定の研究助成は `Upcoming` と明記しています。

論文を追加する場合は対応する年の `.publication-list` に `article.publication` を追加します。新しい年を追加する場合は `.publication-year` と `data-year` ボタンを追加し、初期表示の論文件数と最終更新年月も更新してください。

写真の丸い表示はCSSで行っています。表示位置は `.portrait-frame img` の `object-position`、`transform`、`transform-origin` で調整できます。

## 配色

| 用途 | 色 |
| --- | --- |
| 主色・リンク | `#6742D5` |
| ラベンダー | `#D9D4F6` |
| 緑のアクセント | `#528951` |
| 淡い緑 | `#E5F0DA` |

## GitHub Pages

GitHubに反映後、リポジトリの **Settings → Pages** で **Deploy from a branch → main → / (root)** を選択すると、この構成のまま配信できます。

想定URL: <https://daichitokuda.github.io/>
