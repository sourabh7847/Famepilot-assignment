import React, { useState } from 'react';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ViewModuleOutlinedIcon from '@mui/icons-material/ViewModuleOutlined';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import { Container, Content, Divider, Wrapper } from './styles';

const SubHeader = () => {
  const [active, setActive] = useState('permissions');
  return (
    <Wrapper>
      <Container>
        <Content>
          <div
            className={`${active === 'permissions' ? 'active' : ''}`}
            onClick={() => setActive('permissions')}
          >
            <RssFeedIcon />
            <p>Permissions</p>
          </div>
          <Divider className="divider" />
          <div
            className={`${active === 'approval' ? 'active' : ''}`}
            onClick={() => setActive('approval')}
          >
            <ViewModuleOutlinedIcon />
            <p>Approval Matrix</p>
          </div>
        </Content>
        <Content>
          <span>
            <SyncOutlinedIcon />
            <p>Last synced 15 mins ago</p>
          </span>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default SubHeader;
