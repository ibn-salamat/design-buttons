import { Button } from "antd";
import { DownloadOutlined, PlusCircleOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";
import "./global.less";


function App() {
  return (
    <>
      <Button>default</Button>
      <Button className="btn-default ">default</Button>
      <Button disabled className="btn-default">
        default disabled
      </Button>
      <br />
      <Button className="btn-default primary">Primary</Button>
      <Button disabled className="btn-default primary">
        Primary disabled
      </Button>
      <br />
      <Button className="btn-default warning">Warning</Button>{" "}
      <Button disabled className="btn-default warning">
        Warning disabled
      </Button>
      <br />
      <Button className="btn-default error">Error</Button>
      <Button disabled className="btn-default error">
        Error disabled
      </Button>
      <br />
      <Button className="btn-default success">Success</Button>{" "}
      <Button disabled className="btn-default success">
        Success disabled
      </Button>
      <hr style={{ margin: "15px 0" }} />
      <h1>Text + Icon</h1>
      <Button className="btn-default ">
        <PlusCircleOutlined />
        default
      </Button>
      <Button disabled className="btn-default">
        <PlusCircleOutlined />
        default disabled
      </Button>
      <br />
      <Button className="btn-default primary">
        <PlusCircleOutlined />
        Primary
      </Button>
      <Button disabled className="btn-default primary">
        <PlusCircleOutlined />
        Primary disabled
      </Button>
      <br />
      <Button className="btn-default warning">
        <PlusCircleOutlined />
        Warning
      </Button>
      <Button disabled className="btn-default warning">
        <PlusCircleOutlined />
        Warning disabled
      </Button>
      <br />
      <Button className="btn-default error">
        <PlusCircleOutlined />
        Error
      </Button>
      <Button disabled className="btn-default error">
        <PlusCircleOutlined />
        Error disabled
      </Button>
      <br />
      <Button className="btn-default success">
        <PlusCircleOutlined />
        Success
      </Button>
      <Button disabled className="btn-default success">
        <PlusCircleOutlined />
        Success disabled
      </Button>
      <hr style={{ margin: "15px 0" }} />
      <h1>Icon</h1>
      <Button className="btn-icon">
        <DownloadOutlined />
      </Button>
      <Button disabled className="btn-icon">
        <DownloadOutlined />
      </Button>
      <br />
      <Button className="btn-icon warning">
        <DownloadOutlined />
      </Button>
      <Button disabled className="btn-icon warning">
        <DownloadOutlined />
      </Button>
      <hr style={{ margin: "15px 0" }} />
      <h1>Link</h1>
      <Button className="btn-link warning">
        <DownloadOutlined />
        Download
      </Button>
      <Button disabled className="btn-link warning">
        <DownloadOutlined />
        Download
      </Button>
    </>
  );
}

export default App;
