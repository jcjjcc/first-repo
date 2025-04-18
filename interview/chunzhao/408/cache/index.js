const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

http.createServer((req, res) => {
    let { pathname } = url.parse(req.url, true);
    // console.log(url.parse(req.url, true));
    // console.log(pathname);
    if (pathname === '/') {
        //管道
        //__dirname 项目跟目录的物理路径
        //项目可能要移动位置，所以要使用绝对路径
        // console.log(__dirname)
        fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res);
        return;
    }
    
        let abs = path.join(__dirname, pathname);
        // console.log(abs)
        //E:\codeStore\workspace\lesson_hm\interview\chunzhao\408\cache\tom.png

        fs.stat(abs, (err, stat) => {
            if (err) {
                res.statusCode = 404;
                res.end('not found');
                return
            }
            //强缓存
            // res.setHeader('Expires', new Date(Date.now() + 1000 * 10).toGMTString());
            res.setHeader('Cache-Control', 'max-age=10');

            
            //协商缓存
            console.log(stat)
            console.log(stat.ctime.toGMTString(), '////')
            res.setHeader('Last-Modified', stat.ctime.toGMTString());
            console.log(req.headers['if-modified-since'])
            if(req.headers['if-modified-since'] === stat.ctime.toGMTString()){
                console.log(req.headers['if-modified-since'] === stat.ctime.toGMTString())
                res.statusCode = 304;
                res.end();
                return; 
            }
            if (stat.isFile()) {
                fs.createReadStream(abs).pipe(res);
            }

        })
    

})
    .listen(8080);