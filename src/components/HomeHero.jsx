import React from 'react'

import { useTheme, useMediaQuery } from '@material-ui/core';
import ReactPlayer from 'react-player'

const HomeHero = () => {
  const theme = useTheme();
const showText = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <div >
      { showText &&
      <ReactPlayer height='100vh' width='100vw' url='https://www.youtube.com/watch?v=YFDGCEui-mk' muted={true} playing={true} />
}
    </div>
  )
}

export default HomeHero