//独立的线程
self.onmessage = function (e) {
    console.log(e.data);
    self.postMessage('Worker: Message received from main script');
}