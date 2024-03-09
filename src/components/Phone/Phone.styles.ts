
import styled from 'styled-components'

export const PhoneContainStyled = styled('div')`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 260px;
  height: 562px;
  border-radius: 26px;
`

export const PhoneStyled = styled('main')`
  position: relative;
  width: 300px;
  height: 600px;
  background: url('phone-bg.png') no-repeat;
  background-size: contain;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
  z-index: 999;
`
