import styled from 'styled-components'

import { Props } from './index'

export const P = styled.p<Props>`
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;
  font-size: 14px;
`
