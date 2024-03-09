import { useRef, useState } from 'react'

import { Play } from '@/components/Icons'
import { Feed } from '@/types/feed'

import { VideoStyled, VideoWrapper } from './video.styles'

export function Video({ video }: { video: Feed }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    const { current } = videoRef
    playing ? current?.pause() : current?.play()
    setPlaying(prev => !prev)
  }

  return (
    <VideoWrapper>
      <VideoStyled ref={videoRef} src={video.url} loop muted onClick={handlePlay}></VideoStyled>{' '}
      <Play fill="#fff" playing={playing} />
    </VideoWrapper>
  )
}

