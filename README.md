# React-music
React Music WebApp，在听音乐的时候忽然想听腾格尔的钢铁之翼（隐形的翅膀），在网易云上却找不到，就很气。于是想到了做一个，音乐搜索的功能，把所有想听的歌，能够一次性在酷狗、网易云、QQ、虾米等平台上找找完。

### 技术栈

`react` + `react-router` + `ES6/7` + `webpack4` + `Ant Design` + `fetch` + `scss`

### 目录结构
```bash
│  .babelrc      		#babel的规则以及插件
│  .editorconfig		#IDE/编辑器相关的配置
│  .eslintignore		#Eslint忽视的目录
│  .eslintrc.js			#Eslint的规则和插件
│  .gitignore			#Git忽视的目录
│  .postcssrc.js		#postcss的插件
│  package-lock.json
│  package.json			#项目相关的包
│  README.md
│  yarn.lock
│
├─build					#webpack相关的配置
│      utils.js			#webpack配置中的通用方法
│      webpack.base.conf.js	#webpack的基础配置
│      webpack.dev.conf.js	#webpack的开发环境配置
│      webpack.prod.conf.js	#webpack的生产环境配置
│
└─src					#主目录，业务代码
    │  app.css
    │  App.js
    │  favicon.ico
    │  index.ejs
    │  index.js
    │
    │-api               #接口api等配置
    │-compontents       #组件
    │-store             #Redux管理目录
    │-utils             #工具函数位置
    └─assets			#静态目录，存放静态资源
```
### 安装依赖
```bash
yarn install / npm install
```
### 启动项目
```
yarn start/npm run start
```
### 打包项目
```
yarn build/npm run build
```
### 部署项目
```
yarn deploy
```
