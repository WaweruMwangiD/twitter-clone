import { BookmarkAddedOutlined, HomeOutlined, ListAltOutlined, MailOutlined, MoreHorizOutlined, NotificationsNoneOutlined, PermIdentityOutlined, SearchOutlined, Twitter } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions';

function Sidebar() {
  return (
    <div className='sidebar'>
        <Twitter className='twitter__icon' />
        <SidebarOptions active Icon={HomeOutlined} text="Home"/>
        <SidebarOptions Icon={SearchOutlined} text="Search"/>
        <SidebarOptions Icon={NotificationsNoneOutlined} text="Notifications"/>
        <SidebarOptions Icon={MailOutlined} text="Messages"/>
        <SidebarOptions Icon={BookmarkAddedOutlined} text="Bookmark"/>
        <SidebarOptions Icon={ListAltOutlined} text="Lists"/>
        <SidebarOptions Icon={PermIdentityOutlined} text="Profile"/>
        <SidebarOptions Icon={MoreHorizOutlined} text="More"/>
        <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>
    
    </div>
  )
}

export default Sidebar;