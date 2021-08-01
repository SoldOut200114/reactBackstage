import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";

import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import "./index.less";
import { menus } from "../navbar/menus";

const getUserInfo = () => {
  let username = sessionStorage.getItem("username");
  return { username };
};

const getPageInfo = (pathname) => {
  let paths = menus
    .map((menu) => {
      if (menu.submenus) {
        return menu.submenus;
      }
      return menu;
    })
    .flat(2);
  let pageInfo = paths.find((item) => item.key === pathname) || {};
  return pageInfo;
};

const loginOut = (history) => {
  Modal.confirm({
    title: "Confirm",
    icon: <ExclamationCircleOutlined />,
    content: "确定退出登陆吗？",
    okText: "确认",
    cancelText: "取消",
    onOk: () => {
      sessionStorage.clear();
      history.push("/");
    },
  });
};

const getPlace = () => {
  return new Promise((resolve, reject) => {
    AMap.plugin("AMap.CitySearch", function () {
      var citySearch = new AMap.CitySearch();
      citySearch.getLocalCity(function (status, result) {
        if (status === "complete" && result.info === "OK") {
          resolve(result.city);
        }
      });
    });
  });
};

const getWeather = (res) => {
  return new Promise((resolve, reject) => {
    AMap.plugin("AMap.Weather", function () {
      var weather = new AMap.Weather();
      weather.getLive(res, function (err, data) {
        resolve(data);
      });
    });
  });
};
let timer, oldWeather;

export default withRouter((props) => {
  const {
    location: { pathname },
    history,
  } = props;
  let [user, setUser] = useState({});
  let [pageTitle, setPageTitle] = useState("");
  let [nowTime, setNowTime] = useState(new Date().toLocaleTimeString());
  let [weather, setWeather] = useState(oldWeather);

  useEffect(() => {
    setUser(getUserInfo());
    setPageTitle(getPageInfo(pathname).title);
  }, [pathname]);

  useEffect(() => {
    const updateTime = () => {
      setNowTime(new Date().toLocaleTimeString());
    };
    timer = setInterval(updateTime, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    getPlace()
      .then((res) => {
        return getWeather(res);
      })
      .then((res) => {
        oldWeather = res.weather;
        setWeather(res.weather);
      });
  }, []);

  return (
    <div className="header">
      <div className="userInfo">
        <div>欢迎，{user.username}</div>
        <div
          className="loginOut"
          onClick={() => {
            loginOut(history);
          }}
        >
          退出
        </div>
      </div>
      <div className="pageInfo">
        <div className="title">{pageTitle}</div>
        <div className="weather">
          <div>{nowTime}</div>
          <div>{weather}</div>
        </div>
      </div>
    </div>
  );
});
