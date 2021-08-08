import Ajax from './ajax';

const reqLogin = (data) => Ajax('login', data, 'post');
const getTableList = (data) => Ajax('product/list', data, 'get');
const addItem = (data) => Ajax('product/add', data, 'post');
const updateItem = (data) => Ajax('product/update', data, 'post');

window.ajax = {
    reqLogin,
    getTableList,
    addItem,
    updateItem,
}
