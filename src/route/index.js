import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { routeArr, pathPrefix } from './route';
import Loading from '../component/loading';

export default function MyRoute() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading/>}>
                <Switch>

                    {
                        routeArr.map(item => <Route key={item.path} {...item} component={lazy(() => import(`../${item.pathPrefix ? item.pathPrefix : pathPrefix}${item.component}`))}></Route>)
                    }
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}
