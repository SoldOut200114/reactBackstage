import React, { useState, useRef, useEffect } from "react";
import { Modal, Select, Input } from "antd";

const { Option } = Select;
const defaultValue = [
  {
    _id: "oneItem",
    name: "一级分类",
  },
];
const defaultSelect = 'oneItem';

export default function AddItem(props) {
  const [options, setOptions] = useState(defaultValue);
  const [selectValue, setSelectValue] = useState(defaultSelect);
  const inputRef = useRef();
  const { showModal, setShowModal, refreshPage } = props;

  const handleOk = () => {
    if (inputRef.current.state.value) {
      ajax
        .addItem({ name: inputRef.current.state.value, level: selectValue })
        .then((res) => {
          inputRef.current.state.value = "";
          setSelectValue(defaultSelect);
          setShowModal(false);
          refreshPage();
          getOptions();
        });
    }
  };

  const handleChange = (value) => {
    if (value === selectValue) return;
    setSelectValue(value);
  };

  const getOptions = () => {
    ajax.getTableList({ level: defaultSelect }).then((res) => {
      setOptions([...defaultValue, ...res]);
    });
  };

  useEffect(() => {
    getOptions();
  }, []);

  return (
    <Modal
      title="添加分类"
      visible={showModal}
      onOk={handleOk}
      onCancel={() => setShowModal(false)}
    >
      <p>所需分类：</p>
      <Select
        value={selectValue}
        style={{ width: "100%" }}
        onChange={handleChange}
      >
        {options.map((option) => (
          <Option key={option._id} value={option._id}>
            {option.name}
          </Option>
        ))}
      </Select>
      <p>分类名称</p>
      <p>
        <Input ref={inputRef}></Input>
      </p>
    </Modal>
  );
}
