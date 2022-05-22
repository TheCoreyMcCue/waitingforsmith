import React from 'react'

import { useTheme, useMediaQuery } from '@material-ui/core';
import ReactPlayer from 'react-player'

const HomeHero = () => {
  const theme = useTheme();
const showText = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <div >
      { showText ? (
      <ReactPlayer height='100vh' width='100vw' loop={true} url='https://www.youtube.com/watch?v=YFDGCEui-mk' muted={true} playing={true} />
      ) : (
        <img src="https://www.waitingforsmith.co.uk/uploads/2018/07/WAITING_FOR_SMITH_GS-1680.jpg-lower-res.jpg" alt="waiting for smith" style={{height: '45vh', width: '100vw'}} />
      )
}
    </div>
  )
}

export default HomeHero