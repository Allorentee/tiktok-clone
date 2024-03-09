import styled from 'styled-components'

const PlayWrapper = styled.div<{ $playing?: boolean }>`
  display: ${props => props.$playing && 'none'};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`

export function Play({ fill, playing }: { fill: string; playing: boolean }) {
  return (
    <PlayWrapper $playing={playing}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" id="play">
        <path
          fill={fill}
          d="M7 17.259V6.741a1 1 0 0 1 1.504-.864l9.015 5.26a1 1 0 0 1 0 1.727l-9.015 5.259A1 1 0 0 1 7 17.259Z"></path>
      </svg>
    </PlayWrapper>
  )
}

