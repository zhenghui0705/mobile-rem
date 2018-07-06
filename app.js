require('./index.scss');

//获取html视图宽度
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
// 获取html Dom
let htmlDom = document.getElementsByTagName('html')[0]
// 设置html字体大小
htmlDom.style.fontSize = htmlWidth / 20 + 'px';

window.addEventListener('resize', (e) => {
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    htmlDom.style.fontSize = htmlWidth / 20 + 'px';
});
