import React, { useState } from "react";
import { Tabs } from "antd";
import {
  LineChartOutlined,
  FireOutlined,
  FallOutlined,
  RiseOutlined,
  PlusOutlined,
} from "@ant-design/icons";
const { TabPane } = Tabs;
export const MARKET_TABLE_Tabs = (prams) => {
  const [activeTab, setActiveTab] = useState("1");

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <Tabs activeKey={activeTab} onChange={handleTabChange}>
      <TabPane
        key="1"
        tab={
          <span>
            <LineChartOutlined />
            Trading
          </span>
        }
      >
        { prams.Trading }
      </TabPane>
      <TabPane
        key="2"
        tab={
          <span>
            <FireOutlined />
            Hot
          </span>
        }
      >
           { prams.Hot }
      </TabPane>
      <TabPane
        key="3"
        tab={
          <span>
            <FallOutlined />
            Loser
          </span>
        }
      >
        { prams.Loser }
      </TabPane>
      <TabPane
        key="4"
        tab={
          <span>
            <RiseOutlined />
            24 Hour Change
          </span>
        }
      >
          { prams.HourChange }
      </TabPane>
      <TabPane
        key="5"
        tab={
          <span>
            <PlusOutlined />
            New Listing
          </span>
        }
      >
         { prams.new }
      </TabPane>
    </Tabs>
  );
};
