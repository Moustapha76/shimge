import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useNavigate } from "react-router-dom";

const App = () => {
    const navigate = useNavigate();

    const goToPage = (label) => {
        navigate(`/nos-produits/${label}`);
      };
    
  const [open, setOpen] = useState(false);

  const handleMenuClick = (e) => {
      console.log(e);
   goToPage(e.value);
  };

  const handleOpenChange = (nextOpen, info) => {
    if (info.source === 'trigger' || nextOpen) {
      setOpen(nextOpen);
    }
  };

  const items = [
    {
      label: 'plomberie',
      key: '1',
      value: 'plomberie'
    },
    {
      label: 'sanitaire',
      key: '2',
      value: 'plomberie'
    },
    {
      label: 'pvc',
      key: '3',
      value: 'plomberie'
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
        onClick: handleMenuClick,
      }}
      onOpenChange={handleOpenChange}
      open={open}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Nos produits
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default App;