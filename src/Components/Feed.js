import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material';

import { FetchFromApi } from '../Utils/FetchFromApi';
import { Sidebar, Videos }from "./";

const Feed = () => {

  const [ seletedCategory, setSeletedCategory ] = useState("New");

  const [videos, setVideos] = useState([]);

  useEffect(() =>{
    // setVideos(null);

    FetchFromApi(`search?part=snippet&q=${seletedCategory}`)
    .then((data) => setVideos(data.items))
  },[seletedCategory])


  return (
    <Stack sx = {{flexDirection: {sx: 'column', md: 'row' }}} >

      <Box sx = {{height: {sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}} >
        <Sidebar seletedCategory= {seletedCategory} setSeletedCategory= {setSeletedCategory}  />

        <Typography className='copyright' variant='body2' sx = {{mt: 1.5, color: '#fff'}} >
          copyright 2023
        </Typography>
      </Box>

      <Box p= {2} sx= {{ overflowY: 'auto', height: '90vh', flex: 2  }} >
        <Typography variant= "h4" fontWeight="bold" mb = {2} sx={{color: 'white'}} >
            {seletedCategory} <span style={{color: '#F31503'}} > Videos </span>
        </Typography>
        <Videos videos= {videos}  />
      </Box>
    </Stack>
  )
}

export default Feed;


