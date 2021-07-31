import {
    AppstoreOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined
  } from "@ant-design/icons";

export const menus = [
    {
      key: "/home",
      icon: <PieChartOutlined />,
      title: "首页"
    },
    {
      key: "/product",
      icon: <DesktopOutlined />,
      title: "商品",
      submenus: [
        {
          key: "/category",
          title: "品类管理"
        },
        {
          key: "/productManage",
          title: "商品管理"
        }
      ]
    },
    {
      key: "/user",
      icon: <ContainerOutlined />,
      title: "用户管理"
    },
    {
      key: "/role",
      icon: <MailOutlined />,
      title: "角色管理"
    },
    {
      key: "/chart",
      icon: <AppstoreOutlined />,
      title: "图形图表",
      submenus: [
        {
          key: "/lineChart",
          title: "折线图"
        },
        {
          key: "/barChart",
          title: "柱状图"
        },
        {
          key: "/pieChart",
          title: "饼图"
        }
      ]
    }
  ];
