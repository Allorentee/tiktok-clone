
import { useEffect, useRef, useState } from 'react'

import { Play } from '@/components/Icons'
import { Feed } from '@/types/feed'
import { ExtendedHTMLVideoElement } from '@/types/video'
import { observer } from '@/utils/videoObserver'

import { VideoStyled, VideoWrapper } from './video.styles'

export function Video({ video }: { video: Feed }) {
  const videoRef = useRef<ExtendedHTMLVideoElement | null>(null)
  const [playing, setPlaying] = useState(true)

  const handlePlay = () => {
    const { current: currentVideo } = videoRef
    playing ? currentVideo?.pause() : currentVideo?.play()
    setPlaying(prev => !prev)
  }

  useEffect(() => {
    observer.observe(videoRef.current as Element)
    ;(videoRef.current as ExtendedHTMLVideoElement)._handleIntersect = isIntersecting => {
      isIntersecting ? videoRef.current?.play() : videoRef.current?.load()
      setPlaying(!videoRef?.current?.paused)
    }
  }, [])

  return (
    <VideoWrapper id="#videoWrapper">
      <VideoStyled
        ref={videoRef}
        id={video.id}
        playsInline
        src={video.url}
        loop
        onClick={handlePlay}></VideoStyled>
      <Play fill="#fff" playing={playing} />
    </VideoWrapper>
  )

}

