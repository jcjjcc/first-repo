const el = document.getElementById('myEl');
el.style.width = '100px';
el.style.height = '100px';
el.style.margin = '100px';
//现代浏览器会打包更新
//但是这是可以避免的
el.classList.add('new-class');
el.style.cssText = 'width: 100px; height: 100px; margin: 100px;';

