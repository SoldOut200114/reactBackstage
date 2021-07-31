# 创建左侧导航栏

### withRouter的正确用法
+ 当某个组件没有包含在路由组件里面的时候，如果想要使用location，或者其他路由方法的话，需要使用withRouter方法包裹该组件，那么在该组件的props里面，可以取到location，history等参数。
+ 哪里的组件需要使用，就用withRouter进行包裹该组件，而不是用withRouter包裹最外层组件，这样是没有用的。
```
    import { withRouter } from "react-router-dom";
    export default withRouter(props => {
        const { location, history } = props;

        return (
            <div>
                某个组件
            </div>
        )
    });
```
