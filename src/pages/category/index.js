import React, { useState } from "react";

import ProductList from "../../component/productList";
import './index.less';

export default function Category(props) {
    let [defalutValue, setDefaulteValue] = useState({title: '一级分类列表', level: 'oneItem'});

  return (
    <div className='category'>
      <ProductList {...defalutValue}></ProductList>
    </div>
  );
}
