# Foundation - Vue

English | [Japanese](./README.ja.md)

> A boilerplate integrating Foundation for Sites and VueJS (Phase I)

<p align="center"><img src="https://user-images.githubusercontent.com/5172584/78217125-567c8780-74f6-11ea-8f2e-7617163a9bc1.png" alt="site image"></p>

This repository is the simplest example of how to use [Vue single page application](https://jp.vuejs.org) in [Foundation for Sites](https://get.foundation/sites/docs/). The project is a template using webpack and babel, gulp, and Vue Custom Element. It is our policy to use the latest version of each.

## Motivation for development

I wanted to work with the Foundation framework and Vue.JS.
First of all, it was created for beginners of VueJS. Basically, the main focus is to help you understand how to add VueJS to the template created by the `foundation new`(This is a command you don't need if you want to use the repository.).
It's like this.

```bash
<div>
  <my-custom-element></my-custom-element>
</div>
```

## Requirements

**This project requires [Node.js](http://nodejs.org) <=v12.1.0 and v14.15.5<= is recommended.** Please be aware that you might encounter problems with the installation if you are using the most current Node version (bleeding edge) with all the latest features.

## Setup

To set up the template manually, first download it in Git: the

```bash
git clone https://github.com/annrie/Foundation-Vue.git projectname
cp projectname
```

## Installation

Then open the folder in your command line, and install the needed dependencies.
You can also use NPM, but I'm using [yarn2](https://yarnpkg.com/getting-started/install).

```bash
# install dependencies
npm install
or
yarn set version berry # Setup for yarn2
echo "nodeLinker: node-modules" > .yarnrc.yml
yarn install
```

Finally, run `npm start` or `yarn start` to run Gulp. The finished site will be created in a folder named `dist` which can be viewed at the following URL.

```bash
http://localhost:8000
```

To create a compressed, ready-to-use asset, run `npm run build` or `yarn run build`.

## acknowledgement

- [Adding Vue.js to Foundation's ZURB Stack](https://zendev.com/2018/04/18/adding-vue-files-to-foundation-template.html) was very helpful. Normally, it should be folk, but there were too many changes, so I decided to launch a new one.
- The components pages of [vue-foundation](https://github.com/vue-foundation/vue-foundation) are also available in this repository. Thank you.
- The animation of the top page is based on the work of [yui540](https://twitter.com/yui540). I would like to thank you also.

## License

[MIT](https://github.com/annrie/Foundation-Vue/blob/master/LICENSE)
Copyright &copy; 2020-present, Annrie
