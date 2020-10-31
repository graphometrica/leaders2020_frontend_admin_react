import React from "react";

import {
  Row,
  Col,
  Divider,
  Select,
  Drawer,
  Space,
  Form,
  Input,
  DatePicker,
  Typography,
  Radio,
  Image,
  Tabs,
  Checkbox,
  Card,
} from "antd";

const { Option } = Select;
const { Title } = Typography;
const { TextArea } = Input;
const { TabPane } = Tabs;
const { Meta } = Card;

import { LeftPart } from "./LeftPart";
import { RightPart } from "./RightPart";

const GeneralInfo = ({changeValues, values}) => {
  return (
    <>
      <Row gutter={32}>
        <LeftPart changeValues={changeValues} values={values} />
        <RightPart changeValues={changeValues} values={values} />
      </Row>
    </>
  );
};

export { GeneralInfo };
