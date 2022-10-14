import './sidebar.css'
import { LineStyle, Report, ChatBubbleOutline, MailOutline, DynamicFeed, BarChart, Timeline, TrendingUp, WorkOutline, PermIdentity, Storefront, AttachMoney,  } from"@material-ui/icons"

export default function Sidebar() {
    return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <LineStyle className='sidebarIcon' />
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon' />
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon' />
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">QuicMenu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <PermIdentity className='sidebarIcon' />
                        Users
                    </li>
                    <li className="sidebarListItem">
                        <Storefront className='sidebarIcon' />
                        Product
                    </li>
                    <li className="sidebarListItem">
                        <AttachMoney className='sidebarIcon' />
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <BarChart className='sidebarIcon' />
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MailOutline className='sidebarIcon' />
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeed className='sidebarIcon' />
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutline className='sidebarIcon' />
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <WorkOutline className='sidebarIcon' />
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon' />
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <Report className='sidebarIcon' />
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}
