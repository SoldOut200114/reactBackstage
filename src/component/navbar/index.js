import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from "@ant-design/icons";

import "./index.less";
import iconImg from "../../assets/common/icon.png";
import { menus } from './menus';

const { SubMenu } = Menu;

export default withRouter(props => {
  const {
    location: { pathname },
    history
  } = props;
  let [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const clickMenuItem = menu => {
    history.push(menu.key);
  };

  const defaultOpenKeys = menus
    .filter(
      item =>
        item.submenus && item.submenus.find(submenu => submenu.key === pathname)
    )
    .map(item => item.key);

  return (
    <div className="navbar" style={{ minWidth: collapsed ? "80px" : "200px" }}>
      <div className="header flex">
        <img src={iconImg} alt="图标" />
        {collapsed ? null : <div>管理后台</div>}
      </div>
      <div className="section">
        <Menu
          defaultSelectedKeys={[pathname]}
          defaultOpenKeys={defaultOpenKeys}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          onClick={clickMenuItem}
        >
          {menus.map(item => {
            if (item.submenus) {
              return (
                <SubMenu {...item}>
                  {item.submenus.map(subMenu => (
                    <Menu.Item key={subMenu.key}>{subMenu.title}</Menu.Item>
                  ))}
                </SubMenu>
              );
            } else {
              return <Menu.Item {...item}>{item.title}</Menu.Item>;
            }
          })}
        </Menu>
      </div>
      <div className="footer">
        <div className="btn" onClick={toggleCollapsed}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </div>
      </div>
    </div>
  );
});
