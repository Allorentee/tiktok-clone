import { useRef, useState } from 'react'

import { Feed } from '@/types/feed'

import { VideoStyled } from './video.styles'

export function Video({ video }: { video: Feed }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    const { current } = videoRef
    playing ? current?.pause() : current?.play()
    setPlaying(prev => !prev)
  }

  return <VideoStyled ref={videoRef} src={video.url} loop onClick={handlePlay}></VideoStyled>
}

