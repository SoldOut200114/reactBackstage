import React, { useState, useEffect } from "react";
import { Card, Table, Space, Button, Breadcrumb } from "antd";

import AddItem from "./addItem";
import UpdateItem from "./updateItem";
import "./index.less";

const pagination = {
  pageSize: 6,
};
const defaultValue = {
  _id: "oneItem",
  name: "一级分类列表",
};

export default function ProductList(props) {
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [defaultData, setDefaultData] = useState({});
  const [inputValue, setInputValue] = useState({});

  const { title, level } = props;

  const columns = [
    {
      title: "分类名称",
      dataIndex: "name",
      key: "name",
      className: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "操作",
      key: "action",
      className: "action",
      render: (text, record) => (
        <Space size="middle">
          <a onClick={() => ckUpdateLevel(record)}>修改分类</a>
          <a onClick={() => ckViewLevel(record)}>
            {defaultData.name ? null : "查看子分类"}
          </a>
        </Space>
      ),
    },
  ];

  const showModalCk = () => {
    setShowModal(true);
  };

  const getTableList = (value) => {
    let level = value || "oneItem";
    ajax.getTableList({ level }).then((res) => {
      setTableData(res);
    });
  };

  const refreshPage = () => {
    getTableList(defaultData._id);
  };

  const ckUpdateLevel = (item) => {
    setInputValue(item);
    setShowUpdateModal(true);
  }

  const ckViewLevel = (item) => {
    setDefaultData(item);
    getTableList(item._id);
  };

  const goback = () => {
    if (!defaultData.name) return;
    setDefaultData({});
    getTableList(defaultValue._id);
  };

  useEffect(() => {
    getTableList(level);
  }, []);
  return (
    <Card
      title={
        <Breadcrumb>
          <Breadcrumb.Item onClick={goback}>
            {defaultValue.name}
          </Breadcrumb.Item>
          <Breadcrumb.Item>{defaultData.name}</Breadcrumb.Item>
        </Breadcrumb>
      }
      extra={
        <Button type="primary" onClick={showModalCk}>
          + 添加
        </Button>
      }
      // style={card}
      className="card"
    >
      <Table
        rowKey="_id"
        columns={columns}
        dataSource={tableData}
        pagination={pagination}
      />

      <AddItem
        refreshPage={refreshPage}
        showModal={showModal}
        setShowModal={setShowModal}
      ></AddItem>
      <UpdateItem
        refreshPage={refreshPage}
        showModal={showUpdateModal}
        setShowModal={setShowUpdateModal}
        inputValue={inputValue}
        setInputValue={setInputValue}
      ></UpdateItem>
    </Card>
  );
}
