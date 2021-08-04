# 网站上传组件

### node 压缩文件
+ 安装 archiver
+ 设置压缩级别
    + zip 是设置的压缩文件后缀，并不是压缩文件名称
    ```
        let archive = archiver('zip', {
            zlib: { level: 9 } // 设置压缩级别
        });
    ```
+ 创建放置压缩文件的文件夹
    + 需要注意的是，如果文件夹存在的话，会报错，所以需要进行文件夹判断
    ```
        if (!fs.existsSync('./web')) {
            fs.mkdirSync('./web');
        }
    ```
+ 设置压缩文件存放路径
    ```
        let output = fs.createWriteStream('./web/build.zip');
        archive.pipe(output);
    ```
+ 读取需要压缩的文件夹
    ```
        archive.directory('build/', false);
    ```
+ 压缩文件夹成功
    ```
        archive.finalize()
    ```
### node 解压zip文件
+ 安装 multer 和 node-stream-zip
```
    const multer = require('multer');
    const StreamZip = require('node-stream-zip');
```
+ 创建放置压缩文件的文件夹
```
    let upload = multer({ dest: 'upload/' });
```
+ 创建后台接口
    + upload.single('logo') 中的logo 是需要与你上传的key值对应
    + fs.renameSync 可以将获取的到文件内容进行重新命名
```
    app.post('/upload', upload.single('logo'), (req, res) => {
        console.log(req.file);
        fs.renameSync('./upload/' + req.file.filename, './upload/' + req.file.originalname);
        unzip('./upload/' + req.file.originalname);
        res.send({ret_code: '0'})
    });
```
+ 编写unzip 方法
    + file 字段为需要解压的文件
    + path 为解压文件存放的文件夹
```
    function unzip(file, path) {
        const zip = new StreamZip({
            file: file,
            storeEntries: true
        });

        zip.on('ready', () => {
            zip.extract(null, path, (err, count) => {
                zip.close();
            });
        });
    }
```
### 网站反向代理
+ apache 进行反向代理，引入必须的代理模块
```
    mod_proxy.so
    mod_proxy_ajp.so
    mod_proxy_balancer.so
    mod_proxy_connect.so
    mod_proxy_http.so
```
+ 进行反向代理设置
```
    SSLProxyEngine on // 开启ssl 反向代理
    Proxyrequests off // 反向代理
    <Proxy *> 
            Order deny,allow
            Allow from all // 配置白名单，黑名单，需要注意的是，黑白名单里面的ip是指电脑的网络ip
    </Proxy>
    ProxyPass /tcc/  https://tcc.taobao.com/  // 代理/tcc 路径到 https://tcc.taobao.com/
    ProxyPassReverse /tcc/  https://tcc.taobao.com/ // 保障代理/tcc 路径 还是显示的原有路径，而不是显示 https://tcc.taobao.com/
```
