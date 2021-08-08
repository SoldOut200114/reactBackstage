# 品类管理页面

### react页面添加全局变量
+ 创建全局文件，将变量添加到window 上，最近将文件引入App.js 文件即可。
```
    window.ajax = {};
    import './ajax'
```

### 二次封装axios
+ 如果是get 请求，需要将传递的参数设置为 {params: data}
+ 如果是其他方法，直接将参数传递进去即可 axios.post(url, data);
+ .then 方法返回的参数中，res.data 才是后台返回的数据.
+ .catch 中 e.response.data 是后台返回的数据。

### 使用useRef
+ 如果需要通过ref获取元素的value值，ref.current.state.value
```
    const inputRef = useRef();
    <input reef={inputRef}/>
    let value = inputRef.current.state.value;
```
