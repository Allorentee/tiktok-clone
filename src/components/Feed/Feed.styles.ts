import styled from 'styled-components'

export const VideoSlider = styled('section')`
  position: absolute;
  inset: 0;
  width: 260px;
  height: 562px;
  border-radius: 26px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`

export const Video = styled('video')`
  max-width: 260px;
  min-height: 100%;
  aspect-ratio: 9/16;
  object-fit: cover;
  scroll-snap-align: center;
`
