import Ajax from './ajax';

const reqLogin = (data) => Ajax('login', data, 'post');
const getTableList = (data) => Ajax('category/list', data, 'get');
const addItem = (data) => Ajax('category/add', data, 'post');
const updateItem = (data) => Ajax('category/update', data, 'post');

window.ajax = {
    reqLogin,
    getTableList,
    addItem,
    updateItem,
}
