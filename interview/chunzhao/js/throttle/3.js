function throttle(func, wait, options) {
    // 存储定时器的 ID
    let timeout;
    // 存储函数调用时的上下文
    let context;
    // 存储函数调用时的参数
    let args;
    // 存储函数调用的返回值
    let result;
    // 记录上一次函数调用的时间戳
    let previous = 0;
    // 如果 options 参数未提供，则初始化为空对象
    if (!options) options = {};

    // 定时器到期后执行的函数
    const later = function() {
        // 如果 options.leading 为 false，则将 previous 重置为 0；否则，设置为当前时间戳
        previous = options.leading === false ? 0 : Date.now();
        // 清除定时器 ID
        timeout = null;
        func.apply(context, args);
        if (!timeout) context = args = null;
    };

    // 返回的节流函数
    const throttled = function() {
        // 获取当前时间戳
        const now = Date.now();
        // 如果 previous 为 0 且 options.leading 为 false，则将 previous 设置为当前时间戳
        if (!previous && options.leading === false) previous = now;
        // 计算距离下一次允许调用的剩余时间
        const remaining = wait - (now - previous);
        // 保存当前函数调用的上下文
        context = this;
        // 保存当前函数调用的参数
        args = arguments;

        // 如果剩余时间小于等于 0 或大于 wait，则可以立即调用函数
        if (remaining <= 0 || remaining > wait) {
            // 如果有定时器，则清除它
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            // 更新上一次调用的时间戳
            previous = now;
            // 调用原始函数
            func.apply(context, args);
            // 如果定时器已清除，则释放上下文和参数的内存
            if (!timeout) context = args = null;
        } 
        // 如果没有定时器且 options.trailing 不为 false，则设置一个定时器
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
    };

    // 为节流函数添加一个 cancel 方法，用于取消节流并重置状态
    throttled.cancel = function() {
        // 清除定时器
        clearTimeout(timeout);
        // 重置上一次调用的时间戳
        previous = 0;
        timeout = null;
    }
    return throttled;
}