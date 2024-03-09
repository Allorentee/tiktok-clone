
import { ReactElement } from 'react'

import { PhoneStyled } from './Phone.styles'

export function Phone({ children }: Readonly<{ children: ReactElement }>) {
  return <PhoneStyled id="observer">{children}</PhoneStyled>

}
