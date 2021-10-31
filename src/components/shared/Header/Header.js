import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Avatar from '@mui/material/Avatar';
import { Wrapper } from './styles';

const Header = () => {
  return (
    <Wrapper>
      <div>
        <Avatar src="https://media.farandwide.com/84/ca/84ca16b856ec4facaf4e4378b7e67d99.jpg" />
        <p>Username</p>
      </div>
      <NotificationsNoneIcon />
      <HelpOutlineIcon />
    </Wrapper>
  );
};

export default Header;
