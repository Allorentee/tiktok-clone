import styled from 'styled-components'

export const PhoneContainStyled = styled('div')`
  position: absolute;
  width: 280px;
  height: 580px;
  background-color: red;
  border-radius: 50px;
`

export const PhoneStyled = styled('main')`
  position: absolute;
  width: 300px;
  height: 600px;
  background-color: red;
  background: url('phone-bg.png') no-repeat;
  background-size: contain;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
  z-index: 999;
`

