import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsPausedIcon from '@mui/icons-material/NotificationsPaused';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Zoollar</span>
      </div>
      <hr/>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <Person2OutlinedIcon className="icon"/>
            <span>Users</span>
          </li>
          <li>
            <HolidayVillageOutlinedIcon className="icon"/>
            <span>Properties</span>
          </li>
          <li>
            <BookOutlinedIcon className="icon"/>
            <span>Blogs</span>
          </li>
          <li>
            <CreditCardOutlinedIcon className="icon"/>
            <span>Orders</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsPausedIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MonitorHeartIcon className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )

}

export default Sidebar