for(let i = 0; i < 100; i++) {
    el.style.top = el.offsetTop + i + 'px'
}

let top = el.offsetTop //缓存一下
for(let i = 0; i < 100; i++) {
    el.style.top = top + i + 'px'
}