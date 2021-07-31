import React from 'react';
import { useLocation } from 'react-router-dom';

import { MyRoute, noOtherComp } from './route';
import Navbar from '../component/navbar';
import Header from '../component/header';

export default function MyRouter() {
    const { pathname } = useLocation();
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
    return (
        <>
            <RouteContent />
        </>
    )
}
