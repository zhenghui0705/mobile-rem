require('./index.scss');

//获取html视图宽度
let htmlWith = document.documentElement.clientWidth || document.body.clientWidth;
// 获取html Dom
let htmlDom = document.getElementsByTagName('html')[0]
// 设置html字体大小
htmlDom.style.fontSize = htmlWith / 20 + 'px'
