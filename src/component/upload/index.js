import React from "react";
import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const props = {
  name: "web",
  action: "https://morebookpro.com/upload",
  onChange(info) {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default function MyUpload() {
  return (
    <Upload {...props}>
      <Button type='primary'>一键部署</Button>
    </Upload>
  );
}
