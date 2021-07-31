# 初始化项目笔记 #
### create-react-app 项目名称
+ 首先删掉src目录下的文件，重新自己编写入口文件index.js 和App.js 文件
+ 直接利用代码片段快速生成App 组件
+ index.js 文件引入react，react-dom 利用react-dom 的render方法 渲染 App组件到页面上去。
### 引入ant design
+ 引入4.x版本的antd，配置按需引入模式 cnpm i @craco/craco --save
+ 修改package.json 里面的命令行，如 "start": "react-scripts start", 改为 "start": "craco start", 其他命令同理修改。
+ 创建craco.config.js 文件进行webpack配置
    + 自定义主题：
        1. cnpm i craco-less --save 
        2.  ```
            plugins: [
                {
                    plugin: CracoLessPlugin,
                    options: {
                        lessLoaderOptions: {
                            lessOptions: {
                                modifyVars: { '@primary-color': '#1DA57A' },
                                javascriptEnabled: true,
                            },
                        },
                    },
                },
            ]
            ```
    + 配置装饰器语法和配置代理
        1.  cnpm i @babel/plugin-proposal-decorators --save-dev
        2.  ```
            babel:{  
                plugins: [
                    ["@babel/plugin-proposal-decorators", { legacy: true }]
                ]
            },
            ```
        3.  ```
            devServer: {
                proxy: {
                    "/api": {
                        target: "http://baidu.com",  
                        //target: 'http://192.168.9.19:8080',
                        changeOrigin: true,
                        pathRewrite: {
                            "^/api": ""
                        }
                    }
                }
            }
            ```
    + 配置按需引入
        1. cnpm i babel-plugin-import --save
        2. ```
            //在craco.config,.js里加上
            babel:{  
                plugins: [
                    ["@babel/plugin-proposal-decorators", { legacy: true }],  //装饰器
                    [   
                        "import", 
                        {
                            "libraryName": "antd",
                            "libraryDirectory": "es",
                            "style": true //设置为true即是less
                        }
                    ]
                ]
            }
            ```
### 引入路由 
+ cnpm i react-route-dom
+ 路由path 路径进行指定的时候添加Switch 组件只匹配一个，需要注意的是，如果'/' 路径写在最前方，需要添加exact 属性进行精准匹配。
+ 进行路由按需加载配置
    1. 首先从react 中引入 import {lazy, Suspense} from 'react'
    2. 然后lazy(() => import('../pages/login')) 进行按需引入组件，需要注意的是，import方法执行的时候不能全部都为变量，需要前面携带字符串，形如：import('../${pathPrefix}${path}') 这样的写法才不会报错。
    3. Suspense 组件上面需要将它的fallback 属性指定loading组件，该loading组件不能使用lazy 进行引入，需要直接进行引入。
