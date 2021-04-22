# Foundation - Vue

日本語 | [English](./README.md)

> Foundation for Sites と VueJS を統合したボイラープレート（フェーズ I）

<p align="center"><img src="https://user-images.githubusercontent.com/5172584/78217125-567c8780-74f6-11ea-8f2e-7617163a9bc1.png" alt="site image"></p>

このリポジトリは、[Foundation for Sites](https://get.foundation/sites/docs/)で[Vue 単一ページアプリケーション](https://jp.vuejs.org)を使用する方法の最も簡単な例です。 プロジェクトは、webpack と babel, gulp, Vue Custom Element を使用したテンプレートです。それぞれ最新版を使うことをポリシーとしています。

## 開発の動機

Foundation フレームワークと Vue.JS を連携させたかった。
まずは、VueJS の初学者向けに作成しました。基本は、`foundation new`（このリポジトリを利用してもらえば必要のないコマンドです）で作成されるテンプレートに VueJS をどうやって追加するのかを理解してもらうのを主眼に置いています。
こういう形です。

```bash
<div>
  <my-custom-element></my-custom-element>
</div>
```

## 必要条件

**このプロジェクトでは、[Node.js](http://nodejs.org) v12.1.0以上、v14.15.5以下を推奨しています。

## セットアップ

テンプレートを手動でセットアップするには、まず Git でダウンロードします：

```bash
git clone https://github.com/annrie/Foundation-Vue.git projectname
cd projectname
```

## インストール

その後、コマンドラインでフォルダを開き、必要な依存関係をインストールします。
npm も使えますが、[yarn2](https://yarnpkg.com/getting-started/install) を使用しています。

```bash
＃ install dependencies
npm install
or
yarn set version berry # yarn2のセットアップ
echo "nodeLinker: node-modules" > .yarnrc.yml
yarn install
```

最後に、 `npm start` あるいは、 `yarn start` を実行して Gulp を実行します。 完成したサイトは、次の URL で表示可能な `dist`というフォルダーに作成されます。

```bash
http://localhost:8000
```

圧縮された、すぐに使用できるアセットを作成するには、次を実行します `npm run build` or `yarn build`。

## 謝辞

- [Adding Vue.js to Foundation's ZURB Stack](https://zendev.com/2018/04/18/adding-vue-files-to-foundation-template.html)が大変参考になりました。本来は folk するべきなのでしょうが、変更点があまりにも多くなったため新規に立ち上げることにしました。
- [vue-foundation](https://github.com/vue-foundation/vue-foundation)の components の各ページは、本リポジトリでも利用させていただいています。感謝します。
- トップページのアニメーションは、[yui540](https://twitter.com/yui540)さんの諸作を参考にさせていただきました。併せて感謝いたします。

## ライセンス

[MIT](https://github.com/annrie/Foundation-Vue/blob/master/LICENSE)
Copyright &copy; 2020-present, Annrie
