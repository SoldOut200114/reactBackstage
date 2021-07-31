# 修改路由配置

### 路由总结
+ switch组件里面无法直接使用div元素，只能使用react的fragment 元素，但是该元素上面无法编写样式
+ 一些列如 useLocation，useHistory 的hook，是无法在BrowerHistory 外层使用的，所有最好将该元素编写在最外层，将App元素包裹起来
+ 如果想编写使用公共组件的路由，例如好几个页面同时拥有navbar，header等组件，但是同时又不想编写子路由的话，可以在路由文件处进行pathname的路径判断，重新对路由进行一层包裹。
```
    let RouteContent = () => {
        if (noOtherComp.includes(pathname)) {
            return <MyRoute />
        } else {
            return (
                <div>
                    <Header />
                    <div style={{display: 'flex'}}>
                        <Navbar />
                        <div>
                            <MyRoute />
                        </div>
                    </div>
                </div>
            )
        }
    }
```
