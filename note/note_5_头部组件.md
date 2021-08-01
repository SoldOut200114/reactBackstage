# 头部组件

### 页面进行登陆控制

- 页面进行登陆控制需要在路由处，进行判断，如果不符合条件的话，直接重定向到登陆页面。
- 需要注意的是，处于登陆页面的时候需要判断，防止无线循环。

### 引入高德 jsApi

- index.html 文件创建 script 标签，直接引入高德 jsApi
  - `<script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=key"></script>`
- 其他文件需要使用的话，需要创建.eslintrc.js 文件
  - ```
      module.exports = {
          "globals": {
              "AMap":true
          },
      }
    ```
- 如果不创建该文件的话，需要在使用的地方，加入 //eslint-disable-next-line 进行说明

### useEffect 用法

- ```
  useEffect(() => {
      const updateTime = () => {
        setNowTime(new Date().toLocaleTimeString());
      };
      timer = setInterval(updateTime, 1000);

      return () => {
        clearInterval(timer);
      };
    }, []);
  ```
- 返回的方法，在组件进行卸载的时候是会调用的。
