import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoChannelUrl,
  demoChannelTitle,
  demoVideoTitle
} from '../Utils/Constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  const handleVideoClick = () => {
    // Scroll to the top of the page when a video is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log("hello")
    // Add logic to fetch video data and play the video
    // Your API fetch and video play logic goes here
  };

  return (
    <Card
      sx={{
        width: { sx: '100%', sm: '358px', md: '320px' },
        boxShadow: 'none',
        borderRadius: 0
      }}
    >
      <Link
        to={videoId ? `/video/${videoId}` : demoVideoUrl}
        onClick={handleVideoClick}  // Add the onClick handler here
      >
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link
          to={videoId ? `/video/${videoId}` : demoVideoUrl}
          onClick={handleVideoClick}  // Add the onClick handler here as well
        >
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
