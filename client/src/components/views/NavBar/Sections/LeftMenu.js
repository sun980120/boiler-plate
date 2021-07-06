import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item key="subscription">
      <Link to="/subscription">Subscription</Link>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu