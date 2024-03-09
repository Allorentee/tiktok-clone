import styled from 'styled-components'

export const VideoWrapper = styled('section')`
  position: relative;
  max-width: 260px;
  min-height: 100%;
  scroll-snap-align: center;
`

export const VideoStyled = styled('video')`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  aspect-ratio: 9/16;
  object-fit: cover;

`

