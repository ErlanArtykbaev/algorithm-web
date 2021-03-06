import React from "react";
import "antd/dist/antd.css";

import { Menu } from "antd";
import {
  DatabaseOutlined,
  PartitionOutlined,
  BarsOutlined,
  DashboardOutlined,
  CaretUpOutlined,
  ForkOutlined,
  RadarChartOutlined,
  SlidersOutlined,
} from "@ant-design/icons";
// import { NavItems } from "./_nav"
import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;

const Sider = () => {
  const handleClick = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={handleClick}
      style={{ width: 360 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["lists"]}
      mode="inline">
      <SubMenu key="lists" icon={<BarsOutlined />} title="Linked list">
        <Menu.Item key="1">
          <NavLink to="/course/1/lists/what-is-list" className="nav-link">
            What is Linked List
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/course/1/lists/singly" className="nav-link">
            Singly List
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/course/1/lists/doubly" className="nav-link">
            Doubly List
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to="/course/1/lists/visual" className="nav-link">
            Example
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="queues" icon={<DatabaseOutlined />} title="Stack">
        <Menu.Item key="5">
          <NavLink to="/course/1/queues/stecks" className="nav-link">
            Stack
          </NavLink>
        </Menu.Item>
        <Menu.Item key="6">
          <NavLink to="/course/1/queues/queues" className="nav-link">
            Queues
          </NavLink>
        </Menu.Item>
        <Menu.Item key="7">
          <NavLink to="/course/1/queues/priority" className="nav-link">
            Priority Queues
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="o" icon={<DashboardOutlined />} title="Big O">
        <Menu.Item key="9">
          <NavLink to="/course/1/o/what-is-o" className="nav-link">
            What is Big O
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sort" icon={<SlidersOutlined />} title="Sort">
        <Menu.Item key="30">
          <NavLink to="/course/1/sort/what-is-sort" className="nav-link">
            What is Sorting
          </NavLink>
        </Menu.Item>
        <Menu.Item key="31">
          <NavLink to="/course/1/sort/sort-visual" className="nav-link">
            Sort visualization
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="binary-tree"
        icon={<PartitionOutlined />}
        title="Binary Tree">
        <Menu.Item key="11">
          <NavLink to="/course/1/binary/what-is-tree" className="nav-link">
            What is binary tree
          </NavLink>
        </Menu.Item>
        <Menu.Item key="13">
          <NavLink to="/course/1/binary/add-element" className="nav-link">
            Adding element
          </NavLink>
        </Menu.Item>
        <Menu.Item key="14">
          <NavLink to="/course/1/binary/delete-element" className="nav-link">
            Deleting element
          </NavLink>
        </Menu.Item>
        <Menu.Item key="17">
          <NavLink to="/course/1/binary/vizual" className="nav-link">
            Visualization
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="hash" icon={<ForkOutlined />} title="Hash table">
        <Menu.Item key="21">
          <NavLink to="/course/1/hash/what-is-hash" className="nav-link">
            What is has table
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="graph" icon={<RadarChartOutlined />} title="Graphs">
        <Menu.Item key="27">
          <NavLink to="/course/1/graph/what-is-graph" className="nav-link">
            What is Graphs
          </NavLink>
        </Menu.Item>
        <Menu.Item key="28">
          <NavLink to="/course/1/graph/algorithm" className="nav-link">
            Algorithms on graphs
          </NavLink>
        </Menu.Item>
        <Menu.Item key="29">
          <NavLink to="/course/1/graph/example" className="nav-link">
            Example
          </NavLink>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default Sider;
