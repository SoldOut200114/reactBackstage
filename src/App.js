import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.less';
import './api';
import MyRouter from './route'

export default function App() {
    return (
        <BrowserRouter>
            <div className='backstage'>
                <MyRouter/>
            </div>
        </BrowserRouter>
    )
}
