import React, { useState, useEffect } from "react";
import { Modal, Input } from "antd";

export default function UpdateItem(props) {
  const [updateValue, setUpdateValue] = useState("");
  let { showModal, setShowModal, refreshPage, inputValue, setInputValue } =
    props;

  const handleOk = () => {
    if (inputValue.name === updateValue) return;
    let data = {
      ...inputValue,
      name: updateValue,
    };
    ajax.updateItem(data).then((res) => {
      setShowModal(false);
      refreshPage();
    });
  };

  useEffect(() => {
    setUpdateValue(inputValue.name);
  }, [inputValue.name]);
  return (
    <Modal
      title="修改分类"
      visible={showModal}
      onOk={handleOk}
      onCancel={() => setShowModal(false)}
    >
      <p>
        <Input
          value={updateValue}
          onChange={(e) => setUpdateValue(e.target.value)}
        ></Input>
      </p>
    </Modal>
  );
}
