import { Menu, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import MenuItem from "antd/lib/menu/MenuItem";
import { useNavigate, useLocation } from "react-router-dom";
import { RouteNames } from "../router";

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Header>
      <Menu theme='dark' mode="horizontal" defaultSelectedKeys={[location.pathname]}>
        <MenuItem key="/users" data-testid="users-link" onClick={() => navigate(RouteNames.USERS)}>Users</MenuItem>
        <MenuItem key="/messages" data-testid="pmessages-link" onClick={() => navigate(RouteNames.MESSAGES)}>Messages</MenuItem>
        <MenuItem key="/settings" data-testid="settings-link" onClick={() => navigate(RouteNames.SETTINGS)}>Settings</MenuItem>
      </Menu>
    </Header>
  );
}

export default Navbar;