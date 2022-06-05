import { FC } from "react";
import { Badge, Tooltip } from "antd";

import { BellOutlined } from "@ant-design/icons";

const HeaderNoticeComponent: FC = () => {
  return (
    <Tooltip title="Thông báo">
      <Badge count={3} overflowCount={999}>
        <span className="notice" id="notice-center">
          <BellOutlined />
        </span>
      </Badge>
    </Tooltip>
  );
};

export default HeaderNoticeComponent;
