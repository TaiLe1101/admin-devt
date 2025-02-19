import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Divider,
  Form,
  GetProp,
  Input,
  message,
  Select,
  Upload,
  UploadProps,
  UploadFile,
} from "antd";
import { useState } from "react";

interface FieldType {
  appName?: string;
  keyWords?: string;
  introduce?: string;
  linkFacebook?: string;
  linkYoutube?: string;
}

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export default function SystemConfig() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
        setFileList(info.fileList);
      });
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <Form name="system-config" style={{ maxWidth: 600 }}>
      <Divider orientation="left" plain>
        Head
      </Divider>
      <Form.Item<FieldType>
        label="Tên website"
        name="appName"
        rules={[
          { required: true, message: "Vui lòng không bỏ trống trường này!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Từ khóa"
        name="keyWords"
        rules={[
          { required: true, message: "Vui lòng không bỏ trống trường này!" },
        ]}
      >
        <Select mode="tags" />
      </Form.Item>
      <Divider orientation="left" plain>
        Footer
      </Divider>
      <Form.Item<FieldType>
        label="Giới thiệu"
        name="introduce"
        rules={[
          { required: true, message: "Vui lòng không bỏ trống trường này!" },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Divider orientation="left" plain>
        Liên hệ
      </Divider>
      <Form.Item<FieldType> label="Link Facebook" name="linkFacebook">
        <Input />
      </Form.Item>
      <Form.Item<FieldType> label="Link Youtube" name="linkYoutube">
        <Input />
      </Form.Item>
      <Divider orientation="left" plain>
        Khác
      </Divider>
      <Form.Item
        label="Logo"
        name="logo"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload
          name="avatar"
          listType="picture-card"
          showUploadList={false}
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          beforeUpload={beforeUpload}
          onChange={handleChange}
          fileList={fileList}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
          ) : (
            uploadButton
          )}
        </Upload>
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Cập nhật
        </Button>
      </Form.Item>
    </Form>
  );
}
