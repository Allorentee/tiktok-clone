import styled from 'styled-components'

export const VideoSlider = styled('section')`

  position: absolute;
  bottom: 20px;
  right: 20px;

  width: 260px;
  height: 562px;
  border-radius: 26px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`
