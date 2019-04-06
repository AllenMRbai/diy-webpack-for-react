# create react project without create-react-app

各种框架都有自己的命令行工具，用以一键生成项目。所以平时很少有机会接触 webpack 的配置，顶多在原来的配置文件基础上进行略微地改动。

为了深刻理解前端打包工具是如何与前端项目进行配合的，我刻意花了几天的时间学习了 webpack 的使用。

该项目在不使用`create-react-app`的情况下，使用 webpack 一步步搭建 react 项目。我会记录搭建过程，并与大家分享我的学习成果。

## 项目起步

安装

```bash
npm install
```

启动

```bash
npm start
```

打包

```bash
npm run build
```

## Wiki

- [Home](https://github.com/AllenMRbai/diy-webpack-for-react/wiki)
- [初步搭建项目](https://github.com/AllenMRbai/diy-webpack-for-react/wiki/%E5%88%9D%E6%AD%A5%E6%90%AD%E5%BB%BA%E9%A1%B9%E7%9B%AE)
- [拆分 webpack 配置](https://github.com/AllenMRbai/diy-webpack-for-react/wiki/%E6%8B%86%E5%88%86webpack%E9%85%8D%E7%BD%AE)

## 参考

[Learn Webpack](https://www.youtube.com/watch?v=3On5Z0gjf4U)

[Webpack 的 Bundle Split 和 Code Split 区别和应用](https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650589063&idx=1&sn=36d69a5ac00fbf90e1cdd8c0c8fec32b&chksm=8891d7a3bfe65eb5033078b4f57985229dbc55735c580882b726778212c25ba7dcb08f57a2ae&mpshare=1&scene=23&srcid=0314knIkjUib5roj3IbwcftM#rd)

[webpack guides](https://webpack.js.org/guides)

[learn Webpack step by step](https://www.youtube.com/watch?v=h3TJ7ZEdzHg&list=PLMEIN_H8vMqPBgFfKNHtGxNMBh-8FHJIg)
