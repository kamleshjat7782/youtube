// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Box } from "@mui/material";

// import { Videos, ChannelCard} from './'
// import { FetchFromApi } from "../Utils/FetchFromApi";

// const ChannelDetail = () => {

//   const [channelDetail, setChannelDetail] = useState(null);

//   const {id} = useParams();


// console.log(channelDetail);
//   useEffect(() => {
//     FetchFromApi(`channels?part=snippet&id=${id}`)
//     .then((data) => setChannelDetail(data?.items[0]));
//   }, [id]);

//   return (
//     <>hello {id}
//     <div className="kam">hello</div>
//     </>
//   )
// }

// export default ChannelDetail;







import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { FetchFromApi } from "../Utils/FetchFromApi";


const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  console.log(channelDetail);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await FetchFromApi(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await FetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'pink',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
