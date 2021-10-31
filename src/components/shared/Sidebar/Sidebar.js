import React, { useState } from 'react';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SecurityIcon from '@mui/icons-material/Security';
import { Wrapper, Header, Tab } from './styles';

const Sidebar = () => {
  const [active, setActive] = useState('AccessControl');
  return (
    <Wrapper>
      <Header>
        <img src="/assets/images/logo.png" alt="" />
        <h2>MYSITE</h2>
      </Header>
      <Tab
        className={`${active === 'Projects' && 'active'}`}
        onClick={() => setActive('Projects')}
      >
        <DashboardOutlinedIcon />
        <p>Projects</p>
      </Tab>
      <Tab
        className={`${active === 'Org' && 'active'}`}
        onClick={() => setActive('Org')}
      >
        <BusinessCenterIcon />
        <p>Organisation Profile</p>
      </Tab>
      <Tab
        className={`${active === 'AccessControl' && 'active'}`}
        onClick={() => setActive('AccessControl')}
      >
        <SecurityIcon />
        <p>Access Control</p>
      </Tab>
    </Wrapper>
  );
};

export default Sidebar;
