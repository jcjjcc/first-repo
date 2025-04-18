function debounce(func, wait) {
    let timeout;

    return function(...args) {
        const context = this;

        // 清除之前的定时器
        clearTimeout(timeout);

        // 设定新的定时器
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}

