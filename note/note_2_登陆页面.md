# 登陆页面笔记
### 组件里面引入图片
+ 在样式文件中引入背景图片，直接按照之前的方式进行引入 ``` background: url() ```
+ 在组件中通过 
    ``` import img from '../images/img.jpg'
        const style = {
            background: url(img)
        }
        <div className={style}></div> // 背景图片设置
        <img src={img} /> // img 设置src路径
    ```
### 设置背景图片渐变
```
    background: linear-gradient(to right top, #ffffff 0%,#000000 100%);
```
### 函数式组件进行路由跳转
```
    import { useHistory } from "react-router-dom";
    const history = useHistory();
    history.push('/home');
```
```
    使用withRouter进行包裹组件
    import { withRouter } from "react-router-dom";
    const MyContent = (props) => {
        const { history } = this.props;

        history.push('/home');
    }
    const FirstTest = withRouter(MyContent);
```
