import { useEffect, useState } from 'react'

import { getAllVideos } from '@/services/api'

import { VideoSlider } from './Feed.styles'
import { Feed } from '@/types/feed'
import { Video } from '..'


export function Feed() {
  const [videos, setVideos] = useState<Feed[]>([])

  useEffect(() => {
    getAllVideos().then(setVideos)
  }, [])

  return (
    <VideoSlider>
      {videos.map(video => ( 
          <Video key={video.id} video={video}></Video>
      ))}
    </VideoSlider>
  )
}

