import { useEffect, useState } from 'react'

import { Feed } from '@/types'
import { getAllVideos } from '@/services/api'
import { Video, VideoSlider } from './Feed.styles'

export function Feed() {
  const [videos, setVideos] = useState<Feed[]>([])

  useEffect(() => {
    getAllVideos().then(setVideos)
  }, [])


  return <VideoSlider>
      {videos.map(video => <Video key={video.id} src={video.url} autoPlay muted loop></Video>)} 
  </VideoSlider>
}

