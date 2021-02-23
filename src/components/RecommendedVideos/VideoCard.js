import React from 'react';
import './VideoCard.css';
import Avatar from '@material-ui/core/Avatar';

const VideoCard = ({ image, title, channel, timeStamp, views, channelImage }) => {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbnail" src={image} alt="" />
            <div className="videoCard__info">
                <Avatar className="videoCard__avatar" alt={channel} src={channelImage} />
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} • {timeStamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;