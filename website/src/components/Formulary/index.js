import "./index.less";
import CategorySelect from "../CategorySelect";

import { Button, Form, Input, Upload, notification } from "antd";
import _service from "@netuno/service-client";
import { UploadOutlined } from "@ant-design/icons";

function Formulary() {
  const onFinish = (values) => {
    const formData = new FormData();
    formData.append("category", values.category);
    formData.append("name", values.name);
    formData.append("telefone", values.telephone);
    formData.append("email", values.email);
    if (values.photo && values.photo.fileList.length > 0) {
      formData.append(
        "photo",
        values.photo.fileList[values.photo.fileList.length - 1].originFileObj
      );
      if (values.documento && values.documento.fileList.length > 0) {
        formData.append(
          "documento",
          values.documento.fileList[values.documento.fileList.length - 1].originFileObj
        );
      }
    }

    _service({
      method: "POST",
      url: "/establishment",
      data: formData,

      success: (response) => {
        notification.success({
          message: "Formulário",
          description: "O formulário foi criado com sucesso!!",
        });
      },
      fail: (e) => {
        console.error("Service Error", e);
        notification.error({
          message: "Formulário",
          description: "O formulário  não foi criado com sucesso",
        });
      },
    });
  };
  const uploadCustomRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  const uploadBeforeValidation = (file) => {
    const isPhoto =
      file.type === ".doc,.docx,application/pdf" || file.type === "image/jpeg";
    const filesFormats = [".doc", ".docx", "application/pdf", "image/jpeg"];

    isPhoto = filesFormats.includes(file.type);
    if (!isPhoto) {
      notification.error({
        message: "imagem inválida  ",
        description: "Apenas é permitido ficheiros de imagem tipo PDF",
      });
    }
    return isPhoto || Upload.LIST_IGNORE;
  };

  return (
    <div className="form">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          className="form_item"
          label="Categoria"
          name="category"
          rules={[{ required: true, message: "Preencha a categoria!" }]}
        >
          <CategorySelect className="categorySelect" />
        </Form.Item>
        <Form.Item
          className="form_item"
          label="Nome"
          name="name"
          rules={[{ required: true, message: "Preencha o seu nome!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="form_item"
          label="Telefone"
          name="telephone"
          rules={[{ required: true, message: "Preencha o seu telefone!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="form_item"
          label="Email"
          name="email"
          rules={[{ required: true, message: "Preencha o seu Email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item className="form_item" label="Curriculo" name="documento">
          <Upload
            className="upload"
            custom
            Request={uploadCustomRequest}
            beforeUpload={uploadBeforeValidation}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item className="form_item" label="Fotografia" name="photo">
          <Upload
            className="upload"
            custom
            Request={uploadCustomRequest}
            beforeUpload={uploadBeforeValidation}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item  className="upload" wrapperCol={{ offset: 4, span: 5 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Formulary;
