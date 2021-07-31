import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loading from '../component/loading';

export const noOtherComp = ['/'];

const pathPrefix = 'pages/';
const routeArr = [
    {
        path: '/',
        exact: true,
        component: 'login'
    },
    {
        path: '/home',
        component: 'home'
    }
];

export const MyRoute = () => (
    <Suspense fallback={<Loading />}>
        <Switch>

            {
                routeArr.map(item => <Route key={item.path} {...item} component={lazy(() => import(`../${item.pathPrefix ? item.pathPrefix : pathPrefix}${item.component}`))}></Route>)
            }
        </Switch>
    </Suspense>
)

