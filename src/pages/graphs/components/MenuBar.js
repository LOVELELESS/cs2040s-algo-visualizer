import React, {useState} from 'react';
import {Menu, Icon, Button} from 'antd';

const {SubMenu} = Menu;

function MenuBar(props) {
  const [current, setCurrent] = useState('mail');

  const handleClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const renderData = data => {
    return data.disabled ? (
      <Menu.Item disabled key={data.value} onClick={data.onClick}>
        <Icon type={data.type} />
        {data.text}
      </Menu.Item>
    ) : (
      <Menu.Item key={data.value} onClick={data.onClick}>
        <Icon type={data.type} />
        {data.text}
      </Menu.Item>
    );
  };

  return (
    <Menu
      style={{position: 'sticky'}}
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal">
      {props.data.map(data => renderData(data))}
    </Menu>
  );
}

export default MenuBar;
