
import { ReactElement } from 'react'

import { PhoneContainStyled, PhoneStyled } from './Phone.styles'

export function Phone({ children }: Readonly<{ children: ReactElement }>) {
  return (
    <PhoneStyled>
      <PhoneContainStyled>{children}</PhoneContainStyled>
    </PhoneStyled>
  )
}
