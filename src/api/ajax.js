import axios from "axios";

import { message } from "antd";

export default (url, data = {}, method = "get") => {
  let param =
    method === "get"
      ? {
          params: data,
        }
      : data;
  return new Promise((resolve, reject) => {
    axios[method](`/api/${url}`, param).then(
      (res) => {
        if (res.data && res.data.msg) {
          message.success(res.data.msg);
        }
        resolve(res.data);
      },
      (e) => {
        if (e.response.data && e.response.data.msg) {
          message.error(e.response.data.msg);
        }
      }
    );
  });
};
