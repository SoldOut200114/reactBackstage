import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MyRouter from './route'

export default function App() {
    return (
        <BrowserRouter>
            <MyRouter/>
        </BrowserRouter>
    )
}
