import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="youtube-logo" />
            </div>

            <div className="header__input">
                <input placeholder="Search" type="text" />
                <SearchSharpIcon className="header__inputButton" />
            </div>


            <div className="header__icons">
                <VideoCallSharpIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar src="https://avatars.githubusercontent.com/u/60856303?s=460&u=45073bb35fa8500a2f495d54d5690a2108c26fcb&v=4" alt="Orkun Ozekin" />
            </div>

        </div>
    )
}

export default Header
